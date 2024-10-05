import React from "react";
import MyPageBanner from "../components/MyPageBanner";
import field1 from "../images/field1.png";
import MyStandingsTable from "../components/MyStandingsTable";
import "./LigaLunes5v5.css";
import Partidos from "../components/Partidos";
import Goleo from "../components/Goleo";

const LigaLunes5v5 = () => {
  return (
    <>
      <MyPageBanner imageUrl={field1} text={"Lunes 5v5"} />
      <div className="layout">
        <div className="left">
          <MyStandingsTable leagueName={"LUNES_5v5"} />
          <Goleo leagueFilter={"LUNES_5v5"}></Goleo>
        </div>

        <Partidos leagueFilter={"LUNES_5v5"} />
      </div>
    </>
  );
};

export default LigaLunes5v5;
