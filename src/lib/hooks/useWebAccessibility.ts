import { useState, useEffect } from 'react';

/**
 * 웹 접근성을 위한 hook
 * - mouse 조작 또는 마우스 조작에 따른 상태 변경
 * @returns {boolean} 마우스 조작 여부
 */
function useWebAccessibility() {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('mousedown', () => setIsMouseDown(true));
    document.addEventListener('keydown', () => setIsMouseDown(false));
  }, []);

  return isMouseDown;
}

export default useWebAccessibility;
