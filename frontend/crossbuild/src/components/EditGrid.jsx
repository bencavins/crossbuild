import SquareGrid from "./SquareGrid"
import { autoNumberGrid, getClues } from "../util"

export default function EditGrid({ setIsEditGrid, puzzle, setPuzzle }) {
  function handleNextButtonClick(event) {
    setIsEditGrid(false)
  }

  function handleSquareClick(i, j) {
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

  return <div>
    <p>Step 1: Edit the puzzle grid</p>
    <SquareGrid grid={puzzle.grid} handleClick={handleSquareClick} />
    <button onClick={handleNextButtonClick}>Next</button>
  </div>
}