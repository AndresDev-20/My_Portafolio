import { Images } from "../../assets/images";

// Cinta infinita de tecnologías. Cada fila se duplica para que el bucle no tenga cortes.
const ROW_ONE = [
  { name: "JavaScript", icon: "bxl-javascript" },
  { name: "TypeScript", icon: "bxl-typescript" },
  { name: "Node.js", icon: "bxl-nodejs" },
  { name: "Express.js", img: Images.Express },
  { name: "Python", img: Images.Python },
  { name: "FastAPI", img: Images.FastAPI },
  { name: "Django", img: Images.Django },
  { name: "Java", img: Images.Java },
  { name: "Spring", img: Images.Sprint },
];

const ROW_TWO = [
  { name: "React", icon: "bxl-react" },
  { name: "Redux", icon: "bxl-redux" },
  { name: "Tailwind", img: Images.Tailwin },
  { name: "Docker", img: Images.Docker },
  { name: "PostgreSQL", icon: "bxl-postgresql" },
  { name: "MongoDB", icon: "bxl-mongodb" },
  { name: "MySQL", img: Images.Mysql },
  { name: "Claude", img: Images.Claude },
  { name: "N8n", img: Images.N8n },
  { name: "Postman", img: Images.Postman },
];

const Row = ({ items, reverse }) => (
  <div className={`Marquee_row ${reverse ? "Marquee_row--reverse" : ""}`}>
    <ul className="Marquee_track">
      {[...items, ...items].map((item, index) => (
        <li className="Marquee_item" key={index} aria-hidden={index >= items.length}>
          {item.img ? (
            <img src={item.img} alt="" loading="lazy" />
          ) : (
            <i className={`bx ${item.icon}`}></i>
          )}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TechMarquee = ({ t }) => (
  <div className="Marquee Reveal" aria-label={t("stats.marquee")}>
    <Row items={ROW_ONE} />
    <Row items={ROW_TWO} reverse />
  </div>
);

export default TechMarquee;
