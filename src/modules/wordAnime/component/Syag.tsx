import { useEffect, useRef } from 'react';
import SyagCanvas from '../templates/canvas/syag';

interface AppProps {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
}

function TongComponent({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);

  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new SyagCanvas({
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
