// Given integer array nums, return the third maximum number in this array.If the third maximum does not exist, return the maximum number.

var thirdMax = function (nums) {
    let length = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            length--;
            nums.splice(i, 1);
        }
    }

    if (nums.length < 3) {
        return nums[length - 1];
    }
    return nums[length - 3];
};

//     Example 1:

// Input: nums = [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.
// Example 2:

// Input: nums = [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum(2) is returned instead.
//     Example 3:

// Input: nums = [2, 2, 3, 1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.