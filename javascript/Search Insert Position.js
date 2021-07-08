// Given a sorted array of distinct integers and a target value, return the index 
// if the target is found.If not, return the index where it would be 
// if it were inserted in order.

var searchInsert = function (nums, target) {
    let indexOfTarget = nums.indexOf(target);

    if (indexOfTarget !== -1) {
        return indexOfTarget;
    }

    nums.every((num, index) => {
        if (num > target) {
            indexOfTarget = index;
            return false;
        }

        if (index === nums.length - 1) {
            indexOfTarget = nums.length;
            return false;
        }

        if (num < target && target < nums[index + 1]) {
            indexOfTarget = index + 1;
            return false;
        }

        return true;
    })

    return indexOfTarget;
};

//     Example 1:

// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1, 3, 5, 6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1, 3, 5, 6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0