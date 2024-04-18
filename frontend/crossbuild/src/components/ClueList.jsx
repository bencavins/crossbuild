import Clue from "./Clue"

export default function ClueList({ clues }) {

//   console.log(Object.entries(clues).map(([num, data]) => console.log(data)))
  return <div className="clue-list">
    {Object.entries(clues).map(([num, data]) => <Clue key={num} num={num} text={data.text} />)}
  </div>
}