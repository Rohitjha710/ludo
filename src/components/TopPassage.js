import Cell from './Cell';

const TopPassage = ({color,gameState,coinsState,handleCoinClick}) => {
    return (
        <div className={`passage top-passage ${color}`}>
        <div className={`passage-container-vertical passage-container-top color-${color}`}>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="24"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="25" isBottomArrow={true} color={color}/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="26"/>

        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="23"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="79"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="27"/>
        
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="22" isStar={true}/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="80"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="28"/>
        
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="21"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="81"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="29"/>
        
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="20"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="82"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="30"/>
        
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="19"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="83"/>
        <Cell gameState={gameState} coinsState={coinsState} handleCoinClick={handleCoinClick} id="31"/>

        </div>

    </div>
    )
}

export default TopPassage
