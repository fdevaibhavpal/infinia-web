import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function ContactSpline() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3g') as HTMLCanvasElement;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load('https://prod.spline.design/H-GRvrVsdEQpn8lz/scene.splinecode');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
    <canvas
      id="canvas3g"
      className="w-full h-full block "
    />
  </div>
  );
}

