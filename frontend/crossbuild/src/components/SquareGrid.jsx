import './SquareGrid.css'
import GridRow from './GridRow'

export default function SquareGrid({ grid, handleClick }) {

  // render rows
  const rows = []
  for (let i = 0; i < grid.length; i++) {
    rows.push(
      <GridRow key={i} i={i} rowData={grid[i]} handleClick={handleClick} />
    )
  }

  return (
    <table className="grid-container">
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}