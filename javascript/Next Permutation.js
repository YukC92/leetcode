// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order(i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

var nextPermutation = function (nums) {
    const n = nums.length;

    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    let j = n - 1;

    if (i != -1) {

        while (j >= 0 && nums[j] <= nums[i]) j--;

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    i++;
    j = n - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};

//     Example 1:

// Input: nums = [1, 2, 3]
// Output: [1, 3, 2]
// Example 2:

// Input: nums = [3, 2, 1]
// Output: [1, 2, 3]
// Example 3:

// Input: nums = [1, 1, 5]
// Output: [1, 5, 1]
// Example 4:

// Input: nums = [1]
// Output: [1]