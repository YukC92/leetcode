// Count the number of prime numbers less than a non - negative number, n.

var isPrime = function (n) {
    if (n < 2) return false
    for (i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}

var countPrimes = function (n) {
    var count = 0;
    for (i = 2; i < n; i++) {
        if (isPrime(i)) {
            count += 1
        }
    }
    return count
};

//     Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0