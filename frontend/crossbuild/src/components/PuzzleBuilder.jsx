import { useState } from "react"

import SquareGrid from "./SquareGrid"
import autoNumberGrid from "../util"

const defaultPuzzle = {
  'title': 'Default',
  'grid': buildDefaultGridData(7),
  'clues': {},
  'answers': {},
}

function buildDefaultGridData(n) {
  const grid = []
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      row.push({
        i: i,
        j: j,
        value: 'X',
        isBlack: false,
        number: null
      })
    }
    grid.push(row)
  }
  return autoNumberGrid(grid)
}

export default function PuzzleBuilder() {
  const [puzzle, setPuzzle] = useState(defaultPuzzle)

  function handleClick(i, j) {
    // copy puzzle 
    const puzzleCopy = {...puzzle}
    // why am i copying the grid? is this needed anymore?
    const gridCopy = puzzleCopy.grid.map(row => [...row])
    gridCopy[i][j].isBlack = !gridCopy[i][j].isBlack
    puzzleCopy.grid = autoNumberGrid(gridCopy)
    setPuzzle(puzzleCopy)
  }

  return (
    <>
      <h1>Build</h1>
      <SquareGrid grid={puzzle.grid} handleClick={handleClick} />
    </>
  )
}