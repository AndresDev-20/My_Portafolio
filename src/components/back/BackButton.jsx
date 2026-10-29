import { useNavigate } from "react-router-dom";

// Botón "Volver" de las páginas internas. `section` es la sección del inicio a la que regresa.
const BackButton = ({ t, section = "Start" }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <button type="button" className="Back_btn" data-ripple onClick={goBack} aria-label={t("ui.back_home")}>
      <i className="bx bx-left-arrow-alt"></i>
      {t("ui.back")}
    </button>
  );
};

export default BackButton;
