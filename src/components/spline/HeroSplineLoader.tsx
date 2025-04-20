import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

type HeroSplineLoaderProps = {
  splineUrl: string;
  canvasId?: string;
  className?: string;
};

export default function HeroSplineLoader({ splineUrl, canvasId, className = 'w-full h-full' }: HeroSplineLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [app, setApp] = useState<Application | null>(null);

  useEffect(() => {
    if (canvasRef.current && !app) {
      const application = new Application(canvasRef.current);
      application.load(splineUrl)
        .then(() => console.log('Hero Spline Loaded:', splineUrl));

      setApp(application);
    }

    return () => {
      app?.dispose();
    };
  }, [splineUrl, app]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        id={canvasId || `hero-spline-${Date.now()}`}
        className="w-full h-full block"
      />
    </div>
  );
}
