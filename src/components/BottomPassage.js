import Cell from './Cell';

const BottomPassage = ({color}) => {
    return (
        <div className={`passage bottom-passage ${color}`}>
        <div className={`passage-container-vertical passage-container-bottom color-${color}`}>
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
          <Cell isStar={true}/>

          <Cell/>
          <Cell/>
          <Cell/>

          <Cell/>
          <Cell isTopArrow={true} color={color}/>
          <Cell/>
        </div>
      </div>
    )
}

export default BottomPassage
