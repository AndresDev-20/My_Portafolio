// Fondo animado de la portada: pistas de circuito con pulsos de luz que viajan
// hacia el centro, nodos que parpadean y anillos orbitando detrás de la foto.

// Pistas en un lienzo de 400x400 con el centro en (200, 200)
const TRACES = [
  "M8 70 H90 L120 100 H160",
  "M8 140 H70 L95 165 H150",
  "M8 250 H80 L110 220 H150",
  "M30 340 H100 L130 310 H165",
  "M392 60 H310 L285 85 H240",
  "M392 150 H330 L300 180 H255",
  "M392 260 H320 L290 230 H250",
  "M370 345 H300 L270 315 H235",
  "M200 6 V60 L180 80 V120",
  "M260 10 V50 L240 70 V125",
  "M140 394 V340 L160 320 V280",
  "M250 394 V345 L230 325 V285",
];

const NODES = [
  [8, 70], [8, 140], [8, 250], [30, 340], [392, 60], [392, 150], [392, 260],
  [370, 345], [200, 6], [260, 10], [140, 394], [250, 394],
  [160, 100], [150, 165], [150, 220], [165, 310], [240, 85], [255, 180],
  [250, 230], [235, 315], [180, 120], [240, 125], [160, 280], [230, 285],
];

const HeroCircuit = () => (
  <svg className="Hero_circuit" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="heroTrace" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" style={{ stopColor: "var(--First-color)" }} />
        <stop offset="50%" style={{ stopColor: "var(--Accent-2)" }} />
        <stop offset="100%" style={{ stopColor: "var(--Accent-3)" }} />
      </linearGradient>
      <radialGradient id="heroFade" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="#fff" stopOpacity="1" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <mask id="heroMask">
        <rect width="400" height="400" fill="url(#heroFade)" />
      </mask>
    </defs>

    <g mask="url(#heroMask)">
      {/* Pistas base */}
      <g className="Hero_traces">
        {TRACES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Pulsos de luz que recorren cada pista */}
      <g className="Hero_pulses">
        {TRACES.map((d, i) => (
          <path key={d} d={d} pathLength="100" style={{ "--i": i }} />
        ))}
      </g>

      {/* Nodos / soldaduras */}
      <g className="Hero_nodes">
        {NODES.map(([cx, cy], i) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" style={{ "--i": i }} />
        ))}
      </g>
    </g>

    {/* Anillos orbitando */}
    <g className="Hero_orbits">
      <circle className="Hero_orbit Hero_orbit--one" cx="200" cy="200" r="150" pathLength="100" />
      <circle className="Hero_orbit Hero_orbit--two" cx="200" cy="200" r="125" pathLength="100" />
      <g className="Hero_satellite">
        <circle cx="200" cy="50" r="5" />
      </g>
      <g className="Hero_satellite Hero_satellite--two">
        <circle cx="200" cy="75" r="4" />
      </g>
    </g>
  </svg>
);

export default HeroCircuit;
