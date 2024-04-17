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

function autoNumberGrid(grid) {
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

export default autoNumberGrid