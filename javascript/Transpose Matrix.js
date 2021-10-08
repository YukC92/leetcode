// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

var transpose = function (matrix) {
    const transposed = []
    let columnCount = 0, newRow = []
    while (columnCount < matrix[0].length) {
        for (let i = 0; i < matrix.length; i++) {
            newRow.push(matrix[i][columnCount])
        }
        transposed.push(newRow)
        newRow = []
        columnCount++
    }
    return transposed
};



// Example 1:

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// Example 2:

// Input: matrix = [[1, 2, 3], [4, 5, 6]]
// Output: [[1, 4], [2, 5], [3, 6]]