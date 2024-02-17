import React from "react";
import './style/cv.css'

const Cv = () => {
  return (
    <div className="Cv">
      <div className="frame">
        <iframe
          src="../../../images/Cv.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </div>
  );  
};

export default Cv;