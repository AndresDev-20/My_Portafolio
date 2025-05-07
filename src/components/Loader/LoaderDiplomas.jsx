import "./style/Loader.css";

const LoaderDiplomas = () => {
  return (
    <div className="container__spinner-Diplosmas">
      <div className="atom-spinner">
        <div className="spinner-inner">
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-circle">&#9679;</div>
        </div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default LoaderDiplomas;