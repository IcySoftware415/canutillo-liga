import React from "react";
import MyPageBanner from "../components/MyPageBanner";
import MyLigasOptions from "../components/MyLigasOptions";
import ligas from "../images/ligas.png";

const Ligas = () => {
  return (
    <>
      <MyPageBanner imageUrl={ligas} text="Ligas" />
      <MyLigasOptions />
    </>
  );
};

export default Ligas;
