import React from "react";
import "./StatsHeader.css";

// Accept props as an argument
const StatsHeader = () => {
  return (
    <div className="header-stats">
      <div className="header-column position">
        <div className="header-container position">
          {/* Use props for position */}
          <div className="header-item position">POS</div>
        </div>
      </div>
      <div className="header-column teamname">
        <div className="header-container teamname">
          {/* Use props for header name */}
          <div className="header-item teamname">EQUIPO</div>
        </div>
      </div>
      <div className="header-column games">
        <div className="header-container games">
          {/* Use props for games data */}
          <div className="header-item data">JG</div>
          <div className="header-item data">JE</div>
          <div className="header-item data">JP</div>
          <div className="header-item data">JJ</div>
        </div>
      </div>
      <div className="header-column goals">
        <div className="header-container goals">
          {/* Use props for goals data */}
          <div className="header-item data">GF</div>
          <div className="header-item data">GC</div>
          <div className="header-item data">DG</div>
        </div>
      </div>
      <div className="header-column points">
        <div className="header-container points">
          {/* Use props for points */}
          <div className="header-item points">PTS</div>
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
