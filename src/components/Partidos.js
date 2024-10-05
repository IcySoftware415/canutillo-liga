import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Partidos.css";
import MatchCard from "./MatchCard";

const Partidos = ({ leagueFilter = null }) => {
  const [games, setGames] = useState([]); // State to hold the fetched games
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [weeks, setWeeks] = useState([]);
  const [leagues, setLeagues] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/games.json"); // Replace with your actual URL or local path
        const data = await response.json();

        setGames(data.games);

        // Extract unique weeks and leagues from the fetched data
        setWeeks([...new Set(data.games.map((game) => game.week))]);
        setLeagues([...new Set(data.games.map((game) => game.league))]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextWeek(),
    onSwipedRight: () => handlePreviousWeek(),
  });

  const handleNextWeek = () => {
    setCurrentWeekIndex((prev) => (prev + 1) % weeks.length);
  };

  const handlePreviousWeek = () => {
    setCurrentWeekIndex((prev) => (prev - 1 + weeks.length) % weeks.length);
  };

  // Filter games by the current week and league
  const filteredGames = games.filter((game) => {
    const isWeekMatch = game.week === weeks[currentWeekIndex];
    const isLeagueMatch = leagueFilter ? game.league === leagueFilter : true;
    return isWeekMatch && isLeagueMatch;
  });

  return (
    <div {...handlers} className="fixtures-container">
      <h2 className="week-header">
        {weeks.length > 0 ? (
          <>
            {`Semana ${weeks[currentWeekIndex]}`}
            <br />
            {leagueFilter ? "" : "Todos"}
            {/* {leagueFilter || "Todos"} */}
          </>
        ) : (
          "Loading..."
        )}
      </h2>
      <div className="matchcard-container">
        {filteredGames.map((game) => (
          <MatchCard
            key={game.id}
            team1={game.team1}
            team2={game.team2}
            time={game.time}
            date={game.date}
            status={game.status}
            team1Score={game.team1Score}
            team2Score={game.team2Score}
            day={game.league} // Pass league as day
            displayLeague={leagueFilter == null}
          />
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handlePreviousWeek}>Previous Week</button>
        <button onClick={handleNextWeek}>Next Week</button>
      </div>
    </div>
  );
};

export default Partidos;
