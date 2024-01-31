const Home = ({ color, player, coinsState, gameState }) => {
  const coinColors = {
    blue: "#336699",
    green: "#006600",
    yellow: "#CC9900",
    red: "#990000"
  };
  return (
    <div className={`home-container ${color}`}>
      <div className="home-square">
        <div className={`home-square-circle ${color}`}>
          {coinsState[`${player}Coin1`].cellNo === `${player}h1` ? (
            <div className={`home-square-circle-coin ${color}`}></div>
          ) : (
            ""
          )}
        </div>
        <div className={`home-square-circle ${color}`}>
          {coinsState[`${player}Coin2`].cellNo === `${player}h2` ? (
            <div className={`home-square-circle-coin ${color}`}></div>
          ) : (
            ""
          )}
        </div>
        <div className={`home-square-circle ${color}`}>
          {coinsState[`${player}Coin3`].cellNo === `${player}h3` ? (
            <div className={`home-square-circle-coin ${color}`}></div>
          ) : (
            ""
          )}
        </div>
        <div className={`home-square-circle ${color}`}>
          {coinsState[`${player}Coin4`].cellNo === `${player}h4` ? (
            <div className={`home-square-circle-coin ${color}`}></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
