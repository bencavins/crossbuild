const defaultPuzzle = {
    title: 'Default Title',
    grid: [[]],
    clues: {
        across: {},
        down: {}
    },

    getClues: function () {
        // overwrite all existing clues
        this.clues = {
            across: {},
            down: {}
        }
        for (let row of this.grid) {
            for (let cell of row) {
                if (cell.number) {
                    if (isAcross(cell, this.grid)) {
                        const n = getAcrossLength(cell, this.grid)
                        this.clues.across[cell.number] = {
                            'text': `Test clue ${cell.number}A`,
                            'answer': 'X'.repeat(n),
                            'length': n
                        }
                    }
                    if (isDown(cell, this.grid)) {
                        const n = getDownLength(cell, this.grid)
                        this.clues.down[cell.number] = {
                            'text': `Test clue ${cell.number}D`,
                            'answer': 'X'.repeat(n),
                            'length': n
    }}}}}}
}