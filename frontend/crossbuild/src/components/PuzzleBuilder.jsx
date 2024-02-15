import { useState } from "react"

import SquareGrid from "./SquareGrid"

const defaultPuzzle = {
  'title': 'Default',
  'grid': buildDefaultGridData(5),
  'clues': {},
  'answers': {},
}

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

export default function PuzzleBuilder() {
  // const [puzzle, setPuzzle] = useState(defaultPuzzle)
  const [grid, setGrid] = useState(buildDefaultGridData(5))

  function handleClick(i, j) {
    // copy matrix
    const gridCopy = grid.map(row => [...row])
    gridCopy[i][j] = gridCopy[i][j] ? 0 : -1
    setGrid(gridCopy)
  }

  return (
    <>
      <h1>Build</h1>
      <SquareGrid grid={grid} handleClick={handleClick} />
    </>
  )
}