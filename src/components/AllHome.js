const AllHome = props => {
  const getCoinsInHomeForPlayer = player => {
    let coins = [];
    for (let i = 1; i <= 4; i++) {
      if (props.coinsState[`${player}Coin${1}`].cellNo === "home") {
        coins.push('1');
      }
    }
    return coins;
  };
  const p1Coins = getCoinsInHomeForPlayer("p1");
  const p2Coins = getCoinsInHomeForPlayer("p2");
  const p3Coins = getCoinsInHomeForPlayer("p3");
  const p4Coins = getCoinsInHomeForPlayer("p4");
  console.log(p1Coins,p2Coins,p3Coins,p4Coins)
  return (
    <div className="home-container-all" style={{ position: "relative" }}>
      <div className={`home-colors ${props.color}`}>
        {p1Coins.length>0 ? (
          <div style={{ position: "absolute", bottom: "5%", right: "23%",display:"flex" }}>
            {p1Coins.map(eachP1Coin=>(
            
              <div
                className={`home-square-circle-coin cell-coin ${props.color}`}
                style={{ zIndex: 2, width: "10px", height: "10px" }}
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
