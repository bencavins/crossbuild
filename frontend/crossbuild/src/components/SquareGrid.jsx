import './SquareGrid.css'

import GridRow from './GridRow'
import { useState } from 'react'

function buildDefaultGridData(n) {
  const grid = []
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    grid.push(row)
  }
  return grid
}

export default function SquareGrid({ size }) {
  const [grid, setGrid] = useState(buildDefaultGridData(size))

  function handleClick(i, j) {
    // copy matrix
    const gridCopy = grid.map(row => [...row])
    gridCopy[i][j] = gridCopy[i][j] ? 0 : -1
    setGrid(gridCopy)
  }

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