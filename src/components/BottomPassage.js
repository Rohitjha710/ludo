import Cell from './Cell';

const BottomPassage = ({color,gameState,coinsState}) => {
    return (
        <div className={`passage bottom-passage ${color}`}>
        <div className={`passage-container-vertical passage-container-bottom color-${color}`}>
          <Cell gameState={gameState} coinsState={coinsState} id="5"/>
          <Cell gameState={gameState} coinsState={coinsState} id="73"/>
          <Cell gameState={gameState} coinsState={coinsState} id="45"/>

          <Cell gameState={gameState} coinsState={coinsState} id="4"/>
          <Cell gameState={gameState} coinsState={coinsState} id="72"/>
          <Cell gameState={gameState} coinsState={coinsState} id="46"/>

          <Cell gameState={gameState} coinsState={coinsState} id="3"/>
          <Cell gameState={gameState} coinsState={coinsState} id="71"/>
          <Cell gameState={gameState} coinsState={coinsState} id="47"/>

          <Cell gameState={gameState} coinsState={coinsState} id="2"/>
          <Cell gameState={gameState} coinsState={coinsState} id="70"/>
          <Cell gameState={gameState} coinsState={coinsState} isStar={true} id="48"/>

          <Cell gameState={gameState} coinsState={coinsState} id="1"/>
          <Cell gameState={gameState} coinsState={coinsState} id="69"/>
          <Cell gameState={gameState} coinsState={coinsState} id="49"/>

          <Cell gameState={gameState} coinsState={coinsState} id="52"/>
          <Cell gameState={gameState} coinsState={coinsState} isTopArrow={true} color={color} id="51"/>
          <Cell gameState={gameState} coinsState={coinsState} id="50"/>
        </div>
      </div>
    )
}

export default BottomPassage
