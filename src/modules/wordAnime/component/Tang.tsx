import { useEffect, useRef } from 'react';
import { CanvasType } from '../types/canvas'
import TangCanvas from '../templates/canvas/tang';

function Tang({ color, backgroundColor, fontFamily }: CanvasType) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new TangCanvas({
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

export default Tang;
