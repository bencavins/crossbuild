import GridCell from "./GridCell"

export default function GridRow({ cols }) {
  
  // build array of cells
  const rows = []
  for (let i = 0; i < cols; i++) {
    rows.push(<GridCell key={i} value={i} />)
  }

  return (
    <tr>
      {rows}
    </tr>
  )
}