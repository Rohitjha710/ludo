import Cell from './Cell';

const BottomPassage = ({color,gameState,coinsState,handleCoinClick}) => {
    return (
        <div className={`passage bottom-passage ${color}`}>
        <div className={`passage-container-vertical passage-container-bottom color-${color}`}>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="5"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="73"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="45"/>

          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="4"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="72"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="46"/>

          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="3"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="71"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="47"/>

          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="2"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="70"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} isStar={true} id="48"/>

          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="1"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="69"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="49"/>

          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="52"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} isTopArrow={true} color={color} id="51"/>
          <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="50"/>
        </div>
      </div>
    )
}

export default BottomPassage
