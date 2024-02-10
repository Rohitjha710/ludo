import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
  FaSquare,
  FaArrowRight
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Dice = ({ diceState, onDiceRoll, myColor, player3Color,player2Color,player4Color }) => {
  const [loading, setLoading] = useState(true);
  const diceCurrentColor =
    diceState.whoseChance === "p1" ? myColor : diceState.whoseChance === "p2"?player2Color:diceState.whoseChance === "p3"?player3Color:player4Color;
  useEffect(() => {
    // Show loading for 1 second
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [diceState.value]);

  return (
    <>
      <div className="dice-button-container" onClick={diceState.canbeRolled ?onDiceRoll:null} style={{cursor:'pointer'}}>
        <div className="dice-container">
          {loading ? (
            <FaSquare
              size={50}
              className="spinning-dice"
              style={{ borderRadius: "70%", animationDuration: "0.5s" }}
            />
          ) : (
            <>
              {diceState.value === "2" ? (
                <FaDiceTwo size={50} style={{ backgroundColor:diceCurrentColor, color: 'black' }} />
              ) : (
                ""
              )}
              {diceState.value === "3" ? (
                <FaDiceThree size={50} style={{ backgroundColor:diceCurrentColor, color: 'black' }} />
              ) : (
                ""
              )}
              {diceState.value === "4" ? (
                <FaDiceFour size={50} style={{ backgroundColor:diceCurrentColor, color: 'black' }} />
              ) : (
                ""
              )}
              {diceState.value === "5" ? (
                <FaDiceFive size={50} style={{ backgroundColor:diceCurrentColor, color: 'black' }} />
              ) : (
                ""
              )}
              {diceState.value === "6" ? (
                <FaDiceSix size={50} style={{ backgroundColor:diceCurrentColor, color: 'black' }} />
              ) : (
                ""
              )}
              {diceState.value === "1" || diceState.value === "" ? (
                <FaDiceOne size={50} style={{ backgroundColor:diceCurrentColor, color: 'black' }} />
              ) : (
                ""
              )}
            </>
          )}
        </div>
        {diceState.canbeRolled ? (
          <button
            type="button"
            className="button-class"
            style={{ backgroundColor: diceCurrentColor, color: "black" }}
          >
            Roll Dice (पासा फेंकें)
          </button>
        ) : (
          <button
          type="button"
          className="button-class"
          style={{ backgroundColor: diceCurrentColor, color: "black" }}
        >
          Play coin first (अपने सिक्के को चले)
        </button>
        )}
      </div>

    </>
  );
};

export default Dice;