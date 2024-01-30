import Form from 'react-bootstrap/Form';

const ChooseColor = () => {
    const onSubmit =(e)=>{
e.preventDefault();
console.log(e.target.value);
    }
    return (
        <Form.Select aria-label="Default select example" onSubmit={onsubmit}>
          <option>Open this select menu</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </Form.Select>
      );
}

export default ChooseColor
