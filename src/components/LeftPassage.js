
import Cell from './Cell';
const LeftPassage = ({color}) => {
    return (
        <div className={`passage left-passage ${color}`}>
        <div className={`passage-container-horizontal passage-container-left color-${color}`}>
            <Cell/>
            <Cell/>
            <Cell/>
  
            <Cell/>
            <Cell/>
            <Cell/>
            
            <Cell isRightArrow={true} color={color}/>
            <Cell/>
            <Cell/>
            
            <Cell/>
            <Cell/>
            <Cell/>
            
            <Cell/>
            <Cell />
            <Cell isStar={true}/>
            
            <Cell/>
            <Cell/>
            <Cell/>
  
            </div>
  
        </div>
    )
}

export default LeftPassage
