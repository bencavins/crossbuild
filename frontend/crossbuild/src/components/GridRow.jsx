import GridCell from "./GridCell"

export default function GridRow({ cols }) {
  
  // build cells
  const cells = []
  for (let i = 0; i < cols; i++) {
    cells.push(<GridCell key={i} value={i} />)
  }

  return (
    <tr>
      {cells}
    </tr>
  )
}