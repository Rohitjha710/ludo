import { reverseCoinMap } from "../utils/utils";
const Home = ({ color, player, coinsState, gameState, handleCoinClick }) => {
  const handleClick = obj => {
    handleCoinClick(obj);
  };
  return (
    <div className={`home-container ${color}`}>
      <div className="home-square">
        <div
          className={`home-square-circle ${color}`}
          onClick={() =>
            gameState[reverseCoinMap[player + "h1"]].cellState.isClickable
              ? handleClick(gameState[reverseCoinMap[player + "h1"]])
              : null
          }
          style={{
            cursor: gameState[reverseCoinMap[player + "h1"]].cellState
              .isClickable
              ? "pointer"
              : "default"
          }}
        >
          {coinsState[`${player}Coin1`].cellNo === `${player}h1` ? (
            <div
              className={`home-square-circle-coin ${color} ${
                gameState[reverseCoinMap[player + "h1"]].cellState.isClickable
                  ? "pulsating-effect"
                  : ""
              }`}
            ></div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`home-square-circle ${color}`}
          onClick={() =>
            gameState[reverseCoinMap[player + "h2"]].cellState.isClickable
              ? handleClick(gameState[reverseCoinMap[player + "h2"]])
              : null
          }
          style={{
            cursor: gameState[reverseCoinMap[player + "h2"]].cellState
              .isClickable
              ? "pointer"
              : "default"
          }}
        >
          {coinsState[`${player}Coin2`].cellNo === `${player}h2` ? (
            <div
              className={`home-square-circle-coin ${color} ${
                gameState[reverseCoinMap[player + "h2"]].cellState.isClickable
                  ? "pulsating-effect"
                  : ""
              }`}
            ></div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`home-square-circle ${color}`}
          onClick={() =>
            gameState[reverseCoinMap[player + "h3"]].cellState.isClickable
              ? handleClick(gameState[reverseCoinMap[player + "h3"]])
              : null
          }
          style={{
            cursor: gameState[reverseCoinMap[player + "h3"]].cellState
              .isClickable
              ? "pointer"
              : "default"
          }}
        >
          {coinsState[`${player}Coin3`].cellNo === `${player}h3` ? (
            <div
              className={`home-square-circle-coin ${color} ${
                gameState[reverseCoinMap[player + "h3"]].cellState.isClickable
                  ? "pulsating-effect"
                  : ""
              }`}
            ></div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`home-square-circle ${color}`}
          onClick={() =>
            gameState[reverseCoinMap[player + "h4"]].cellState.isClickable
              ? handleClick(gameState[reverseCoinMap[player + "h4"]])
              : null
          }
          style={{
            cursor: gameState[reverseCoinMap[player + "h4"]].cellState
              .isClickable
              ? "pointer"
              : "default"
          }}
        >
          {coinsState[`${player}Coin4`].cellNo === `${player}h4` ? (
            <div
              className={`home-square-circle-coin ${color} ${
                gameState[reverseCoinMap[player + "h4"]].cellState.isClickable
                  ? "pulsating-effect"
                  : ""
              }`}
            ></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
