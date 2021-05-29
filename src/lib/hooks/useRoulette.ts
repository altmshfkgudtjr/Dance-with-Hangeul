import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * 룰렛 hook
 * @param props
 * @param props.element Roulette Wrapper DOM Element
 * @returns onClickButton(e: MouseEvent)
 */
const useRoulette = (element: any) => {
  /**
   * DEGREE_STEP: 룰렛이 돌아가는 step
   * DEGREE_START: 룰렛 초기 degree
   * DEGREE_PADDING: 룰렛 degree 한계값
   */
  const DEGREE_STEP = 20;
  const DEGREE_START = 0;
  const DEGREE_PADDING = 5;

  /** 룰렛에 포함된 요소 개수 */
  const [buttonCount, setButtonCount] = useState<number>(0);

  /**
   * cylinderDom = 룰렛 DOM Element
   * touchClientY: 터치 스크롤 방향을 알기위한 값
   * rouletteDegree: 룰렛의 현재 degree
   * currentIdx: 룰렛이 가르키고 있는 현재 요소 idx
   */
  const cylinderDom = useRef<any>(null);
  const touchClientY = useRef<number>(0);
  const rouletteDegree = useRef<number>(0);
  const currentIdx = useRef<number>(0);

  /** 룰렛 요소 클릭 함수 */
  const onClickButton = (e: any) => {
    if (!cylinderDom.current) return;

    const value = Number(element.current.dataset.pos) || 0;
    const targetIdx = Number(e.currentTarget.dataset.idx);
    const degree = value + (targetIdx - currentIdx.current) * DEGREE_STEP;

    currentIdx.current = targetIdx;

    element.current.dataset.pos = degree;
    cylinderDom.current.style.transform = `rotateX(${DEGREE_START + degree}deg)`;
  };

  /** 룰렛 Scroll 함수 */
  const onScrollRoulette = useCallback(
    (e: any) => {
      if (!cylinderDom.current) return;

      const value = Number(element.current.dataset.pos) || 0;
      const direction = e.deltaY < 0 ? -1 : 1;
      const degree = value + direction * DEGREE_STEP;

      // 룰렛 한계값
      if (degree === -DEGREE_STEP || degree === buttonCount * DEGREE_STEP) return;

      currentIdx.current += direction;

      element.current.dataset.pos = degree;
      cylinderDom.current.style.transform = `rotateX(${DEGREE_START + degree}deg)`;
    },
    [element, buttonCount],
  );

  /** 룰렛 TouchDown 함수 */
  const onCursorDown = useCallback(() => {
    rouletteDegree.current = Number(element.current.dataset.pos) || 0;
  }, [element]);

  /** 룰렛 TouchMove 함수 */
  const onCursorMove = useCallback(
    (e: any) => {
      if (!cylinderDom.current) return;

      const value = Number(element.current.dataset.pos) || 0;
      const { clientY } = e.touches[0];
      const direction = clientY > touchClientY.current ? -1 : 1;
      const degree = value + direction * 3;

      touchClientY.current = clientY;

      if (
        DEGREE_START + degree < 0 - DEGREE_PADDING ||
        DEGREE_START + degree > (buttonCount - 1) * DEGREE_STEP + DEGREE_PADDING
      ) {
        return;
      }

      element.current.dataset.pos = degree;
      cylinderDom.current.style.transform = `rotateX(${DEGREE_START + degree}deg)`;
    },
    [element, buttonCount],
  );

  /** 룰렛 TouchEnd 함수 */
  const onCursorUp = useCallback(
    (e: any) => {
      if (!cylinderDom.current) return;

      const value = Number(element.current.dataset.pos) || 0;
      const diff = Math.round((value % DEGREE_STEP) / DEGREE_STEP)
        ? (value < 0 ? -1 : 1) * (DEGREE_STEP - Math.abs(value % DEGREE_STEP))
        : -(value % DEGREE_STEP);
      const idxDegreeDiff = value + diff - rouletteDegree.current;
      const idxDiff = idxDegreeDiff / DEGREE_STEP;

      currentIdx.current += idxDiff;

      element.current.dataset.pos = value + diff;
      cylinderDom.current.style.transform = `rotateX(${DEGREE_START + value + diff}deg)`;
    },
    [element],
  );

  /** 초기값 설정 */
  useEffect(() => {
    const cylinderElement = element.current?.querySelector('div');
    if (!cylinderElement) return;

    cylinderDom.current = cylinderElement;
    setButtonCount(cylinderElement.children.length);
  }, [element, setButtonCount]);

  /** 이벤트 등록 / 해제 작업 */
  useEffect(() => {
    const targetDom = element.current;
    if (!targetDom) return;
    targetDom.addEventListener('wheel', onScrollRoulette);
    targetDom.addEventListener('touchstart', onCursorDown);
    targetDom.addEventListener('touchmove', onCursorMove);
    targetDom.addEventListener('touchend', onCursorUp);

    return () => {
      if (!targetDom) return;
      targetDom.removeEventListener('wheel', onScrollRoulette);
      targetDom.removeEventListener('touchstart', onCursorDown);
      targetDom.removeEventListener('touchmove', onCursorMove);
      targetDom.removeEventListener('touchend', onCursorUp);
    };
  }, [element, onScrollRoulette, onCursorDown, onCursorMove, onCursorUp]);

  return {
    selectedIdx: currentIdx.current,
    onClickRouletteButton: onClickButton,
  };
};

export default useRoulette;
