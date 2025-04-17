import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function FooterSpline() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3f') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/9MAyr4udHef2N7p4/scene.splinecode');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
    <canvas
      id="canvas3f"
      className="w-full h-full block "
    />
  </div>
  );
}

