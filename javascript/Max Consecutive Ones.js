// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let track = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1)
            track++;
        else
            track = 0;

        count = count > track ? count : track;
    }
    return count;
};

// Example 1:

// Input: nums = [1, 1, 0, 1, 1, 1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1, 0, 1, 1, 0, 1]
// Output: 2