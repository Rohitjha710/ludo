
import Cell from './Cell';
const LeftPassage = ({color,gameState,coinsState,handleCoinClick}) => {
    return (
        <div className={`passage left-passage ${color}`}>
        <div className={`passage-container-horizontal passage-container-left color-${color}`}>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="13"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="14"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="15"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="16"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="17"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="18"/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="12" isRightArrow={true} color={color}/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="74"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="75"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="76"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="77"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="78"/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="11"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="10" />
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="9" isStar={true}/>
            
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="8"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="7"/>
            <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="6"/>
  
            </div>
  
        </div>
    )
}

export default LeftPassage
