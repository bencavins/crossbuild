export default function GridCell({ value, i, j, number, isBlack, handleClick }) {
  return (
    <td className={isBlack ? "black-cell" : ""} onClick={() => handleClick(i, j)}>
      <div className="grid-cell-content">
        <div className='grid-cell-number'>{number}</div>
        {isBlack ? null : <p className="grid-cell-value">{value}</p>}
      </div>
    </td>
  )
}