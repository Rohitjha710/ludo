import Cell from './Cell';

const RightPassage = ({color,gameState,coinsState}) => {
    return (
    
        <div className={`passage right-passage ${color}`}>
        <div className={`passage-container-horizontal passage-container-right color-${color}`}>
            <Cell gameState={gameState} coinsState={coinsState} id="32"/>
            <Cell gameState={gameState} coinsState={coinsState} id="33"/>
            <Cell gameState={gameState} coinsState={coinsState} id="34"/>
  
            <Cell gameState={gameState} coinsState={coinsState} id="35" isStar={true}/>
            <Cell gameState={gameState} coinsState={coinsState} id="36"/>
            <Cell gameState={gameState} coinsState={coinsState} id="37"/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="88"/>
            <Cell gameState={gameState} coinsState={coinsState} id="87"/>
            <Cell gameState={gameState} coinsState={coinsState} id="86"/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="85"/>
            <Cell gameState={gameState} coinsState={coinsState} id="84"/>
            <Cell gameState={gameState} coinsState={coinsState} id="38" isLeftArrow={true} color={color}/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="44"/>
            <Cell gameState={gameState} coinsState={coinsState} id="43"/>
            <Cell gameState={gameState} coinsState={coinsState} id="42"/>
            
            <Cell gameState={gameState} coinsState={coinsState} id="41"/>
            <Cell gameState={gameState} coinsState={coinsState} id="40"/>
            <Cell gameState={gameState} coinsState={coinsState} id="39"/>
  
            </div>
  
        </div>
    )
}

export default RightPassage
