// Given an array of integers nums.

// A pair(i, j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

var numIdenticalPairs = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        var num1 = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var num2 = nums[j];
            if (num1 == num2 && i < j) {
                count += 1
            }
        }
    }
    return count
};

//     Example 1:

// Input: nums = [1, 2, 3, 1, 1, 3]
// Output: 4
// Explanation: There are 4 good pairs(0, 3), (0, 4), (3, 4), (2, 5) 0 - indexed.
//     Example 2:

// Input: nums = [1, 1, 1, 1]
// Output: 6
// Explanation: Each pair in the array are good.
//     Example 3:

// Input: nums = [1, 2, 3]
// Output: 0