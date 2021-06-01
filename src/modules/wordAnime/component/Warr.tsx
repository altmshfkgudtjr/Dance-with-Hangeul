import { useEffect, useRef } from 'react';
import WarrCanvas from '../templates/canvas/warr';

type AppProps = {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
};

function Warr({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new WarrCanvas({
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

export default Warr;
