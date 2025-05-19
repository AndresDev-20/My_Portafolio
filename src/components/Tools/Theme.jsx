import React, { useEffect, useState } from "react";
import "./style.css"

const Theme = () => {
  const [Day, setDay] = useState(true);
  const [Theme, setTheme] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
  }, [Theme]);

  const noche = () => {
    const newTheme = Theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setDay(false);
  };

  const dia = () => {
    const newTheme = Theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setDay(true);
  };

  return (
    <section>
      <button className="Theme">
        {Day ? (
          <h1 onClick={noche}>
            <i className="bx bx-sun"></i>
          </h1>
        ) : (
          <h1 onClick={dia}>
            <i className="bx bx-moon"></i>
          </h1>
        )}
      </button>
    </section>
  );
};

export default Theme;
