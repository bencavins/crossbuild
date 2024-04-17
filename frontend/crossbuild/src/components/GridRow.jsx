import GridCell from "./GridCell"

export default function GridRow({ i, rowData, handleClick }) {
  
  // build cells
  const cells = []
  for (let j = 0; j < rowData.length; j++) {
    cells.push(
      <GridCell 
        key={j}  
        value={rowData[j].number ? rowData[j].number : rowData[j].value} 
        i={i} 
        j={j} 
        isBlack={rowData[j].isBlack} 
        handleClick={handleClick} 
      />
    )
  }

  return (
    <tr>
      {cells}
    </tr>
  )
}