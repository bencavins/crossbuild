import { useState } from "react"

import SquareGrid from "./SquareGrid"

const defaultPuzzle = {
  'title': 'Default',
  'grid': [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  'clues': {},
  'answers': {},
}

export default function PuzzleBuilder() {
  const [puzzle, setPuzzle] = useState(defaultPuzzle)

  return (
    <>
      <h1>Build</h1>
      <SquareGrid />
    </>
  )
}