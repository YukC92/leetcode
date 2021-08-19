// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
    let map = {}
    let n = nums.length;

    for (let i of nums) {
        if (!map[i]) {
            map[i] = 1;
        } else {
            map[i]++;
        }
        if (map[i] >= n / 2) return i
    }
};

//     Example 1:

// Input: nums = [3, 2, 3]
// Output: 3
// Example 2:

// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2