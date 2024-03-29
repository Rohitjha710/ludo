import Container from "./components/Container";
import ChooseColor from "./components/ChooseColor";
import Dice from "./components/Dice";
import FireWorks from './components/Fireworks';
import WinnerAlert from './components/WinnerAlert';
import Footer from './components/Footer';

import coinAudio from './assets/audio/coin.mp3';
import killAudio from './assets/audio/kill.mp3';
import hurrayAudio from './assets/audio/hurray.mp3';
import diceAudio from './assets/audio/dice.mp3';
import gameStart from './assets/audio/gameStart.mp3';
import fireworksAudio from './assets/audio/fireworks.mp3';

import { useState, useEffect } from "react";
import { reverseCoinMap,playAudio } from "./utils/utils";
function App(props) {
  // set colorChossen to false

  const [myColor, changeMyColor] = useState('red');
  const [colorChoosen, setPlayer1Color] = useState(false);
  const [gameState, changeGameState] = useState(props.gameState);
  const [coinEffectinProgress, changeCoinEffect] = useState(false);

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
  const safeCells =['1','48','9','14','22','27','35','40','48','89'];

  const [coinsState, changeCoinsState] = useState(coinsStateInitial);
  const [diceState, changeDiceState] = useState({
    whoseChance: "p1",
    value: "",
    canbeRolled: true
  });
  const [possibilitiesAndCurrentPlayer, changePossibiltiesArray] = useState({});

    const [winner,setWinner] = useState('');
  const [noOfPlayer,changeNoOfPlayer] = useState(4);


  const assignColorToAllCoins = color => {
    playAudio(gameStart);

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

  const chooseColor = ({color,noOfPlayer}) => {
    changeMyColor(color);
    setPlayer1Color(true);
    assignColorToAllCoins(color);
    changeNoOfPlayer(noOfPlayer);
  };

  const getNextCellNumbersForAllCoins = (player, diceValue) => {
    const substrings = ["h1", "h2", "h3", "h4"];
    let nextStateForCoins = {};
    for (let i = 0; i <= 3; i++) {
      let currentCellNoOftheCoin = coinsState[`${player}Coin${i + 1}`].cellNo;
      let currentIndexOfCoinInJourney = props.allCombination[player].indexOf(
        reverseCoinMap[currentCellNoOftheCoin]
      );

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


  const onDiceRoll = () => {
    playAudio(diceAudio);
    let diceValue = (Math.floor(Math.random() * 6) + 1).toString();
    let player = diceState.whoseChance;
    let postDiceRollPossibilities = getNextCellNumbersForAllCoins(
      player,
      diceValue
    );
    changePossibiltiesArray({...postDiceRollPossibilities,"player":player})
    if(postDiceRollPossibilities[0]!=="" || postDiceRollPossibilities[1]!=="" || postDiceRollPossibilities[2]!=="" || postDiceRollPossibilities[3]!==""){
   //player has to mke a move
   doPulsatingEffect({...postDiceRollPossibilities,player});
  changeDiceState((prev)=>({...prev,value: diceValue,canbeRolled:false}))
  }else{
    //player cannot make a move
    changeDiceState((prev)=>({ ...diceState, value: diceValue,whoseChance:nextPlayer(prev.whoseChance) }));
  }
  };

  const checkIfItsAKill =(nextCellId)=>{
    let kill= false;
    //checks if coins array isgreater then zero, the cell is not a safe cell, the coin present is not ofsame color
     if(gameState[nextCellId].cellState.coins.length>0 && !(safeCells.includes(nextCellId)) && gameState[nextCellId].cellState.coins.some(coin=>!coin.includes(possibilitiesAndCurrentPlayer.player)))
     {
       kill=true;
     }
     return kill;

  }
  function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  const handleSmoothTransitionOfCoins = async (initial,final,diceValue,player,coinName)=>{

    let initialIndexInJourney = props.allCombination[player].indexOf(initial);
    for(let i=1;i<=parseInt(diceValue);i++){
      await delay(0.2);
      playAudio(coinAudio);

      //pop form current      
       //put into next
        changeGameState((prev)=>{
          let tempGameState= {...prev};
          // console.log(tempGameState[])
          try{
          if(props.allCombination[player][initialIndexInJourney+i]!==final){
            tempGameState[props.allCombination[player][initialIndexInJourney+i]].cellState.coins.push(coinName);
          }

          tempGameState[props.allCombination[player][initialIndexInJourney+i-1]].cellState.coins = tempGameState[props.allCombination[player][initialIndexInJourney+i-1]].cellState.coins.filter(coin=>coin!==coinName);
        }catch(e){
          console.log(initialIndexInJourney,'initialIndexInJourney');
          console.log(i,'i');
          console.log(props.allCombination[player][initialIndexInJourney+i-1],'currenCellNo')
          console.log(tempGameState,'gamestate');
          console.log(e);
        }
          return tempGameState;
        })

    }
    return "true";
  }

  const nextPlayer=(currentPlayer)=>{
    if(noOfPlayer===2){
      if(currentPlayer==='p1'){
        return 'p3'
      }
      else{
        return 'p1'
      }
    }
    else if(noOfPlayer===3){
      if(currentPlayer==='p1'){
        return 'p2'
      }
      else if(currentPlayer==='p2'){
        return 'p3'
      }
      else{
        return 'p1'
      }

    }
    else
    {
      if(currentPlayer==='p1'){
        return 'p2'
      }
      else if(currentPlayer==='p2'){
        return 'p3'

      }
      else if(currentPlayer==='p3'){
        return 'p4'

      }
      else{
        return 'p1'

      }
    }
  }

  const handleCoinClick = async (currentCell)=>{
    
    if(coinEffectinProgress){return;}
    changeCoinEffect(true);
    let currentCellId = reverseCoinMap[currentCell.cellNo];
    let currentCellNo = currentCell.cellNo;
    let coinName=currentCell.cellState.coins.filter(coin=>coin.includes(possibilitiesAndCurrentPlayer.player))[0];
    let nextCellNo=possibilitiesAndCurrentPlayer[parseInt(coinName.charAt(coinName.length - 1))-1];
    let nextCellId =reverseCoinMap[nextCellNo];

    let kill = false;
    let killedCoinNames = '';
    
    if(['h1','h2','h3','h4'].some((ele)=>currentCellNo.includes(ele))){
      playAudio(hurrayAudio);
    }
    else{
      await handleSmoothTransitionOfCoins(currentCellId,nextCellId,diceState.value,possibilitiesAndCurrentPlayer.player,coinName)
    }
    console.log('resumed');

    if(nextCellId==='89'){
      playAudio(hurrayAudio);
    }
    if(checkIfItsAKill(nextCellId)){
      kill=true;
      killedCoinNames=gameState[nextCellId].cellState.coins;
      playAudio(killAudio);
    }

    changeGameState(prevGameState => {
      let changedGameState ={...prevGameState};
      //removes coin from current cell

      changedGameState[currentCellId].cellState.coins = changedGameState[currentCellId].cellState.coins.filter(coin=>coin!==coinName);
      
      if(kill){
        //pop everything and keep only the current player
        changedGameState[nextCellId].cellState.coins=[coinName];

        //insert the killed coin the home cell
      for (let coin of killedCoinNames){
        changedGameState[reverseCoinMap[`${coin.substring(0, 2)}h${coin[coin.length-1]}`]].cellState.coins=[coin];
      }
      }
      else{
        //adds coin to the other cell
        changedGameState[nextCellId].cellState.coins.push(coinName);
      }
   
      return changedGameState;
    });
    changeCoinsState(prevCoinsState => {
      const changedCoinState = { ...prevCoinsState };
      changedCoinState[coinName].cellNo = nextCellNo;

      if(kill){
        // get the killed coins reset to home

        killedCoinNames.map(coin=>changedCoinState[coin].cellNo=`${coin.substring(0, 2)}h${coin[coin.length-1]}`)
      }
      return changedCoinState;
    });
    
    revertPulsatingEffect(possibilitiesAndCurrentPlayer);
    changeCoinEffect(false);
    changeDiceState((prev)=>({...prev,whoseChance:prev.value==='6'||kill||nextCellId==='89'?prev.whoseChance:nextPlayer(prev.whoseChance),canbeRolled:true}))
  }


  useEffect(()=>{
    if(coinsState['p1Coin1'].cellNo==='home' && coinsState['p1Coin2'].cellNo==='home' && coinsState['p1Coin3'].cellNo==='home' && coinsState['p1Coin4'].cellNo==='home')
    {
      setWinner('1');
      playAudio(fireworksAudio)
    }
    if(coinsState['p2Coin1'].cellNo==='home' && coinsState['p2Coin2'].cellNo==='home' && coinsState['p2Coin3'].cellNo==='home' && coinsState['p2Coin4'].cellNo==='home')
    {
      setWinner('2');
      playAudio(fireworksAudio)
    }
    if(coinsState['p3Coin1'].cellNo==='home' && coinsState['p3Coin2'].cellNo==='home' && coinsState['p3Coin3'].cellNo==='home' && coinsState['p3Coin4'].cellNo==='home')
    {
      setWinner('3');
      playAudio(fireworksAudio)
    }
    if(coinsState['p4Coin1'].cellNo==='home' && coinsState['p4Coin2'].cellNo==='home' && coinsState['p4Coin3'].cellNo==='home' && coinsState['p4Coin4'].cellNo==='home')
    {
      setWinner('4');
      playAudio(fireworksAudio)
    }
  },[coinsState])


  //checkForWinner
  return (
    <div className="App">

      {colorChoosen ? (
        <div className="board-and-dice">
         {winner ? <><FireWorks />
          <WinnerAlert winner={winner}/></>:''}
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
      <Footer/>
    </div>
  );
}
App.defaultProps = {
  gameState: {
    "1": { cellNo: "1", cellState: { coins: [],isClickable:false} },
    "2": { cellNo: "2", cellState: { coins: [],isClickable:false} },
    "3": { cellNo: "3", cellState: { coins: [],isClickable:false} },
    "4": { cellNo: "4", cellState: { coins: [],isClickable:false} },
    "5": { cellNo: "5", cellState: { coins: [],isClickable:false} },
    "6": { cellNo: "6", cellState: { coins: [],isClickable:false} },
    "7": { cellNo: "7", cellState: { coins: [],isClickable:false} },
    "8": { cellNo: "8", cellState: { coins: [],isClickable:false} },
    "9": { cellNo: "9", cellState: { coins: [],isClickable:false} },
    "10": { cellNo: "10", cellState: { coins: [],isClickable:false} },
    "11": { cellNo: "11", cellState: { coins: [],isClickable:false} },
    "12": { cellNo: "12", cellState: { coins: [],isClickable:false} },
    "13": { cellNo: "13", cellState: { coins: [],isClickable:false} },
    "14": { cellNo: "14", cellState: { coins: [],isClickable:false} },
    "15": { cellNo: "15", cellState: { coins: [],isClickable:false} },
    "16": { cellNo: "16", cellState: { coins: [],isClickable:false} },
    "17": { cellNo: "17", cellState: { coins: [],isClickable:false} },
    "18": { cellNo: "18", cellState: { coins: [],isClickable:false} },
    "19": { cellNo: "19", cellState: { coins: [],isClickable:false} },
    "20": { cellNo: "20", cellState: { coins: [],isClickable:false} },
    "21": { cellNo: "21", cellState: { coins: [],isClickable:false} },
    "22": { cellNo: "22", cellState: { coins: [],isClickable:false} },
    "23": { cellNo: "23", cellState: { coins: [],isClickable:false} },
    "24": { cellNo: "24", cellState: { coins: [],isClickable:false} },
    "25": { cellNo: "25", cellState: { coins: [],isClickable:false} },
    "26": { cellNo: "26", cellState: { coins: [],isClickable:false} },
    "27": { cellNo: "27", cellState: { coins: [],isClickable:false} },
    "28": { cellNo: "28", cellState: { coins: [],isClickable:false} },
    "29": { cellNo: "29", cellState: { coins: [],isClickable:false} },
    "30": { cellNo: "30", cellState: { coins: [],isClickable:false} },
    "31": { cellNo: "31", cellState: { coins: [],isClickable:false} },
    "32": { cellNo: "32", cellState: { coins: [],isClickable:false} },
    "33": { cellNo: "33", cellState: { coins: [],isClickable:false} },
    "34": { cellNo: "34", cellState: { coins: [],isClickable:false} },
    "35": { cellNo: "35", cellState: { coins: [],isClickable:false} },
    "36": { cellNo: "36", cellState: { coins: [],isClickable:false} },
    "37": { cellNo: "37", cellState: { coins: [],isClickable:false} },
    "38": { cellNo: "38", cellState: { coins: [],isClickable:false} },
    "39": { cellNo: "39", cellState: { coins: [],isClickable:false} },
    "40": { cellNo: "40", cellState: { coins: [],isClickable:false} },
    "41": { cellNo: "41", cellState: { coins: [],isClickable:false} },
    "42": { cellNo: "42", cellState: { coins: [],isClickable:false} },
    "43": { cellNo: "43", cellState: { coins: [],isClickable:false} },
    "44": { cellNo: "44", cellState: { coins: [],isClickable:false} },
    "45": { cellNo: "45", cellState: { coins: [],isClickable:false} },
    "46": { cellNo: "46", cellState: { coins: [],isClickable:false} },
    "47": { cellNo: "47", cellState: { coins: [],isClickable:false} },
    "48": { cellNo: "48", cellState: { coins: [],isClickable:false} },
    "49": { cellNo: "49", cellState: { coins: [],isClickable:false} },
    "50": { cellNo: "50", cellState: { coins: [],isClickable:false} },
    "51": { cellNo: "51", cellState: { coins: [],isClickable:false} },
    "52": { cellNo: "52", cellState: { coins: [],isClickable:false} },
    "53": { cellNo: "p1h1", cellState: { coins: ['p1Coin1'],isClickable:false} },
    "54": { cellNo: "p1h2", cellState: { coins: ['p1Coin2'],isClickable:false} },
    "55": { cellNo: "p1h3", cellState: { coins: ['p1Coin3'],isClickable:false} },
    "56": { cellNo: "p1h4", cellState: { coins: ['p1Coin4'],isClickable:false} },
    "57": { cellNo: "p2h1", cellState: { coins: ['p2Coin1'],isClickable:false} },
    "58": { cellNo: "p2h2", cellState: { coins: ['p2Coin2'],isClickable:false} },
    "59": { cellNo: "p2h3", cellState: { coins: ['p2Coin3'],isClickable:false} },
    "60": { cellNo: "p2h4", cellState: { coins: ['p2Coin4'],isClickable:false} },
    "61": { cellNo: "p3h1", cellState: { coins: ['p3Coin1'],isClickable:false} },
    "62": { cellNo: "p3h2", cellState: { coins: ['p3Coin2'],isClickable:false} },
    "63": { cellNo: "p3h3", cellState: { coins: ['p3Coin3'],isClickable:false} },
    "64": { cellNo: "p3h4", cellState: { coins: ['p3Coin4'],isClickable:false} },
    "65": { cellNo: "p4h1", cellState: { coins: ['p4Coin1'],isClickable:false} },
    "66": { cellNo: "p4h2", cellState: { coins: ['p4Coin2'],isClickable:false} },
    "67": { cellNo: "p4h3", cellState: { coins: ['p4Coin3'],isClickable:false} },
    "68": { cellNo: "p4h4", cellState: { coins: ['p4Coin4'],isClickable:false} },

    "69": { cellNo: "p1hg1", cellState: { coins: [],isClickable:false} },
    "70": { cellNo: "p1hg2", cellState: { coins: [],isClickable:false} },
    "71": { cellNo: "p1hg3", cellState: { coins: [],isClickable:false} },
    "72": { cellNo: "p1hg4", cellState: { coins: [],isClickable:false} },
    "73": { cellNo: "p1hg5", cellState: { coins: [],isClickable:false} },
    "74": { cellNo: "p2hg1", cellState: { coins: [],isClickable:false} },
    "75": { cellNo: "p2hg2", cellState: { coins: [],isClickable:false} },
    "76": { cellNo: "p2hg3", cellState: { coins: [],isClickable:false} },
    "77": { cellNo: "p2hg4", cellState: { coins: [],isClickable:false} },
    "78": { cellNo: "p2hg5", cellState: { coins: [],isClickable:false} },
    "79": { cellNo: "p3hg1", cellState: { coins: [],isClickable:false} },
    "80": { cellNo: "p3hg2", cellState: { coins: [],isClickable:false} },
    "81": { cellNo: "p3hg3", cellState: { coins: [],isClickable:false} },
    "82": { cellNo: "p3hg4", cellState: { coins: [],isClickable:false} },
    "83": { cellNo: "p3hg5", cellState: { coins: [],isClickable:false} },
    "84": { cellNo: "p4hg1", cellState: { coins: [],isClickable:false} },
    "85": { cellNo: "p4hg2", cellState: { coins: [],isClickable:false} },
    "86": { cellNo: "p4hg3", cellState: { coins: [],isClickable:false} },
    "87": { cellNo: "p4hg4", cellState: { coins: [],isClickable:false} },
    "88": { cellNo: "p4hg5", cellState: { coins: [],isClickable:false} },
    "89": { cellNo: "home", cellState: { coins: [],isClickable:false} }
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
