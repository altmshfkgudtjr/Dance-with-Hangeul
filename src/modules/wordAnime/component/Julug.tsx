import { useEffect, useRef } from 'react';
import JulugCanvas from '../templates/canvas/julug';

import { CanvasType } from '../types/canvas'


function JulugComponent({ color, backgroundColor, fontFamily }: CanvasType) {
  const ref = useRef(null);

  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new JulugCanvas({
      canvas: canvasRef,
      color,
      backgroundColor,
      fontFamily,
    });
    canvas.init();
    canvas.start();
    return () => {
      canvas.stop();
    }
  }, [color, backgroundColor, fontFamily]);

  return <canvas ref={ref}></canvas>;
}

export default JulugComponent;
