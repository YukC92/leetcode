// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function (n) {
    var num = n.toString().split("")
    var mult = parseInt(num[0]);
    var sum = parseInt(num[0]);
    for (var i = 1; i < num.length; i++) {
        mult *= parseInt(num[i]);
        sum += parseInt(num[i]);
    }
    return mult - sum
};



//     Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21