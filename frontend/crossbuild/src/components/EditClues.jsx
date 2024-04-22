import SquareGrid from "./SquareGrid"
import ClueBank from "./ClueBank"
import { getClues } from "../util"

export default function EditClues({ puzzle, setPuzzle }) {
  function handleSquareClick(i, j) {}  // does nothing

  return (
    <>
      <p>Step 2: Edit the clues/answers</p>
      <SquareGrid grid={puzzle.grid} handleClick={handleSquareClick} />
      <ClueBank clues={puzzle.clues} answers={puzzle.answers} setPuzzle={setPuzzle} />
    </>
  )
}