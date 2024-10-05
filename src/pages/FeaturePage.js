import React from "react";
import MyPageBanner from "../components/MyPageBanner";
import field1 from "../images/field1.png";
import Partidos from "../components/Partidos";

function Feature() {
  return (
    <>
      <MyPageBanner imageUrl={field1} text="Feature" />
      <Partidos />
    </>
  );
}

export default Feature;
