
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Cell = (props) => {
        const colors ={
            blue:'#66CCFF',
            green:'#009900',
            yellow:'#FFCC00',
            red:'#FF0000'
        }
        const coinColors={
            blue: '#336699',
            green: '#006600',
            yellow: '#CC9900',
            red: '#990000', 
        }
    const arrowStyle = {
        color: colors[props.color],
        fontSize:'30px'
      };

    return (
        <div className="cell" style={{position:'relative'}}>
           {props.isStar?<FaStar style={{ position:'absolute',color: '#B2BEB5',left:'5%',top:'5%',fontSize:'30px' , zIndex: 1}} />:''}
           {props.isTopArrow?<FaArrowUp style={arrowStyle} />:''}
           {props.isLeftArrow?<FaArrowLeft style={arrowStyle} />:''}
           {props.isRightArrow?<FaArrowRight style={arrowStyle} />:''}
           {props.isBottomArrow?<FaArrowDown style={arrowStyle} />:''}
           {props.gameState[props.id].cellState.coins.length>0?
            <div 
           className={`home-square-circle-coin cell-coin ${props.coinsState[props.gameState[props.id].cellState.coins[0]].color}`}
            style={{ position: 'absolute', bottom: '15%', right: '13%', zIndex: 2,fontSize:'10px' }}>          
            </div>
            :''
            }
        </div>
    )
}

export default Cell
