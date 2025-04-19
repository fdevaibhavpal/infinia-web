import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

export default function MissionSpline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [app, setApp] = useState<Application | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '200px',
        threshold: 0.2,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    let application: Application;

    if (isVisible && containerRef.current) {
      const canvas = document.createElement('canvas');
      canvas.id = 'canvas31';
      canvas.className = 'w-full h-full block';
      containerRef.current.appendChild(canvas);

      application = new Application(canvas);
      application.load('https://prod.spline.design/OYEb4QkljWEC7fkh/scene.splinecode')
        .then(() => console.log('Spline Loaded'));

      setApp(application);
    } else {
      if (app) {
        app.dispose();
        setApp(null);

        const canvas = document.getElementById('canvas31');
        canvas?.remove();
      }
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-screen overflow-hidden">
      {/* Canvas inserted dynamically */}
    </div>
  );
}
