import { useEffect, useRef } from 'react';
import './style/animatedCursor.css';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-tilt]';

// Cursor con punto + anillo que lo sigue con retraso. Se mueve con requestAnimationFrame
// (sin re-renderizar React en cada movimiento del mouse).
const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let frame;

    const loop = () => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      document.body.classList.add('Cursor_on');
      const hovering = e.target instanceof Element && e.target.closest(INTERACTIVE);
      ring.classList.toggle('is-hover', Boolean(hovering));
    };

    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');
    const onLeave = () => document.body.classList.remove('Cursor_on');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="main-cursor" aria-hidden="true" />
    </>
  );
};

export default AnimatedCursor;
