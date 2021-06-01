import { useEffect, useRef } from 'react';
import DugeunCanvas from '../templates/canvas/dugeun';

interface AppProps {
  color: string[];
  backgroundColor: string;
  fontFamily: string;
}

function DugeunComponent({ color, backgroundColor, fontFamily }: AppProps) {
  const ref = useRef(null);

  useEffect(() => {
    const canvasRef = ref.current;
    const canvas = new DugeunCanvas({
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

export default DugeunComponent;
