import Container from './components/Container';
import ChooseColor from './components/ChooseColor';
 import {useState,useEffect} from 'react';
function App() {
  const fourColor = ['red','green','yellow','blue'];
  const [myColor,changeMyColor]=useState('red');

  useEffect(()=>{
    // alert('page has laoded')
  },[])
  return (
    <div className="App">
      <h1 className="display-1 text-center gray">
        Ludo by Rohit      
      </h1>
      {/* <ChooseColor/> */}
      <Container myColor={myColor}/>
    </div>
  );
}

export default App;
