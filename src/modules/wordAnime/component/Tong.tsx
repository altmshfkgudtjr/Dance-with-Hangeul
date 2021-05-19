import { useEffect, useRef } from 'react';
import TongCanvas from '../templates/canvas/tong';

interface AppProps {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
}

function TongComponent({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);

  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new TongCanvas({
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

export default TongComponent;
