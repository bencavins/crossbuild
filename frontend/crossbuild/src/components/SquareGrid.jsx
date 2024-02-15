import './SquareGrid.css'

import GridRow from './GridRow'

export default function SquareGrid({ size }) {
  const rows = []
  for (let i = 0; i < size; i++) {
    rows.push(<GridRow cols={size} />)
  }

  return (
    <table className="grid-container">
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}