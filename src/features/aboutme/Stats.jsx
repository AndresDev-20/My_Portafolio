import { useEffect, useRef, useState } from "react";

// Cifras que se cuentan desde 0 cuando entran en pantalla
const STATS = [
  { key: "years", value: 3, suffix: "+", icon: "bx-time-five" },
  { key: "projects", value: 6, suffix: "", icon: "bx-rocket" },
  { key: "certificates", value: 17, suffix: "", icon: "bx-award" },
  { key: "tech", value: 27, suffix: "+", icon: "bx-chip" },
];

const Counter = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const begin = performance.now();
    const duration = 1600;

    const tick = (now) => {
      const p = Math.min((now - begin) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return count;
};

const Stats = ({ t }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="About_stats Reveal-stagger" ref={ref}>
      {STATS.map((stat) => (
        <li className="About_stat" key={stat.key} data-spotlight>
          <i className={`bx ${stat.icon}`}></i>
          <span className="About_stat-text">
            <strong>
              <Counter value={stat.value} start={visible} />
              {stat.suffix}
            </strong>
            <span>{t(`stats.${stat.key}`)}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Stats;
