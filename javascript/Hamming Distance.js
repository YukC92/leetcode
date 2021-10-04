// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

var hammingDistance = function (x, y) {
    let output = 0;
    for (; x > 0 || y > 0; x = x >> 1, y = y >> 1) {
        output += (x & 1) ^ (y & 1);
    }
    return output;
};

//     Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1(0 0 0 1)
// 4(0 1 0 0)
// ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
//     Example 2:

// Input: x = 3, y = 1
// Output: 1