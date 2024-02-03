import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
  FaSquare
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Dice = ({ diceState, onDiceRoll }) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);

  useEffect(() => {
    // Show loading for 1 second
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [diceState.value]);

  return (
    <div className="dice-button-container">
      <div className='dice-container'>
      {loading ? 

          <FaSquare size={50} className="spinning-dice" style={{borderRadius:'70%', animationDuration: '0.5s' }} />
       : (
        <>
          {diceState.value === "2" ? <FaDiceTwo size={50} /> : ""}
          {diceState.value === "3" ? <FaDiceThree size={50} /> : ""}
          {diceState.value === "4" ? <FaDiceFour size={50} /> : ""}
          {diceState.value === "5" ? <FaDiceFive size={50} /> : ""}
          {diceState.value === "6" ? <FaDiceSix size={50} /> : ""}
          {diceState.value === "1" || diceState.value === "" ? (
            <FaDiceOne size={50} />
          ) : (
            ""
          )}
          
        </>
      )}
      </div>
      {diceState.canbeRolled ? (
        <button type="button" className="button-class" onClick={onDiceRoll}>
          Roll Dice
        </button>
      ) : ''
      }
    </div>
  );
};

export default Dice;
