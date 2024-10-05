import React from "react";
import MyPageBanner from "../components/MyPageBanner";
import field1 from "../images/field1.png";

function Home() {
  return (
    <>
      <MyPageBanner imageUrl={field1} text="Inicial" />
    </>
  );
}

export default Home;
