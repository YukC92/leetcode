// You are given a binary array nums(0 - indexed).

// We define xi as the number whose binary representation is the subarray nums[0..i](from most - significant - bit to least - significant - bit).

// For example, if nums = [1, 0, 1], then x0 = 1, x1 = 2, and x2 = 5.
// Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

var prefixesDivBy5 = function (nums) {
    let stv = 0;
    return nums.map((bit) => {
        stv = stv * 2 + bit;
        //adding 1 binary bit means whether the number gets doubled (if add 0) or gets doubled and plus 1 (if add 1)
        //Example: decimal 2 is 10 in binary. If add 0 in binary: 10 will be 100 which is 4 in decimal (the number gets doubled). If add 1 in binary: 10 will be 101 which is 5 in decimal(the number gets doubled and plus 1).
        stv %= 5;
        //to prevent overflow
        return stv == 0;
    });
};

// Example 1:

// Input: nums = [0, 1, 1]
// Output: [true, false, false]
// Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base - 10.
// Only the first number is divisible by 5, so answer[0] is true.
//     Example 2:

// Input: nums = [1, 1, 1]
// Output: [false, false, false]
// Example 3:

// Input: nums = [0, 1, 1, 1, 1, 1]
// Output: [true, false, false, false, true, false]
// Example 4:

// Input: nums = [1, 1, 1, 0, 1]
// Output: [false, false, false, false, false]