import { useState } from "react"

export default function Clue({ num, text, answer, length, saveClue }) {
  const [isEditing, setIsEditing] = useState(false)
  const [clueInput, setClueInput] = useState(text)

  function handleClick(event) {
    if (isEditing) {
        saveClue(num, clueInput)
    }
    setIsEditing(prev => !prev)
  }

  function handleChange(event) {
    setClueInput(event.target.value)
  }

  return <div className="clue">
    {isEditing ? 
      <input type="text" name="clue" value={clueInput} onChange={handleChange} /> 
    : <p>{num}. {text} ({length} letters)</p>}
    <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    <p>Answer: {answer}</p>
  </div>
}