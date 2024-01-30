import Cell from './Cell';

const RightPassage = ({color}) => {
    return (
    
        <div className={`passage right-passage ${color}`}>
        <div className={`passage-container-horizontal passage-container-right color-${color}`}>
            <Cell/>
            <Cell/>
            <Cell/>
  
            <Cell isStar={true}/>
            <Cell/>
            <Cell/>
            
            <Cell/>
            <Cell/>
            <Cell/>
            
            <Cell/>
            <Cell/>
            <Cell isLeftArrow={true} color={color}/>
            
            <Cell/>
            <Cell/>
            <Cell/>
            
            <Cell/>
            <Cell/>
            <Cell/>
  
            </div>
  
        </div>
    )
}

export default RightPassage
