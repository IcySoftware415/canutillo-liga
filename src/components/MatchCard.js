// MatchCard.js
import React from "react";
import "./MatchCard.css";

function MatchCard({
  displayLeague = false,
  team1,
  team1Score,
  team2,
  team2Score,
  day,
  time,
  date,
  status,
}) {
  return (
    <div className={`match-card ${day || "default-day"}`}>
      <div className="teamsScoreContainer">
        <TeamScoreContainer
          team={team1}
          score={team1Score}
          league={day || "default-league"}
          local={"home"}
          status={status}
        />
        <TeamScoreContainer
          team={team2}
          score={team2Score}
          league={day || "default-league"}
          local={"away"}
          status={status}
        />
      </div>
      <DetailsMatchCard
        time={time}
        date={date}
        displayLeague={displayLeague}
        day={day}
      />
    </div>
  );
}

function TeamScoreContainer({ team, score, league, local, status }) {
  return (
    <div className={`teamScoreContainer ${league} ${local}`}>
      <div className="team-name-text">{team}</div>
      <ScoreContainer score={score} status={status} />
    </div>
  );
}

function ScoreContainer({ score, status }) {
  return (
    <div className={`scoreContainer ${status}`}>
      {score !== undefined && score}
    </div>
  );
}

function DetailsMatchCard({ time, date, displayLeague, day }) {
  return (
    <div className="details">
      {displayLeague && <span className="league">{day || "TBA"}</span>}
      <span className="time">{time || "TBA"}</span>
      <span className="date">{date || "Date Not Available"}</span>
    </div>
  );
}

export default MatchCard;
