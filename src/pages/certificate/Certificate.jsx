import Education from "../../features/education/Education";
import BackButton from "../../components/back/BackButton";
import "./style/certificate.css";

function Certificate({ t }) {
  return (
    <section className="Certificates">
      <BackButton t={t} section="Education" />
      <Education t={t} />
    </section>
  );
}

export default Certificate;
