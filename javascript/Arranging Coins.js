// You have n coins and you want to build a staircase with these coins.The staircase consists of k rows where the ith row has exactly i coins.The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

var arrangeCoins = function (n) {
    const m = (-1 + Math.sqrt(1 + 8 * n)) / 2.0
    return Math.floor(m)
};

//     Example 1:


// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:


// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.