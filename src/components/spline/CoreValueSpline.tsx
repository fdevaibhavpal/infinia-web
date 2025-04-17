import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function CoreValueSpline() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3e') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/XOnXjuLehMuoP9t3/scene.splinecode');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        id="canvas3e"
        className="w-full h-full block "
      />
    </div>
  );
}

