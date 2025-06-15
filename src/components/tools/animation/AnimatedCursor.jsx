import { useEffect, useRef, useState } from 'react';
import './style/animatedCursor.css';

const AnimatedCursor = () => {
   const [trails, setTrails] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const newTrail = {
        id: idRef.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev, newTrail]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="trail-dot"
          style={{
            left: trail.x,
            top: trail.y,
          }}
        />
      ))}

      {/* Punto principal que siempre sigue al cursor */}
      <div
        className="main-cursor"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
    </>
  );
};




export default AnimatedCursor;
