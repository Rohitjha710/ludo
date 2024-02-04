import Container from "./components/Container";
import ChooseColor from "./components/ChooseColor";
import Dice from "./components/Dice";
import { useState, useEffect } from "react";
import { reverseCoinMap } from "./utils/utils";
function App(props) {
  // set colorChossen to false

  const [myColor, changeMyColor] = useState('red');
  const [colorChoosen, setPlayer1Color] = useState(false);
  const [gameState, changeGameState] = useState(props.gameState);

  const fourColor = ["red", "green", "yellow", "blue"];
  const player2Color = fourColor[(fourColor.indexOf(myColor) + 1) % 4];
  const player3Color = fourColor[(fourColor.indexOf(myColor) + 2) % 4];
  const player4Color = fourColor[(fourColor.indexOf(myColor) + 3) % 4];

  const coinsStateInitial = {
    p1Coin1: { cellNo: "p1h1", color: myColor },
    p1Coin2: { cellNo: "p1h2", color: myColor },
    p1Coin3: { cellNo: "p1h3", color: myColor },
    p1Coin4: { cellNo: "p1h4", color: myColor },
    p2Coin1: { cellNo: "p2h1", color: player2Color },
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

  const [tempInput, changeTempInput] = useState("");
  const [coinsState, changeCoinsState] = useState(coinsStateInitial);
  const [diceState, changeDiceState] = useState({
    whoseChance: "p1",
    value: "",
    canbeRolled: true
  });
  const [possibilities, changePossibiltiesArray] = useState({});

  const assignColorToAllCoins = color => {
    const player2Color = fourColor[(fourColor.indexOf(color) + 1) % 4];
    const player3Color = fourColor[(fourColor.indexOf(color) + 2) % 4];
    const player4Color = fourColor[(fourColor.indexOf(color) + 3) % 4];
    changeCoinsState({
      p1Coin1: { cellNo: "p1h1", color: color },
      p1Coin2: { cellNo: "p1h2", color: color },
      p1Coin3: { cellNo: "p1h3", color: color },
      p1Coin4: { cellNo: "p1h4", color: color },
      p2Coin1: { cellNo: "p2h1", color: player2Color },
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

  const getNextCellNumbersForAllCoins = (player, diceValue) => {
    const substrings = ["h1", "h2", "h3", "h4"];
    let nextStateForCoins = {};
    for (let i = 0; i <= 3; i++) {
      let currentCellNoOftheCoin = coinsState[`${player}Coin${i + 1}`].cellNo;
      let currentIndexOfCoinInJourney = props.allCombination[player].indexOf(
        reverseCoinMap[currentCellNoOftheCoin]
      );
      // console.log(player,i+1)
      // console.log('currentcelnno',currentCellNoOftheCoin)
      // console.log('currentindexinjounery',currentIndexOfCoinInJourney)
      if (currentCellNoOftheCoin === "home") {
        nextStateForCoins[`${i}`] = "";
      } else if (
        substrings.some(substring =>
          currentCellNoOftheCoin.includes(substring)
        ) &&
        diceValue === "6"
      ) {
        nextStateForCoins[`${i}`] = props.allCombination[player][0];
      } else if (
        substrings.some(substring => currentCellNoOftheCoin.includes(substring))
      ) {
        nextStateForCoins[`${i}`] = "";
      } else if (currentIndexOfCoinInJourney + parseInt(diceValue) <= 56) {
        nextStateForCoins[`${i}`] =
          gameState[
            props.allCombination[player][
              currentIndexOfCoinInJourney + parseInt(diceValue)
            ]
          ].cellNo;
      } else {
        nextStateForCoins[`${i}`] = "";
      }

      // console.log('-------');
    }
    return nextStateForCoins;
  };

  const doPulsatingEffect =(postDiceRollPossibilities)=>{
    for (let i = 0; i <= 3; i++) {
      if (postDiceRollPossibilities[i]){
        changeGameState((prevGameState)=>{
          let newGameState = {...prevGameState};
          newGameState[reverseCoinMap[coinsState[`${postDiceRollPossibilities.player}Coin${i+1}`].cellNo]].cellState.isClickable= true;
          return newGameState
        })
      }
    }
  }
  const revertPulsatingEffect =(postDiceRollPossibilities)=>{
    for (let i = 0; i <= 3; i++) {
      if (postDiceRollPossibilities[i]){
        changeGameState((prevGameState)=>{
          let newGameState = {...prevGameState};
          newGameState[reverseCoinMap[coinsState[`${postDiceRollPossibilities.player}Coin${i+1}`].cellNo]].cellState.isClickable= false;
          return newGameState
        })
      }
    }
  }

  const onclick = () => {

  };

  const onDiceRoll = () => {
    let diceValue = (Math.floor(Math.random() * 6) + 1).toString();

    let player = diceState.whoseChance;
    let postDiceRollPossibilities = getNextCellNumbersForAllCoins(
      player,
      diceValue
    );
    changePossibiltiesArray({...postDiceRollPossibilities,"player":player})
    doPulsatingEffect({...postDiceRollPossibilities,player});
    if(postDiceRollPossibilities[0]!=="" || postDiceRollPossibilities[1]!=="" || postDiceRollPossibilities[2]!=="" || postDiceRollPossibilities[3]!==""){
   changeDiceState((prev)=>({...prev,value: diceValue,canbeRolled:false,whoseChance:prev.whoseChance==='p1'?'p3':'p1'}))
  }else{
    changeDiceState((prev)=>({ ...diceState, value: diceValue,whoseChance:prev.whoseChance==='p1'?'p3':'p1' }));
  }
  };

  const handleCoinClick =(currentCell)=>{

    let currentCellId = reverseCoinMap[currentCell.cellNo];
    let currentCellNo = currentCell.cellNo;
    let coinName=currentCell.cellState.coins.filter(coin=>coin.includes(possibilities.player))[0];
    let nextCellNo=possibilities[parseInt(coinName.charAt(coinName.length - 1))-1];
    let nextCellId =reverseCoinMap[nextCellNo];


    changeGameState(prevGameState => {
      let changedGameState ={...prevGameState};
      //removes coin from current cell

      changedGameState[currentCellId].cellState.coins = changedGameState[currentCellId].cellState.coins.filter(coin=>coin!==coinName);
      //adds coin to the other cell
      changedGameState[nextCellId].cellState.coins.push(coinName);
   
      return changedGameState;
    });
    changeCoinsState(prevCoinsState => {
      const changedCoinState = { ...prevCoinsState };
      changedCoinState[coinName].cellNo = nextCellNo;
      return changedCoinState;
    });
    revertPulsatingEffect(possibilities);
    changeDiceState((prev)=>({...prev,canbeRolled:true}))

  }

  return (
    <div className="App">
      <h1 className="display-1 text-center gray">Ludo by Rohit Jha</h1>

      {colorChoosen ? (
        <div className="board-and-dice">
          <Container
            myColor={myColor}
            gameState={gameState}
            coinsState={coinsState}
            player2Color={player2Color}
            player3Color={player3Color}
            player4Color={player4Color}
            handleCoinClick={handleCoinClick}
          />
          <Dice diceState={diceState} onDiceRoll={onDiceRoll} myColor={myColor} player2Color={player2Color} player3Color={player3Color} player4Color={player4Color} />
        </div>
      ) : (
        <ChooseColor chooseColor={chooseColor} />
      )}
    </div>
  );
}
App.defaultProps = {
  gameState: {
    "1": { cellNo: "1", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "2": { cellNo: "2", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "3": { cellNo: "3", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "4": { cellNo: "4", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "5": { cellNo: "5", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "6": { cellNo: "6", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "7": { cellNo: "7", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "8": { cellNo: "8", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "9": { cellNo: "9", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "10": { cellNo: "10", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "11": { cellNo: "11", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "12": { cellNo: "12", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "13": { cellNo: "13", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "14": { cellNo: "14", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "15": { cellNo: "15", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "16": { cellNo: "16", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "17": { cellNo: "17", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "18": { cellNo: "18", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "19": { cellNo: "19", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "20": { cellNo: "20", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "21": { cellNo: "21", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "22": { cellNo: "22", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "23": { cellNo: "23", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "24": { cellNo: "24", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "25": { cellNo: "25", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "26": { cellNo: "26", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "27": { cellNo: "27", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "28": { cellNo: "28", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "29": { cellNo: "29", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "30": { cellNo: "30", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "31": { cellNo: "31", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "32": { cellNo: "32", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "33": { cellNo: "33", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "34": { cellNo: "34", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "35": { cellNo: "35", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "36": { cellNo: "36", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "37": { cellNo: "37", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "38": { cellNo: "38", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "39": { cellNo: "39", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "40": { cellNo: "40", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "41": { cellNo: "41", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "42": { cellNo: "42", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "43": { cellNo: "43", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "44": { cellNo: "44", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "45": { cellNo: "45", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "46": { cellNo: "46", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "47": { cellNo: "47", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "48": { cellNo: "48", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "49": { cellNo: "49", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "50": { cellNo: "50", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "51": { cellNo: "51", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "52": { cellNo: "52", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "53": { cellNo: "p1h1", cellState: { coins: ['p1Coin1'],isClickable:false,colorOfCircle:'' } },
    "54": { cellNo: "p1h2", cellState: { coins: ['p1Coin2'],isClickable:false,colorOfCircle:'' } },
    "55": { cellNo: "p1h3", cellState: { coins: ['p1Coin3'],isClickable:false,colorOfCircle:'' } },
    "56": { cellNo: "p1h4", cellState: { coins: ['p1Coin4'],isClickable:false,colorOfCircle:'' } },
    "57": { cellNo: "p2h1", cellState: { coins: ['p2Coin1'],isClickable:false,colorOfCircle:'' } },
    "58": { cellNo: "p2h2", cellState: { coins: ['p2Coin2'],isClickable:false,colorOfCircle:'' } },
    "59": { cellNo: "p2h3", cellState: { coins: ['p2Coin3'],isClickable:false,colorOfCircle:'' } },
    "60": { cellNo: "p2h4", cellState: { coins: ['p2Coin4'],isClickable:false,colorOfCircle:'' } },
    "61": { cellNo: "p3h1", cellState: { coins: ['p3Coin1'],isClickable:false,colorOfCircle:'' } },
    "62": { cellNo: "p3h2", cellState: { coins: ['p3Coin2'],isClickable:false,colorOfCircle:'' } },
    "63": { cellNo: "p3h3", cellState: { coins: ['p3Coin3'],isClickable:false,colorOfCircle:'' } },
    "64": { cellNo: "p3h4", cellState: { coins: ['p3Coin4'],isClickable:false,colorOfCircle:'' } },
    "65": { cellNo: "p4h1", cellState: { coins: ['p4Coin1'],isClickable:false,colorOfCircle:'' } },
    "66": { cellNo: "p4h2", cellState: { coins: ['p4Coin2'],isClickable:false,colorOfCircle:'' } },
    "67": { cellNo: "p4h3", cellState: { coins: ['p4Coin3'],isClickable:false,colorOfCircle:'' } },
    "68": { cellNo: "p4h4", cellState: { coins: ['p4Coin4'],isClickable:false,colorOfCircle:'' } },

    "69": { cellNo: "p1hg1", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "70": { cellNo: "p1hg2", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "71": { cellNo: "p1hg3", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "72": { cellNo: "p1hg4", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "73": { cellNo: "p1hg5", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "74": { cellNo: "p2hg1", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "75": { cellNo: "p2hg2", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "76": { cellNo: "p2hg3", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "77": { cellNo: "p2hg4", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "78": { cellNo: "p2hg5", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "79": { cellNo: "p3hg1", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "80": { cellNo: "p3hg2", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "81": { cellNo: "p3hg3", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "82": { cellNo: "p3hg4", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "83": { cellNo: "p3hg5", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "84": { cellNo: "p4hg1", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "85": { cellNo: "p4hg2", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "86": { cellNo: "p4hg3", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "87": { cellNo: "p4hg4", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "88": { cellNo: "p4hg5", cellState: { coins: [],isClickable:false,colorOfCircle:'' } },
    "89": { cellNo: "home", cellState: { coins: [],isClickable:false,colorOfCircle:'' } }
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
