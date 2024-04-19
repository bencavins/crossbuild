export default function Clue({ num, text, answer, length }) {
  return <div className="clue">
    <p>{num}. {text} ({length} letters)</p>
    <p>Answer: {answer}</p>
  </div>
}