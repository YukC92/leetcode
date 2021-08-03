// Given an integer n, return the number of trailing zeroes in n!.

// Follow up: Could you write a solution that works in logarithmic time complexity ?

var trailingZeroes = function (n) {
    var count = 1;
    for (var i = 1; i <= n; i++) {
        count *= i
    }
    var num = count.toString()
    var zeroCount = 0;
    for (i = 0; i < num.length; i++) {
        if (num[i] === "0") {
            zeroCount += 1
        }
    }
    return zeroCount
};

//     Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
//     Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
//     Example 3:

// Input: n = 0
// Output: 0