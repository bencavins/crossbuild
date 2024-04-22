import ClueList from "./ClueList"

export default function ClueBank({ clues, setPuzzle }) {
  function updateAcrossClue(num, text) {
    setPuzzle(puzzle => {
      const puzzleCopy = {...puzzle}
      puzzleCopy.clues.across[num].text = text
      return puzzleCopy
    })
  }

  function updateDownClue(num, text) {
    setPuzzle(puzzle => {
      const puzzleCopy = {...puzzle}
      puzzleCopy.clues.down[num].text = text
      return puzzleCopy
    })
  }

  return <div className="clue-bank">
    <h2>Clues</h2>
    <h3>Across</h3>
    <ClueList clues={clues.across} saveClue={updateAcrossClue} />
    <h3>Down</h3>
    <ClueList clues={clues.down} saveClue={updateDownClue} />
  </div>
}