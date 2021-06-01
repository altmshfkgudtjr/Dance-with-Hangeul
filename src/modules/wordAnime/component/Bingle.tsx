import { useEffect, useRef } from 'react';
import BingleCanvas from '../templates/canvas/bingle';

type AppProps = {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
};

function Bingle({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new BingleCanvas({
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

export default Bingle;
