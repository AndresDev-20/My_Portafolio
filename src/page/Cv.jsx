import React from "react";
import "./page.style/cv.css";
import Header from "../components/Header";

const Cv = () => {
  return (
    <div className="Cv">
      <Header />

      <div className="frame">
        <iframe
          src="./image/CV.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </div>
  );  
};

export default Cv;
