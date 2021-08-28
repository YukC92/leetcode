// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

var isUgly = function (n) {
    if (n <= 0) return false;
    if (n <= 5) return true;

    for (const divider of [2, 3, 5]) {
        if (n % divider === 0) {
            return isUgly(n / divider);
        }
    }
    return false;
};

//     Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.