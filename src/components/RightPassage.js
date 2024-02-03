import Cell from './Cell';

const RightPassage = ({color,gameState,coinsState,handleCoinClick}) => {
    return (
    
        <div className={`passage right-passage ${color}`}>
        <div className={`passage-container-horizontal passage-container-right color-${color}`}>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="32"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="33"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="34"/>
  
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="35" isStar={true}/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="36"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="37"/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="88"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="87"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="86"/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="85"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="84"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="38" isLeftArrow={true} color={color}/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="44"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="43"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="42"/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="41"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="40"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="39"/>
  
            </div>
  
        </div>
    )
}

export default RightPassage
