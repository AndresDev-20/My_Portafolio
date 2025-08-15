// src/components/ParticlesBackground.jsx
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Obtenemos las variables de CSS solo una vez
  const cssVars = useMemo(() => {
    const styles = getComputedStyle(document.documentElement);
    return {
      particleColor: styles.getPropertyValue("--Particle-color"),
      linkColor: styles.getPropertyValue("--line-color"),
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: false },
            resize: true,
          },
        },
        particles: {
          color: { value: cssVars.particleColor },
          links: {
            color: cssVars.linkColor,
            distance: 140,
            enable: true,
            opacity: 0.25,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: 90,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
        background: {
          color: "transparent",
        },
      }}
    />
  );
};

export default ParticlesBackground;
