// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {
    let ans = [-1, -1];
    function _helper(nums, target, firstIndex) {
        let start = 0;
        let end = nums.length - 1;
        let _ans = -1;

        while (start <= end) {
            let mid = Math.trunc((start + end) / 2);
            if (nums[mid] > target) {
                end = mid - 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                _ans = mid;
                if (firstIndex) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return _ans;
    }
    ans[0] = _helper(nums, target, firstIndex = true);
    ans[1] = _helper(nums, target, firstIndex = false);
    return ans;
};

//     Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1, -1]