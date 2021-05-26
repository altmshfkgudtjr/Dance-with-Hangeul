import { useEffect } from 'react';

/**
 * 룰렛 hook
 * @param props
 * @param props.ref 룰렛 스크롤 타겟 Ref
 */
const useRoulette = (ref: any) => {
  /** 스크롤 이벤트 부착 작업 */
  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener('scroll', onScrollRoulette);
    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener('scroll', onScrollRoulette);
    };
  }, [ref]);

  return true;
};

const onScrollRoulette = (e: any) => {
  const targetDom = e.target?.querySelector('div');
  if (!targetDom) return;

  const scrollTop = e.target.scrollTop;
  targetDom.style.transform = `rotateX(${0 + scrollTop / 5}deg)`;
};

export default useRoulette;
