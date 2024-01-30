import Home from "./Home";
import TopPassage from "./TopPassage";
import LeftPassage from "./LeftPassage";
import RightPassage from "./RightPassage";
import BottomPassage from "./BottomPassage";
import AllHome from './AllHome';
const Container = ({myColor}) => {
  const fourColor = ['red','green','yellow','blue']
  const player1=myColor;
  const player2=fourColor[(fourColor.indexOf(myColor)+1)%4];
  const player3=fourColor[(fourColor.indexOf(myColor)+2)%4];
  const player4=fourColor[(fourColor.indexOf(myColor)+3)%4];

  return (
    <div className="container-square">
      <Home color={player2} />
      <TopPassage color={player3} />
      <Home color={player3} />
      <LeftPassage color={player2} />
     <AllHome color={myColor}/> 
      <RightPassage color={player4} />
      <Home color={player1} />
     <BottomPassage color={player1}/>
      <Home color={player4} />
    </div>
  );
};

export default Container;
