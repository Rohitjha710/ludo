import Cell from './Cell';

const TopPassage = ({color}) => {
    return (
        <div className={`passage top-passage ${color}`}>
        <div className={`passage-container-vertical passage-container-top color-${color}`}>
        <Cell/>
        <Cell isBottomArrow={true} color={color}/>
        <Cell/>

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
        <Cell/>
        
        <Cell/>
        <Cell/>
        <Cell/>

        </div>

    </div>
    )
}

export default TopPassage
