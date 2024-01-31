
import Cell from './Cell';
const LeftPassage = ({color,gameState,coinsState}) => {
    return (
        <div className={`passage left-passage ${color}`}>
        <div className={`passage-container-horizontal passage-container-left color-${color}`}>
            <Cell gameState={gameState} coinsState={coinsState} id="13"/>
            <Cell gameState={gameState} coinsState={coinsState} id="14"/>
            <Cell gameState={gameState} coinsState={coinsState} id="15"/>
            <Cell gameState={gameState} coinsState={coinsState} id="16"/>
            <Cell gameState={gameState} coinsState={coinsState} id="17"/>
            <Cell gameState={gameState} coinsState={coinsState} id="18"/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="12" isRightArrow={true} color={color}/>
            <Cell gameState={gameState} coinsState={coinsState} id="74"/>
            <Cell gameState={gameState} coinsState={coinsState} id="75"/>
            <Cell gameState={gameState} coinsState={coinsState} id="76"/>
            <Cell gameState={gameState} coinsState={coinsState} id="77"/>
            <Cell gameState={gameState} coinsState={coinsState} id="78"/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="11"/>
            <Cell gameState={gameState} coinsState={coinsState} id="10" />
            <Cell gameState={gameState} coinsState={coinsState} id="9" isStar={true}/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="8"/>
            <Cell gameState={gameState} coinsState={coinsState} id="7"/>
            <Cell gameState={gameState} coinsState={coinsState} id="6"/>
  
            </div>
  
        </div>
    )
}

export default LeftPassage
