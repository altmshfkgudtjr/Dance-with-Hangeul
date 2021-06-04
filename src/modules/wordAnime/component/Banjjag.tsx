import { useEffect, useRef } from 'react';
import { CanvasType } from '../types/canvas'
import BanjjagCanvas from '../templates/canvas/banjjag';


function Banjjag({ color, backgroundColor, subBackgroundColor, fontFamily }: CanvasType) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new BanjjagCanvas({
      canvas: canvasRef,
      color,
      backgroundColor,
      subBackgroundColor,
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

export default Banjjag;
