import ClueList from "./ClueList"

export default function ClueBank({ clues }) {
  return <div className="clue-bank">
    <h2>Clues</h2>
    <h3>Across</h3>
    <ClueList clues={clues.across} />
    {/* {Object.entries(clues.across).map(([num, text]) => {
      return <li>{num} {text}</li>
    })} */}
    {/* {clues.across.map(clue => <li>{clue.text}</li>)} */}
    <h3>Down</h3>
    <ClueList clues={clues.down} />
    {/* {clues.down.map(clue => <li>{clue.text}</li>)} */}
  </div>
}