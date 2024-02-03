import { FaStar } from "react-icons/fa";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

const Cell = props => {
  const colors = {
    blue: "#66CCFF",
    green: "#009900",
    yellow: "#FFCC00",
    red: "#FF0000"
  };

  const arrowStyle = {
    color: colors[props.color]
  };

  const handleClick = () => {
    props.handleCoinClick(props.gameState[props.id])
  };

  return (
    <div className="cell" style={{ position: "relative" }}>
      {props.isStar ? (
        <FaStar
          className="star-cell"
          style={{
            position: "absolute",
            color: "#B2BEB5",
            left: "5%",
            top: "5%",
            zIndex: 1
          }}
        />
      ) : (
        ""
      )}
      {props.isTopArrow ? (
        <FaArrowUp className="fa-arrows-icons ml-3" style={arrowStyle} />
      ) : (
        ""
      )}
      {props.isLeftArrow ? (
        <FaArrowLeft className="fa-arrows-icons ml-3 mt-3" style={arrowStyle} />
      ) : (
        ""
      )}
      {props.isRightArrow ? (
        <FaArrowRight
          className="fa-arrows-icons ml-4 mt-4"
          style={arrowStyle}
        />
      ) : (
        ""
      )}
      {props.isBottomArrow ? (
        <FaArrowDown className="fa-arrows-icons ml-3" style={arrowStyle} />
      ) : (
        ""
      )}
      {props.gameState[props.id].cellState.coins.length > 0 ? (
        <div
        onClick={props.gameState[props.id].cellState.isClickable ? handleClick : null}

          className={`home-square-circle-coin cell-coin ${props.gameState[props.id].cellState.isClickable?'pulsating-effect':''} ${
            props.coinsState[props.gameState[props.id].cellState.coins[0]].color
          } `}
          style={{
            position: "absolute",
            bottom: "15%",
            right: "13%",
            zIndex: 2,
            fontSize: "10px",
            cursor: props.gameState[props.id].cellState.isClickable ? 'pointer' : 'default'
          }}
>
</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cell;
