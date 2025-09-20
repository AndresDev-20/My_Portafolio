import React, { useEffect, useState } from "react";
import './style/theme.css'

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
          <h2 onClick={noche}>
            <i className="bx bx-sun"></i>
          </h2>
        ) : (
          <h2 onClick={dia}>
            <i className="bx bx-moon"></i>
          </h2>
        )}
      </button>
    </section>
  );
};

export default Theme;