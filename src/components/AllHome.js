const AllHome = (props) => {
    return (
        <div className="home-container-all" style={{position:'relative'}}>
        <div className={`home-colors ${props.color}`}>
        {props.gameState['89'].cellState.coins.length>0?<div 
           className={`home-square-circle-coin cell-coin red`}
            style={{ position: 'absolute', bottom: '15%', right: '13%', zIndex: 2,width:'10px',height:'10px'}}>          
         </div>:''}

        </div>
      </div>
    )
}

export default AllHome
