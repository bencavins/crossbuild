import './SquareGrid.css'

import GridRow from './GridRow'
// import { useState } from 'react'

// function buildDefaultGridData(n) {
//   const grid = []
//   for (let i = 0; i < n; i++) {
//     const row = []
//     for (let j = 0; j < n; j++) {
//       row.push(0)
//     }
//     grid.push(row)
//   }
//   return grid
// }

export default function SquareGrid({ grid, handleClick }) {
  // const [grid, setGrid] = useState(buildDefaultGridData(size))

  // build rows
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