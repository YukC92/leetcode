// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function (n) {
    const map = {}
    function inner(num) {
        let sum = 0
        const numAsString = num.toString()
        for (let i = 0; i < numAsString.length; i++) {
            sum += Math.pow(numAsString[numAsString.length - 1 - i], 2)
        }
        if (sum === 1) {
            return true
        } else if (map[sum]) {
            return false
        } else {
            map[sum] = true
            return inner(sum)
        }
    }
    return inner(n)
};

//     Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
