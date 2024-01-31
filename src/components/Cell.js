
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Cell = (props) => {
    const colors ={
        blue:'#66CCFF',
        green:'#009900',
        yellow:'#FFCC00',
        red:'#FF0000'
    }
    const arrowStyle = {
        color: colors[props.color],
        fontSize:'30px'
      };
    
    return (
        <div className="cell">
           {props.isStar?<FaStar style={{ position:'absolute',color: '#B2BEB5',left:'5%',top:'5%',fontSize:'30px' }} />:''}
           {props.isTopArrow?<FaArrowUp style={arrowStyle} />:''}
           {props.isLeftArrow?<FaArrowLeft style={arrowStyle} />:''}
           {props.isRightArrow?<FaArrowRight style={arrowStyle} />:''}
           {props.isBottomArrow?<FaArrowDown style={arrowStyle} />:''}
           {props.id?props.id:''}
        </div>
    )
}

export default Cell
