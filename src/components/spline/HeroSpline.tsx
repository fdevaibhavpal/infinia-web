import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineViewer() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/FvKOzox03XjKLkPn/scene.splinecode');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        id="canvas3d"
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
}
