// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function (nums) {
    let sum = nums[0];
    let res = nums[0];
    let subArr = [];
    let tempSubArray = [];

    for (let i = 1; i < nums.length; i++) {
        if (sum + nums[i] > nums[i]) {
            sum = sum + nums[i];
            tempSubArray.push(nums[i])
        } else {
            sum = nums[i];
            tempSubArray = [nums[i]];
        }

        if (sum > res) {
            res = sum;
            subArr = [...tempSubArray];
        }
    }

    return sum;
};

//     Example 1:

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5, 4, -1, 7, 8]
// Output: 23
