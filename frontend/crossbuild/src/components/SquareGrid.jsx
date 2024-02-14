import './SquareGrid.css'

export default function SquareGrid() {
  return (
    <table className="grid-container">
      <tbody>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
        </tr>
        <tr>
          <td>D</td>
          <td>E</td>
          <td>F</td>
        </tr>
        <tr>
          <td className='black-cell'>G</td>
          <td>H</td>
          <td>I</td>
        </tr>
      </tbody>
    </table>
  )
}