// MatchDayBanner.js
import React from "react";
import "./MatchDayBanner.css";

const MatchDayBanner = ({ day, date }) => {
  // Check if day exists and contains an underscore
  const parts =
    day && day.includes("_") ? day.split("_") : ["Day", "Not Available"];

  return (
    <div className="date-banner">
      <h1>{parts[0] + " " + parts[1]}</h1>
      <h2>{date || "Date Not Available"}</h2>
    </div>
  );
};

export default MatchDayBanner;
