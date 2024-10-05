import React from "react";
import { Link } from "react-router-dom";
import "./MyLigasOptions.css"; // Make sure to create this CSS file

const MyLigasOptions = () => {
  const days = [
    { name: "LUNES 5V5", path: "/ligas/lunes5v5" },
    { name: "MIERCOLES 5V5", path: "/ligas/miercoles" },
    { name: "JUEVES 5V5 MIXTO", path: "/ligas/jueves" },
    { name: "VIERNES 7V7", path: "/ligas/viernes" },
    { name: "SABADO 7V7", path: "/ligas/sabado" },
  ];

  return (
    <div className="menu-container">
      {days.map((day) => (
        <Link key={day.name} to={day.path} className="menu-item">
          {day.name}
          <span className="arrow">{">"}</span>
        </Link>
      ))}
    </div>
  );
};

export default MyLigasOptions;
