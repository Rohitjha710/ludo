import Home from "./Home";
import TopPassage from "./TopPassage";
import LeftPassage from "./LeftPassage";
import RightPassage from "./RightPassage";
import BottomPassage from "./BottomPassage";
import AllHome from './AllHome';
const Container = ({myColor,gameState,coinsState,player2Color,player3Color,player4Color,handleCoinClick}) => {
  const player1=myColor;
  const player2=player2Color;
  const player3=player3Color;
  const player4=player4Color;

  return (
    <div className="container-square">
      {coinsState ?<> <Home player="p2" color={player2} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>
      <TopPassage color={player3} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>
      <Home player="p3" color={player3} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>


      <LeftPassage color={player2} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>
     <AllHome color={myColor} player2Color={player2Color} player3Color={player3Color} player4Color={player4Color} gameState={gameState} coinsState={coinsState} /> 
      <RightPassage color={player4} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>


      <Home player="p1" color={player1} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>
     <BottomPassage color={player1} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/>
      <Home player="p4" color={player4} gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick}/></>:''}
   
    </div>
  );
};

export default Container;
