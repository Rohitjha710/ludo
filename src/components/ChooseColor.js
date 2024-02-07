import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ChooseColor = ({chooseColor}) => {


  const handleSubmit = (color) => {
    chooseColor(color);
  };
    return (
      <div className="form-container">
      <h1>Choose your Coin Color<br/> 
        (अपने घर के रंग चयन करें)</h1>
      <div className="color-container">
        <div className="choose-color red" onClick={()=>handleSubmit('red')}></div>
        <div className="choose-color green" onClick={()=>handleSubmit('green')}></div>
        <div className="choose-color yellow" onClick={()=>handleSubmit('yellow')}></div>
        <div className="choose-color blue" onClick={()=>handleSubmit('blue')}></div>
      </div>
    </div>
      );
}

export default ChooseColor
