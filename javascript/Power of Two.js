// Given an integer n, return true if it is a power of two.Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

var isPowerOfTwo = function (n) {
    let i = 0;
    let num = 0;
    do {
        num = Math.pow(2, i);
        i++;
    } while (Math.pow(2, i) <= n)
    if (num === n) {
        return true
    } else {
        return false
    }
};

//     Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false