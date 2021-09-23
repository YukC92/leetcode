// Given an m x n matrix, return true if the matrix is Toeplitz.Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top - left to bottom - right has the same elements.

var isToeplitzMatrix = function (matrix) {
    function checkDiagonal(si, sj, m, n) {

        let val = matrix[si][sj]

        let i = si
        let j = sj

        while (i < m && j < n) {

            if (matrix[i][j] !== val) {
                return false
            }

            i++
            j++
        }

        return true
    }


    const m = matrix.length
    const n = matrix[0].length

    for (let i = 0; i < m; i++) {
        if (!checkDiagonal(i, 0, m, n)) {
            return false
        }
    }

    for (let j = 0; j < n; j++) {
        if (!checkDiagonal(0, j, m, n)) {
            return false
        }
    }

    return true
};

//     Example 1:


// Input: matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.
//     Example 2:


// Input: matrix = [[1, 2], [2, 2]]
// Output: false
// Explanation:
// The diagonal "[1, 2]" has different elements.