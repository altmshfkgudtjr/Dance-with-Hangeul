import { useEffect } from 'react';

/**
 * Roulette hook
 * @param props
 * @param props.element Roulette Wrapper DOM Element
 */
const useRoulette = (element: HTMLElement) => {
  /** 룰렛 Scroll 함수 */
  const onScrollRoulette = (e: any) => {
    const targetDom = e.target;
    const value = Number(targetDom.dataset.pos) || 0;

    const cylinderDom = targetDom?.querySelector('div');
    if (!cylinderDom) return;

    const degree = value + (e.deltaY < 0 ? -1 : 1) * 20;

    targetDom.dataset.pos = degree;
    cylinderDom.style.transform = `rotateX(${-60 + degree}deg)`;
  };

  /** 룰렛 TouchStart 함수 */
  const onCursorDown = (e: any) => {};

  /** 룰렛 TouchMove 함수 */
  const onCursorMove = (e: any) => {
    const targetDom = e.target;
    const value = Number(targetDom.dataset.pos) || 0;

    const cylinderDom = targetDom?.querySelector('div');
    if (!cylinderDom) return;

    console.log(e);
  };

  /** 룰렛 TouchEnd 함수 */
  const onCursorUp = (e: any) => {};

  /** 이벤트 등록 / 해제 작업 */
  useEffect(() => {
    if (!element) return;
    element.addEventListener('wheel', onScrollRoulette);
    element.addEventListener('touchmove', onCursorMove);
    return () => {
      if (!element) return;
      element.removeEventListener('wheel', onScrollRoulette);
      element.removeEventListener('touchmove', onCursorMove);
    };
  }, [element]);

  return true;
};

export default useRoulette;
