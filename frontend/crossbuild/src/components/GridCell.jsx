export default function GridCell({ value, i, j, number, isBlack, handleClick }) {
  return (
    <td className={isBlack ? "black-cell" : ""} onClick={() => handleClick(i, j)}>
      <p className='grid-cell-number'>{number}</p>
      {isBlack ? null : value}
    </td>
  )
}