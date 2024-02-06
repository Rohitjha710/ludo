const AllHome = props => {
  const getCoinsInHomeForPlayer = player => {
    let coins = [];
    for (let i = 1; i <= 4; i++) {
      if (props.coinsState[`${player}Coin${i}`].cellNo === "home") {
        coins.push('1');
      }
    }
    return coins;
  };
  const p1Coins = getCoinsInHomeForPlayer("p1");
  const p2Coins = getCoinsInHomeForPlayer("p2");
  const p3Coins = getCoinsInHomeForPlayer("p3");
  const p4Coins = getCoinsInHomeForPlayer("p4");
  return (
    <div className="home-container-all" style={{ position: "relative" }}>
      <div className={`home-colors ${props.color}`}>
        {p1Coins.length>0 ? (
          <div className="all-home-coins-container-player1" style={{ position: "absolute", bottom: "5%", right: "23%",display:"flex" }}>
            {p1Coins.map((eachP1Coin,index)=>(
            
              <div key={index}
                className={`home-square-circle-coin cell-coin cell-cize ${props.color}`}
                style={{ zIndex: 2 }}
              ></div>
            )
            )}
          </div>
        ) : (
          ""
        )}
           {p2Coins.length>0 ? (
          <div className="all-home-coins-container-player2" style={{ position: "absolute", top: "17%", left: "1%",display:"flex",flexDirection:'column' }}>
            {p2Coins.map((eachP2Coin,index)=>(
            
              <div key={index}
                className={`home-square-circle-coin cell-coin cell-cize ${props.player2Color}`}
                style={{ zIndex: 2 }}
              ></div>
            )
            )}
          </div>
        ) : (
          ""
        )}
           {p3Coins.length>0 ? (
          <div className="all-home-coins-container-player3" style={{ position: "absolute", top: "2%", right: "23%",display:"flex" }}>
            {p3Coins.map((eachP3Coin,index)=>(
            
              <div key={index}
                className={`home-square-circle-coin cell-coin cell-cize ${props.player3Color}`}
                style={{ zIndex: 2 }}
              ></div>
            )
            )}
          </div>
        ) : (
          ""
        )}
             {p4Coins.length>0 ? (
          <div className="all-home-coins-container-player4" style={{ position: "absolute", top: "17%", right: "7%",display:"flex",flexDirection:'column' }}>
            {p4Coins.map((eachP4Coin,index)=>(
            
              <div key={index}
                className={`home-square-circle-coin cell-coin cell-cize ${props.player4Color}`}
                style={{ zIndex: 2 }}
              ></div>
            )
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AllHome;
