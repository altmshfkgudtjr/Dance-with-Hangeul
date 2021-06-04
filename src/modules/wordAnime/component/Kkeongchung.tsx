import { useEffect, useRef } from 'react';
import { CanvasType } from '../types/canvas'
import KkeongchungCanvas from '../templates/canvas/kkeongchung';

function Kkeongchung({ color, backgroundColor, fontFamily }: CanvasType) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new KkeongchungCanvas({
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

export default Kkeongchung;
