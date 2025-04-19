import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function PreloaderSpline() {
  useEffect(() => {
    const canvas = document.getElementById('preloader-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/YOUR_PRELOADER_SPLINE_URL/scene.splinecode');

    return () => {
      app.dispose();
    };
  }, []);

  return (
    <div className="relative w-[200px] h-[200px]">
      <canvas id="preloader-canvas" className="w-full h-full block pointer-events-none" />
    </div>
  );
}
