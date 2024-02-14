import './SquareGrid.css'

import GridRow from './GridRow'

export default function SquareGrid() {
  return (
    <table className="grid-container">
      <tbody>
        <GridRow cols={3} />
        <GridRow cols={3} />
        <GridRow cols={3} />
      </tbody>
    </table>
  )
}