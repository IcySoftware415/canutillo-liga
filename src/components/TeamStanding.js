import React from "react";
import "./TeamStanding.css";

// Accept props as an argument
const TeamStanding = (props) => {
  return (
    <div className="team-row">
      <div className="team-column position">
        <div className="team-container position">
          <div className="team-item position">{props.position}</div>
        </div>
      </div>
      <div className="team-column teamname">
        <div className="team-container teamname">
          <div className="team-item teamname">{props.teamName}</div>
        </div>
      </div>
      <div className="team-column games">
        <div className="team-container games">
          <div className="team-item data odd">{props.wins}</div>
          <div className="team-item data">{props.draws}</div>
          <div className="team-item data odd">{props.losses}</div>
          <div className="team-item data">{props.played}</div>
        </div>
      </div>
      <div className="team-column goals">
        <div className="team-container goals">
          <div className="team-item data odd">{props.goalsFor}</div>
          <div className="team-item data">{props.goalsAgainst}</div>
          <div className="team-item data odd">{props.goalDifference}</div>
        </div>
      </div>
      <div className="team-column points">
        <div className="team-container points">
          <div className="team-item points">{props.points}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamStanding;
