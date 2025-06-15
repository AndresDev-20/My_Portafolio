import { useNavigate } from "react-router-dom";
import Education from "../../features/education/Education";
import "./style/certificate.css";

function Certificate({ t }) {
  const navigate = useNavigate();
  const VolverHome = () => {
    navigate("/", { state: { scrollTo: "Start" } });
  };
  return (
    <section className="Certificates">
      <div className="Certificate_volver">
        <h1 onClick={VolverHome}>Volver</h1>
      </div>
      <Education t={t} />
    </section>
  );
}

export default Certificate;
