import { useState } from "react"

import SquareGrid from "./SquareGrid"
import ClueBank from "./ClueBank"
import { autoNumberGrid, isAcross, isDown } from "../util"

const defaultPuzzle = {
  'title': 'Default Title',
  'grid': buildDefaultGridData(7),
  'clues': {
    'across': {},
    'down': {},
  },
  'answers': {
    'across': {},
    'down': {},
  },
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

  function getClues(grid) {
    const clues = {
      across: {},
      down: {}
    }
    for (let row of grid) {
      for (let cell of row) {
        if (cell.number) {
          if (isAcross(cell, grid)) {
            clues.across[cell.number] = {'text': `Test clue ${cell.number}A`}
          }
          if (isDown(cell, grid)) {
            clues.down[cell.number] = {'text': `Test clue ${cell.number}D`}
    }}}}
    return clues
  }

  function handleClick(i, j) {
    // copy puzzle 
    const puzzleCopy = {...puzzle}
    // why am i copying the grid? is this needed anymore?
    const gridCopy = puzzleCopy.grid.map(row => [...row])
    gridCopy[i][j].isBlack = !gridCopy[i][j].isBlack
    puzzleCopy.grid = autoNumberGrid(gridCopy)
    puzzleCopy.clues = getClues(puzzleCopy.grid)
    setPuzzle(puzzleCopy)
  }

  return (
    <>
      <h1>Build</h1>
      <h2>{puzzle.title}</h2>
      <SquareGrid grid={puzzle.grid} handleClick={handleClick} />
      <ClueBank clues={puzzle.clues} answers={puzzle.answers} />
    </>
  )
}