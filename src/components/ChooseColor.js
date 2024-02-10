import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ChooseColor = ({ chooseColor }) => {
  const [noOfPlayer, setNoOfPlayer] = useState("");
  const handleSubmit = color => {
    chooseColor({color,noOfPlayer});
  };
  const handleNoChosen =(numberOfPlayer)=>{
    setNoOfPlayer(numberOfPlayer);
  }
  return (
    <div className="form-container">
      {noOfPlayer ? (
        <>
          {" "}
          <h1>
            Choose your Coin Color
            <br />
            (अपने घर के रंग का चयन करें)
          </h1>
          <div className="color-container">
            <div
              className="choose-color red"
              onClick={() => handleSubmit("red")}
            ></div>
            <div
              className="choose-color green"
              onClick={() => handleSubmit("green")}
            ></div>
            <div
              className="choose-color yellow"
              onClick={() => handleSubmit("yellow")}
            ></div>
            <div
              className="choose-color blue"
              onClick={() => handleSubmit("blue")}
            ></div>
          </div>
          )
        </>
      ) : (
        <>
          {" "}
          <h1>
            Select No Of Player
            <br />
            (खिलाड़ियों की संख्या चुने)
          </h1>
          <div className="color-container">
            <div
              className="choose-color orange"
              onClick={() => handleNoChosen(2)}
            ><h2>2</h2></div>
            <div
              className="choose-color orange"
              onClick={() => handleNoChosen(4)}
            ><h2>4</h2></div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChooseColor;
