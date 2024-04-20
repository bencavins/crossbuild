import { useState } from "react"

import SquareGrid from "./SquareGrid"
import ClueBank from "./ClueBank"
import { autoNumberGrid, isAcross, isDown, getAcrossLength, getDownLength } from "../util"

function buildDefaultPuzzle() {
  const puzzle = {
    'title': 'Default Title',
    'grid': buildDefaultGridData(7),
  }
  puzzle.clues = getClues(puzzle.grid)
  populateAnswers(puzzle)
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

function getClues(grid) {
  const clues = {
    across: {},
    down: {}
  }
  for (let row of grid) {
    for (let cell of row) {
      if (cell.number) {
        if (isAcross(cell, grid)) {
          const n = getAcrossLength(cell, grid)
          clues.across[cell.number] = {
            'text': `Test clue ${cell.number}A`,
            'answer': 'X'.repeat(n),
            'length': n,
            'i': cell.i,
            'j': cell.j,
          }
        }
        if (isDown(cell, grid)) {
          const n = getDownLength(cell, grid)
          clues.down[cell.number] = {
            'text': `Test clue ${cell.number}D`,
            'answer': 'X'.repeat(n),
            'length': n,
            'i': cell.i,
            'j': cell.j,
          }
  }}}}
  return clues
}

/**
 * Fills puzzle grid values across with data from word starting at coords i, j.
 * @param {*} i 
 * @param {*} j 
 * @param {*} word 
 * @param {*} puzzle 
 */
function fillAcross(i, j, word, puzzle) {
  for (let j_prime = 0; j_prime < word.length; j_prime++) {
    puzzle.grid[i][j+j_prime].value = word[j_prime]
  }
}

function fillDown(i, j, word, puzzle) {

}

function populateAnswers(puzzle) {
  // loop over answers
  Object.entries(puzzle.clues.across).forEach(([num, data]) => {
    fillAcross(data.i, data.j, data.answer, puzzle)
  })
}

export default function PuzzleBuilder() {
  const [puzzle, setPuzzle] = useState(buildDefaultPuzzle())

  function handleClick(i, j) {
    // copy puzzle 
    const puzzleCopy = {...puzzle}
    // why am i copying the grid? is this needed anymore?
    const gridCopy = puzzleCopy.grid.map(row => [...row])
    gridCopy[i][j].isBlack = !gridCopy[i][j].isBlack
    // renumber the grid
    puzzleCopy.grid = autoNumberGrid(gridCopy)
    // rebuild the clue stubs
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