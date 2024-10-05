import "./Goleo.css";

const Goleo = ({ leagueFilter, gender = null }) => {
  return (
    <div className="goleo-table">
      <div className="goleo-title">Goleo</div>
      <GoleoPlayer
        pos={"P"}
        name={"JUGADOR"}
        team={"EQUIPO"}
        goals={"G"}
      ></GoleoPlayer>
      <GoleoPlayer
        pos={1}
        name={"Isaac Padilla"}
        team={"La Banca"}
        goals={10}
      ></GoleoPlayer>
    </div>
  );
};

const GoleoPlayer = ({ pos, name, team, goals }) => {
  return (
    <div className="goleo-row">
      <div className="goleo-column">
        <div className="goleo-container position">
          <div className="goleo-item position">{pos}</div>
        </div>
      </div>
      <div className="goleo-column">
        <div className="goleo-container name">
          <div className="goleo-item name">{name}</div>
        </div>
      </div>
      <div className="goleo-column">
        <div className="goleo-container name">
          <div className="goleo-item name">{team}</div>
        </div>
      </div>
      <div className="goleo-column">
        <div className="goleo-container goals">
          <div className="goleo-item goals">{goals}</div>
        </div>
      </div>
    </div>
  );
};

export default Goleo;
