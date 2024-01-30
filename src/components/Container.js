const Container = () => {
  return (
    <div className="container-square">
      <div className="home-container green">
        <div className="home-square">
            <div className="home-square-circle"></div>
            <div className="home-square-circle"></div>
            <div className="home-square-circle"></div>
            <div className="home-square-circle"></div>
        </div>
      </div>
      <div className="passage top-passage yellow">
          <div className="passage-container">
          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>

          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>
          
          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>
          
          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>
          
          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>
          
          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>

          </div>

      </div>
      <div className="home-container yellow">
        <div className="home-square"></div>
      </div>

      <div className="passage left-passage green"></div>
      <div className="home-container-all"></div>
      <div className="passage right-passage blue"></div>

      <div className="home-container red">
        {" "}
        <div className="home-square"></div>
      </div>
      <div className="passage bottom-passage red"></div>
      <div className="home-container blue">
        {" "}
        <div className="home-square"></div>
      </div>
    </div>
  );
};

export default Container;
