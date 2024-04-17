import GridCell from "./GridCell"

export default function GridRow({ i, rowData, handleClick }) {
  
  // build cells
  const cells = []
  for (let j = 0; j < rowData.length; j++) {
    cells.push(
      <GridCell 
        key={j}  
        value={rowData[j]} 
        i={i} 
        j={j} 
        isBlack={rowData[j] == -1} 
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