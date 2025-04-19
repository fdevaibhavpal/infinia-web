import { useEffect, useState, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { useInView } from './useInView'; // Reusing the reusable hook

type LazySplineLoaderProps = {
  splineUrl: string;
  canvasId?: string;
  className?: string;
};

export default function LazySplineLoader({ splineUrl, canvasId, className = 'w-full h-full' }: LazySplineLoaderProps) {
  const { ref, isInView } = useInView({ rootMargin: '200px', threshold: 0.2 });
  const [app, setApp] = useState<Application | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let application: Application;

    if (isInView && ref.current) {
      if (!canvasRef.current) {
        const canvas = document.createElement('canvas');
        canvas.className = 'w-full h-full block ';
        canvas.id = canvasId || `spline-${Date.now()}`;
        ref.current.appendChild(canvas);
        canvasRef.current = canvas;

        application = new Application(canvas);
        application.load(splineUrl)
          .then(() => console.log('Spline Loaded:', splineUrl));

        setApp(application);
      }
    } else {
      if (app) {
        app.dispose();
        setApp(null);

        if (canvasRef.current) {
          canvasRef.current.remove();
          canvasRef.current = null;
        }
      }
    }
  }, [isInView, splineUrl, canvasId, ref]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Canvas will be inserted here */}
    </div>
  );
}
