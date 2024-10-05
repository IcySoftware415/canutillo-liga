// PartidosPage.js
import React from "react";
import MyPageBanner from "../components/MyPageBanner";
import field1 from "../images/field1.png";
import "./PartidosPage.css"; // CSS for the PartidosPage component
import Partidos from "../components/Partidos";

const PartidosPage = () => {
  return (
    <>
      <div className="partidos-page">
        <MyPageBanner imageUrl={field1} text="Partidos" />
      </div>
      <div className="partidos-page-fixtures-container">
        <Partidos />
      </div>
    </>
  );
};

export default PartidosPage;
