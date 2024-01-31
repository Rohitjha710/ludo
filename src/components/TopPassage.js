import Cell from './Cell';

const TopPassage = ({color,gameState,coinsState}) => {
    return (
        <div className={`passage top-passage ${color}`}>
        <div className={`passage-container-vertical passage-container-top color-${color}`}>
        <Cell gameState={gameState} coinsState={coinsState} id="24"/>
        <Cell gameState={gameState} coinsState={coinsState} id="25" isBottomArrow={true} color={color}/>
        <Cell gameState={gameState} coinsState={coinsState} id="26"/>

        <Cell gameState={gameState} coinsState={coinsState} id="23"/>
        <Cell gameState={gameState} coinsState={coinsState} id="79"/>
        <Cell gameState={gameState} coinsState={coinsState} id="27"/>
        
        <Cell gameState={gameState} coinsState={coinsState} id="22" isStar={true}/>
        <Cell gameState={gameState} coinsState={coinsState} id="80"/>
        <Cell gameState={gameState} coinsState={coinsState} id="28"/>
        
        <Cell gameState={gameState} coinsState={coinsState} id="21"/>
        <Cell gameState={gameState} coinsState={coinsState} id="81"/>
        <Cell gameState={gameState} coinsState={coinsState} id="29"/>
        
        <Cell gameState={gameState} coinsState={coinsState} id="20"/>
        <Cell gameState={gameState} coinsState={coinsState} id="82"/>
        <Cell gameState={gameState} coinsState={coinsState} id="30"/>
        
        <Cell gameState={gameState} coinsState={coinsState} id="19"/>
        <Cell gameState={gameState} coinsState={coinsState} id="83"/>
        <Cell gameState={gameState} coinsState={coinsState} id="31"/>

        </div>

    </div>
    )
}

export default TopPassage
