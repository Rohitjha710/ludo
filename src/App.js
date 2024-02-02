import Container from "./components/Container";
import ChooseColor from "./components/ChooseColor";
import Dice from './components/Dice';
import { useState, useEffect } from "react";
import { reverseCoinMap } from "./utils/utils";
function App(props) {
  // set colorChossen to false

  const [myColor, changeMyColor] = useState("red");
  const [colorChoosen, setPlayer1Color] = useState(true);
  const [gameState, changeGameState] = useState(props.gameState);

  const fourColor = ["red", "green", "yellow", "blue"];
  const player2Color = fourColor[(fourColor.indexOf(myColor) + 1) % 4];
  const player3Color = fourColor[(fourColor.indexOf(myColor) + 2) % 4];
  const player4Color = fourColor[(fourColor.indexOf(myColor) + 3) % 4];

  const coinsStateInitial = {
    p1Coin1: { cellNo: "1", color: myColor },
    p1Coin2: { cellNo: "71", color: myColor },
    p1Coin3: { cellNo: "p1h3", color: myColor },
    p1Coin4: { cellNo: "p1h4", color: myColor },
    p2Coin1: { cellNo: "p2h1", color: myColor },
    p2Coin2: { cellNo: "p2h2", color: player2Color },
    p2Coin3: { cellNo: "p2h3", color: player2Color },
    p2Coin4: { cellNo: "p2h4", color: player2Color },
    p3Coin1: { cellNo: "p3h1", color: player3Color },
    p3Coin2: { cellNo: "p3h2", color: player3Color },
    p3Coin3: { cellNo: "p3h3", color: player3Color },
    p3Coin4: { cellNo: "p3h4", color: player3Color },
    p4Coin1: { cellNo: "p4h1", color: player4Color },
    p4Coin2: { cellNo: "p4h2", color: player4Color },
    p4Coin3: { cellNo: "p4h3", color: player4Color },
    p4Coin4: { cellNo: "p4h4", color: player4Color }
  };

  const [tempInput, changeTempInput] = useState('');
  const [coinsState, changeCoinsState] = useState(coinsStateInitial);
  const [diceState, changeDiceState] = useState({
    whoseChance:'p1',
    value:'',
    canbeRolled:true
  });

  const assignColorToAllCoins = color => {
    const player2Color = fourColor[(fourColor.indexOf(color) + 1) % 4];
    const player3Color = fourColor[(fourColor.indexOf(color) + 2) % 4];
    const player4Color = fourColor[(fourColor.indexOf(color) + 3) % 4];
    changeCoinsState({
      p1Coin1: { cellNo: "p1h1", color: color },
      p1Coin2: { cellNo: "p1h2", color: color },
      p1Coin3: { cellNo: "p1h3", color: color },
      p1Coin4: { cellNo: "p1h4", color: color },
      p2Coin1: { cellNo: "p2h1", color: color },
      p2Coin2: { cellNo: "p2h2", color: player2Color },
      p2Coin3: { cellNo: "p2h3", color: player2Color },
      p2Coin4: { cellNo: "p2h4", color: player2Color },
      p3Coin1: { cellNo: "p3h1", color: player3Color },
      p3Coin2: { cellNo: "p3h2", color: player3Color },
      p3Coin3: { cellNo: "p3h3", color: player3Color },
      p3Coin4: { cellNo: "p3h4", color: player3Color },
      p4Coin1: { cellNo: "p4h1", color: player4Color },
      p4Coin2: { cellNo: "p4h2", color: player4Color },
      p4Coin3: { cellNo: "p4h3", color: player4Color },
      p4Coin4: { cellNo: "p4h4", color: player4Color }
    });
  };

  const chooseColor = color => {
    changeMyColor(color);
    setPlayer1Color(true);
    assignColorToAllCoins(color);
  };

  const getNextCellNumbersForAllCoins = (player,diceValue)=>{
    const substrings = ["h1", "h2", "h3",'h4'];
    let nextStateForCoins = {};
    for(let i=0;i<=3;i++){
    let currentCellNoOftheCoin=coinsState[`${player}Coin${i+1}`].cellNo;
    let currentIndexOfCoinInJourney=props.allCombination[player].indexOf(currentCellNoOftheCoin);
    // console.log(i,currentCellNoOftheCoin,currentIndexOfCoinInJourney)
    // console.log(substrings.some(substring =>currentCellNoOftheCoin.includes(substring)),diceValue)
    if(currentCellNoOftheCoin==='home'){
      nextStateForCoins[`${i}`]="";
    }
    else if(substrings.some(substring =>currentCellNoOftheCoin.includes(substring))&&diceValue==='6'){
      nextStateForCoins[`${i}`]=props.allCombination[player][0];
    }
    else if(substrings.some(substring =>currentCellNoOftheCoin.includes(substring))){
      nextStateForCoins[`${i}`]="";
    }
    else if(currentIndexOfCoinInJourney+parseInt(diceValue)<=56){
      nextStateForCoins[`${i}`]=gameState[props.allCombination[player][currentIndexOfCoinInJourney+parseInt(diceValue)]].cellNo;
    }
    else{
      nextStateForCoins[`${i}`]="";
    }
  }
    return nextStateForCoins;
  }

  const onclick = () => {
    let changedGameState = { ...gameState };
    let changedCoinState = { ...coinsState };
    let diceValue='3';
    console.log(getNextCellNumbersForAllCoins('p1',diceValue));
    return;
    let cellNo = coinsState["p1Coin1"].cellNo;
    let nextCellNo;
    if (cellNo === "51") {
      nextCellNo = "p1hg1";
    } else if (cellNo === "p1hg5") {
      nextCellNo = "home";
    }else if(cellNo==='home'){alert('not allowed coin is home');return;}
    else if(cellNo==='p1h1'){nextCellNo='1'}
     else {
      nextCellNo = gameState[parseInt(reverseCoinMap[cellNo]) + 1].cellNo;
    }

    changedGameState[reverseCoinMap[cellNo]] = {
      ...changedGameState[reverseCoinMap[cellNo]],
      cellState: { coins: [] }
    };
    changedGameState[reverseCoinMap[nextCellNo]] = {
      ...changedGameState[reverseCoinMap[nextCellNo]],
      cellState: { coins: ["p1Coin1"] }
    };
    changeGameState(prevGameState => {
      return changedGameState;
    });
    changeCoinsState(prevCoinsState => {
      const changedCoinState = { ...prevCoinsState };
      changedCoinState["p1Coin1"] = { cellNo: nextCellNo, color: myColor };
      return changedCoinState;
    });
  };

  const onDiceRoll = ()=>{
    let diceValue = (Math.floor(Math.random() * 6) + 1).toString();
    changeDiceState({...diceState,value:diceValue})
  }

  return (
    <div className="App">
      <h1 className="display-1 text-center gray">Ludo by Rohit</h1>
     
      {colorChoosen ? (
        <div className="board-and-dice">
          <button onClick={onclick}>Click</button>
          <input value={tempInput} onChange={(e)=>{changeTempInput(e.target.value)}}/>
          <Container
            myColor={myColor}
            gameState={gameState}
            coinsState={coinsState}
            player2Color={player2Color}
            player3Color={player3Color}
            player4Color={player4Color}
          />
         <Dice diceState={diceState} onDiceRoll={onDiceRoll}/>
        </div>
      ) : (
        <ChooseColor chooseColor={chooseColor} />
      )}
    </div>
  );
}
App.defaultProps = {
  gameState: {
    "1": { cellNo: "1", cellState: { coins: ['p1Coin1'] } },
    "2": { cellNo: "2", cellState: { coins: [] } },
    "3": { cellNo: "3", cellState: { coins: [] } },
    "4": { cellNo: "4", cellState: { coins: [] } },
    "5": { cellNo: "5", cellState: { coins: [] } },
    "6": { cellNo: "6", cellState: { coins: [] } },
    "7": { cellNo: "7", cellState: { coins: [] } },
    "8": { cellNo: "8", cellState: { coins: [] } },
    "9": { cellNo: "9", cellState: { coins: [] } },
    "10": { cellNo: "10", cellState: { coins: [] } },
    "11": { cellNo: "11", cellState: { coins: [] } },
    "12": { cellNo: "12", cellState: { coins: [] } },
    "13": { cellNo: "13", cellState: { coins: [] } },
    "14": { cellNo: "14", cellState: { coins: [] } },
    "15": { cellNo: "15", cellState: { coins: [] } },
    "16": { cellNo: "16", cellState: { coins: [] } },
    "17": { cellNo: "17", cellState: { coins: [] } },
    "18": { cellNo: "18", cellState: { coins: [] } },
    "19": { cellNo: "19", cellState: { coins: [] } },
    "20": { cellNo: "20", cellState: { coins: [] } },
    "21": { cellNo: "21", cellState: { coins: [] } },
    "22": { cellNo: "22", cellState: { coins: [] } },
    "23": { cellNo: "23", cellState: { coins: [] } },
    "24": { cellNo: "24", cellState: { coins: [] } },
    "25": { cellNo: "25", cellState: { coins: [] } },
    "26": { cellNo: "26", cellState: { coins: [] } },
    "27": { cellNo: "27", cellState: { coins: [] } },
    "28": { cellNo: "28", cellState: { coins: [] } },
    "29": { cellNo: "29", cellState: { coins: [] } },
    "30": { cellNo: "30", cellState: { coins: [] } },
    "31": { cellNo: "31", cellState: { coins: [] } },
    "32": { cellNo: "32", cellState: { coins: [] } },
    "33": { cellNo: "33", cellState: { coins: [] } },
    "34": { cellNo: "34", cellState: { coins: [] } },
    "35": { cellNo: "35", cellState: { coins: [] } },
    "36": { cellNo: "36", cellState: { coins: [] } },
    "37": { cellNo: "37", cellState: { coins: [] } },
    "38": { cellNo: "38", cellState: { coins: [] } },
    "39": { cellNo: "39", cellState: { coins: [] } },
    "40": { cellNo: "40", cellState: { coins: [] } },
    "41": { cellNo: "41", cellState: { coins: [] } },
    "42": { cellNo: "42", cellState: { coins: [] } },
    "43": { cellNo: "43", cellState: { coins: [] } },
    "44": { cellNo: "44", cellState: { coins: [] } },
    "45": { cellNo: "45", cellState: { coins: [] } },
    "46": { cellNo: "46", cellState: { coins: [] } },
    "47": { cellNo: "47", cellState: { coins: [] } },
    "48": { cellNo: "48", cellState: { coins: [] } },
    "49": { cellNo: "49", cellState: { coins: [] } },
    "50": { cellNo: "50", cellState: { coins: [] } },
    "51": { cellNo: "51", cellState: { coins: [] } },
    "52": { cellNo: "52", cellState: { coins: [] } },
    "53": { cellNo: "p1h1", cellState: { coins: [] } },
    "54": { cellNo: "p1h2", cellState: { coins: [] } },
    "55": { cellNo: "p1h3", cellState: { coins: [] } },
    "56": { cellNo: "p1h4", cellState: { coins: [] } },
    "57": { cellNo: "p2h1", cellState: { coins: [] } },
    "58": { cellNo: "p2h2", cellState: { coins: [] } },
    "59": { cellNo: "p2h3", cellState: { coins: [] } },
    "60": { cellNo: "p2h4", cellState: { coins: [] } },
    "61": { cellNo: "p3h1", cellState: { coins: [] } },
    "62": { cellNo: "p3h2", cellState: { coins: [] } },
    "63": { cellNo: "p3h3", cellState: { coins: [] } },
    "64": { cellNo: "p3h4", cellState: { coins: [] } },
    "65": { cellNo: "p4h1", cellState: { coins: [] } },
    "66": { cellNo: "p4h2", cellState: { coins: [] } },
    "67": { cellNo: "p4h3", cellState: { coins: [] } },
    "68": { cellNo: "p4h4", cellState: { coins: [] } },

    "69": { cellNo: "p1hg1", cellState: { coins: [] } },
    "70": { cellNo: "p1hg2", cellState: { coins: [] } },
    "71": { cellNo: "p1hg3", cellState: { coins: ['p1Coin2'] } },
    "72": { cellNo: "p1hg4", cellState: { coins: [] } },
    "73": { cellNo: "p1hg5", cellState: { coins: [] } },
    "74": { cellNo: "p2hg1", cellState: { coins: [] } },
    "75": { cellNo: "p2hg2", cellState: { coins: [] } },
    "76": { cellNo: "p2hg3", cellState: { coins: [] } },
    "77": { cellNo: "p2hg4", cellState: { coins: [] } },
    "78": { cellNo: "p2hg5", cellState: { coins: [] } },
    "79": { cellNo: "p3hg1", cellState: { coins: [] } },
    "80": { cellNo: "p3hg2", cellState: { coins: [] } },
    "81": { cellNo: "p3hg3", cellState: { coins: [] } },
    "82": { cellNo: "p3hg4", cellState: { coins: [] } },
    "83": { cellNo: "p3hg5", cellState: { coins: [] } },
    "84": { cellNo: "p4hg1", cellState: { coins: [] } },
    "85": { cellNo: "p4hg2", cellState: { coins: [] } },
    "86": { cellNo: "p4hg3", cellState: { coins: [] } },
    "87": { cellNo: "p4hg4", cellState: { coins: [] } },
    "88": { cellNo: "p4hg5", cellState: { coins: [] } },
    "89": { cellNo: "home", cellState: { coins: [] } }
  },
  allCombination:{
    "p1":[
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
      "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
      "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
      "51", "69", "70", "71", "72", "73","89"
    ],
    "p2":[
      "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
      "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
      "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
      "51", "52",
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
      "74", "75", "76", "77", "78","89"
    ],
    "p3":[
      "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", 
      "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", 
      "47", "48", "49", "50", "51", "52",
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25",
      "79", "80", "81", "82", "83","89"
    ],
    "p4":[
      "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52",
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", 
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", 
      "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38",
      "84", "85", "86", "87", "88","89"
    ]
  }
};
export default App;
