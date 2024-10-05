import React, { useState, useEffect } from "react";
import TeamStanding from "./TeamStanding";
import "./MyStandingsTable.css";

const MyStandingsTable = ({ leagueName, displayHeading = false }) => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    // Construct the file path based on the league name
    const filePath = `/${leagueName}.json`;

    // Fetch data from the dynamically constructed file path
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Sort teams by points and then by goal difference
        const sortedStandings = data.teams.sort((a, b) => {
          if (b.points === a.points) {
            return b.goalDifference - a.goalDifference;
          }
          return b.points - a.points;
        });
        setStandings(sortedStandings);
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, [leagueName]); // Rerun the effect when leagueName changes

  return (
    <div className="table-container">
      {displayHeading ? (
        <div className="table-title">{leagueName}</div>
      ) : (
        <div className="table-title">Tabla</div>
      )}

      {/* Render table headers */}
      <TeamStanding
        position="P"
        teamName="EQUIPO"
        wins="PG"
        draws="PE"
        losses="PP"
        played="PJ"
        goalsFor="GF"
        goalsAgainst="GC"
        goalDifference="DG"
        points="PTS"
      />
      {/* Map over the sorted standings data */}
      {standings.map((team, index) => (
        <TeamStanding
          key={team.id}
          position={index + 1}
          teamName={team.teamName}
          wins={team.wins}
          draws={team.draws}
          losses={team.losses}
          played={team.played}
          goalsFor={team.goalsFor}
          goalsAgainst={team.goalsAgainst}
          goalDifference={team.goalDifference}
          points={team.points}
        />
      ))}
    </div>
  );
};

export default MyStandingsTable;
