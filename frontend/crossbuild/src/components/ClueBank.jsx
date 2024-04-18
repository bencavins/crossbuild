export default function ClueBank({ clues }) {
  return <div className="clue-bank">
    <h2>Clues</h2>
    <h3>Across</h3>
    {/* {Object.entries(clues.across).map(([num, text]) => {
      return <li>{num} {text}</li>
    })} */}
    {/* {clues.across.map(clue => <li>{clue.text}</li>)} */}
    <h3>Down</h3>
    {/* {clues.down.map(clue => <li>{clue.text}</li>)} */}
  </div>
}