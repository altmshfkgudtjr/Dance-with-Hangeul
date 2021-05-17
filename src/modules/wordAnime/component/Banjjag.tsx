import { useEffect, useRef } from 'react';
import BanjjagCanvas from '../templates/canvas/banjjag';

type AppProps = {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
};

function Banjjag({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new BanjjagCanvas({
      canvas: canvasRef,
      color,
      backgroundColor,
      fontFamily,
    });
    canvas.init();
    canvas.start();
  }, [color, backgroundColor, fontFamily]);
  return <canvas ref={ref}></canvas>;
}

export default Banjjag;
