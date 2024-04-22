import { useState } from "react"

import EditGrid from "./EditGrid"
import EditClues from "./EditClues"
import { autoNumberGrid, getClues } from "../util"

function buildDefaultPuzzle() {
  const puzzle = {
    'title': 'Default Title',
    'grid': buildDefaultGridData(7),
  }
  puzzle.clues = getClues(puzzle.grid)
  return puzzle
}

function buildDefaultGridData(n) {
  const grid = []
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      row.push({
        i: i,
        j: j,
        value: '',
        isBlack: false,
        number: null
      })
    }
    grid.push(row)
  }
  return autoNumberGrid(grid)
}

export default function PuzzleBuilder() {
  const [puzzle, setPuzzle] = useState(buildDefaultPuzzle())
  const [isEditGrid, setIsEditGrid] = useState(true)

  return (
    <>
      <h1>Build</h1>
      <h2>{puzzle.title}</h2>
      {isEditGrid ? 
        <EditGrid setIsEditGrid={setIsEditGrid} puzzle={puzzle} setPuzzle={setPuzzle} /> 
      : <EditClues puzzle={puzzle} setPuzzle={setPuzzle} />}
    </>
  )
}