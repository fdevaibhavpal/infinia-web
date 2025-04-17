import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function MissionSpline() {
  useEffect(() => {
    const canvas = document.getElementById('canvas31') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/OYEb4QkljWEC7fkh/scene.splinecode');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
    <canvas
      id="canvas31"
      className="w-full h-full block "
    />
  </div>
  );
}

