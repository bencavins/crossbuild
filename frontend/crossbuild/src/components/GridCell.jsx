import { useState } from "react"

export default function GridCell({ value }) {
  const [isBlack, setIsBlack] = useState(false)

  function handleClick() {
    setIsBlack(value => !value)
  }

  return (
    <td className={isBlack ? "black-cell" : ""} onClick={handleClick}>
      {value}
    </td>
  )
}