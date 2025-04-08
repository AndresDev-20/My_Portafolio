import React, { useEffect, useState } from "react";
import './style/cv.css'
import Loader from "../../components/Loader/Loader";

const Cv = () => {
const [loading, setLoading] = useState(false)

useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [])
  return (
    <div className="Cv">
      {
        !loading && (
          <div>
           <Loader/>
          </div>
        )
      }
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