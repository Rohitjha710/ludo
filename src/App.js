import Container from './components/Container';
import ChooseColor from './components/ChooseColor';
 import {useState,useEffect} from 'react';
function App() {
  // set colorChossen to false 
  const [myColor,changeMyColor]=useState('red');
  const [colorChoosen,setPlayer1Color]=useState(true)


  useEffect(()=>{
    // alert('page has laoded')
  },[])

  
  const chooseColor =(color)=>{
    changeMyColor(color);
    setPlayer1Color(true);
  }
  return (
    <div className="App">
      <h1 className="display-1 text-center gray">
        Ludo by Rohit      
      </h1>
     {colorChoosen? <Container myColor={myColor}/>:<ChooseColor chooseColor={chooseColor}/>}
    </div>
  );
}

export default App;
