import { useEffect, useRef } from "react";
import "./style/particlesBackground.css";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = [];

  const createParticles = (width, height, count = 100) => {
    particles.length = 0;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2, // Movimiento más suave
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.5 + 1.3, // Radios más variados
      });
    }
  };

  const drawLine = (ctx, p1, p2, baseColor) => {
    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
    const maxDist = 150;
    if (dist < maxDist) {
      const alpha = (1 - dist / maxDist) * 0.5; // transiciones más suaves
      const color = baseColor.replace(/[\d\.]+\)$/g, `${alpha})`);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.6;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const getCSSVar = (name) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(canvas.width, canvas.height);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particleColor = getCSSVar("--particle-color");
      const lineColor = getCSSVar("--line-color");

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          drawLine(ctx, particles[i], particles[j], lineColor);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="canvas-bg" />;
};

export default ParticlesBackground;
