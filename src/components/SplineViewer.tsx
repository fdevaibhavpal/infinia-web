import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineViewer() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/aS5WtkL1HnTYZmo4/scene.splinecode');
  }, []);

  return (
    <canvas id="canvas3d"    className="w-screen  sm:h-[80vh] h-full block" />
  );
}

