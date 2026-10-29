import { useEffect } from "react";
import "./style/motion.css";

/*
  Efectos de movimiento globales. Se activan con atributos/clases en el HTML:
  - .Reveal            → aparece al entrar en pantalla (agrega .is-visible)
  - .Reveal-stagger    → sus hijos aparecen en cascada (usa --i)
  - [data-spotlight]   → luz que sigue al mouse (--mx / --my)
  - [data-tilt]        → inclinación 3D según el mouse (--rx / --ry)
  - [data-magnetic]    → el elemento se acerca un poco al cursor
  - [data-ripple]      → onda al hacer clic
*/
const MotionEffects = () => {
  useEffect(() => {
    // ---------- Aparición al hacer scroll ----------
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const seen = new WeakSet();
    const prepare = (root) => {
      if (!(root instanceof Element)) return;
      const nodes = root.matches(".Reveal, .Reveal-stagger") ? [root] : [];
      nodes.push(...root.querySelectorAll(".Reveal, .Reveal-stagger"));
      nodes.forEach((node) => {
        if (seen.has(node) || node.classList.contains("is-visible")) return;
        seen.add(node);
        if (node.classList.contains("Reveal-stagger")) {
          [...node.children].forEach((child, index) => child.style.setProperty("--i", index));
        }
        io.observe(node);
      });
    };

    prepare(document.body);
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach(prepare));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // ---------- Mouse: spotlight, tilt y magnético ----------
    let tilted = null;
    let magnet = null;

    const resetTilt = () => {
      if (!tilted) return;
      tilted.style.setProperty("--rx", "0deg");
      tilted.style.setProperty("--ry", "0deg");
      tilted = null;
    };

    const resetMagnet = () => {
      if (!magnet) return;
      magnet.style.translate = "";
      magnet = null;
    };

    const onMove = (e) => {
      // Solo con mouse: en pantallas táctiles no hay "hover"
      if (e.pointerType !== "mouse") return;
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      const spot = target.closest("[data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = target.closest("[data-tilt]");
      if (tilt !== tilted) resetTilt();
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const max = Number(tilt.dataset.tilt) || 8;
        tilt.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
        tilted = tilt;
      }

      const mag = target.closest("[data-magnetic]");
      if (mag !== magnet) resetMagnet();
      if (mag) {
        const r = mag.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        mag.style.translate = `${(x * 0.25).toFixed(1)}px ${(y * 0.35).toFixed(1)}px`;
        magnet = mag;
      }
    };

    const onLeave = () => {
      resetTilt();
      resetMagnet();
    };

    // ---------- Onda al hacer clic ----------
    const onClick = (e) => {
      const host = e.target instanceof Element ? e.target.closest("[data-ripple]") : null;
      if (!host) return;
      const r = host.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      const wave = document.createElement("span");
      wave.className = "Ripple_wave";
      wave.style.width = wave.style.height = `${size}px`;
      wave.style.left = `${e.clientX - r.left - size / 2}px`;
      wave.style.top = `${e.clientY - r.top - size / 2}px`;
      host.appendChild(wave);
      wave.addEventListener("animationend", () => wave.remove());
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("click", onClick);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return null;
};

export default MotionEffects;
