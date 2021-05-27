import { useEffect } from 'react';

/**
 * Roulette hook
 * @param props
 * @param props.element Roulette Wrapper DOM Element
 */
const useRoulette = (element: HTMLElement) => {
  useEffect(() => {
    if (!element) return;
    element.addEventListener('wheel', onScrollRoulette, true);
    return () => {
      if (!element) return;
      element.removeEventListener('wheel', onScrollRoulette, true);
    };
  }, [element]);

  return true;
};

const onScrollRoulette = (e: any) => {
  const value = Number(e.target.dataset.pos) || 0;

  const cylinderDom = e.target?.querySelector('div');
  if (!cylinderDom) return;

  const degree = value + (e.deltaY < 0 ? -1 : 1) * 20;

  e.target.dataset.pos = degree;
  cylinderDom.style.transform = `rotateX(${-60 + degree}deg)`;
};

export default useRoulette;
