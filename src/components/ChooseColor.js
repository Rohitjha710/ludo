import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ChooseColor = ({chooseColor}) => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!selectedOption){return;}
    chooseColor(selectedOption);
  };
    return (
      <div className="form-container">
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Select an option:</Form.Label>
        <Form.Control as="select" className="form-mobile" custom onChange={handleSelectChange} value={selectedOption} style={{fontSize:'20px'}}>
        <option value="">Open this select menu</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" style={{fontSize:'15px'}}>
        Submit
      </Button>
    </Form>
    </div>
      );
}

export default ChooseColor
