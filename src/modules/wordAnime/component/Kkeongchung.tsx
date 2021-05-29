import { useEffect, useRef } from 'react';
import KkeongchungCanvas from '../templates/canvas/kkeongchung';

type AppProps = {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
};

function Kkeongchung({ color, backgroundColor, fontFamily }: AppProps) {
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
  }, [color, backgroundColor, fontFamily]);
  return <canvas ref={ref}></canvas>;
}

export default Kkeongchung;
