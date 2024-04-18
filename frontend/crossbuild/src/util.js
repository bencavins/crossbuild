function isOutOfBounds(i, j, grid) {
    if (i < 0 || i >= grid.length) {
        return true
    }
    if (j < 0 || j >= grid[i].length) {
        return true
    }
    return false
}

function isBlackSquare(i, j, grid) {
    return grid[i][j].isBlack
}

function needsNumber(i, j, grid) {
    if (isBlackSquare(i, j, grid)) return false
    return isOutOfBounds(i-1, j, grid) || isBlackSquare(i-1, j, grid) || isOutOfBounds(i, j-1, grid) || isBlackSquare(i, j-1, grid)
}

export function autoNumberGrid(grid) {
    let n = 1
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (needsNumber(i, j, grid)) {
                grid[i][j].number = n
                n++
            } else {
                grid[i][j].number = null
            }
        }
    }
    return grid
}

/**
 * Returns true if the cell begins an across clue
 * @param {[object]} cell 
 */
export function isAcross(cell, grid) {
    return cell.number && (isOutOfBounds(cell.i, cell.j-1, grid) || isBlackSquare(cell.i, cell.j-1, grid))
}

/**
 * Returns true if the cell begins a down clue
 * @param {[object]} cell 
 */
export function isDown(cell, grid) {
    return cell.number && (isOutOfBounds(cell.i-1, cell.j, grid) || isBlackSquare(cell.i-1, cell.j, grid))
}
