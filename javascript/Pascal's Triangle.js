// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function (numRows) {
    const res = []
    for (let i = 1; i <= numRows; i++) {
        const prevArr = res[res.length - 1]
        const arr = new Array(i)
        for (let j = 0; j < arr.length; j++) {
            if (j === 0 || j === arr.length - 1) {
                arr[j] = 1
            } else {
                arr[j] = prevArr[j - 1] + prevArr[j]
            }
        }
        res.push(arr)
    }
    return res
};

// Example 1:

// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]