export default function GridCell({ value, i, j, isBlack, handleClick }) {
  return (
    <td className={isBlack ? "black-cell" : ""} onClick={() => handleClick(i, j)}>
      {isBlack ? null : value}
    </td>
  )
}