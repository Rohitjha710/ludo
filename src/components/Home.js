const Home = ({color}) => {
    return (
        <div className={`home-container ${color}`}>
        <div className="home-square">
            <div className={`home-square-circle ${color}`}></div>
            <div className={`home-square-circle ${color}`}></div>
            <div className={`home-square-circle ${color}`}></div>
            <div className={`home-square-circle ${color}`}></div>
        </div>
      </div>
    )
}

export default Home
