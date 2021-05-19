import { useEffect, useRef } from 'react';
import KickCanvas from '../templates/canvas/kick';

type AppProps = {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
};

function Kick({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);
  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new KickCanvas({
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

export default Kick;
