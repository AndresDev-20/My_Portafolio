import "./style/loader.css";

const LOGO = "<A.dev/>".split("");

const Loader = () => {
  return (
    <div className="container__spinner" role="status" aria-live="polite">
      <div className="Loader_box">
        <div className="Loader_orbit" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 className="Loader_logo" aria-label="Andres.dev">
          {LOGO.map((char, index) => (
            <span key={index} style={{ "--i": index }}>
              {char}
            </span>
          ))}
        </h2>
        <div className="Loader_bar" aria-hidden="true">
          <span></span>
        </div>
        <span className="Loader_text">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
