// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

var sortArrayByParityII = function (nums) {
    let output = [];
    let even = nums.filter(a => a % 2 === 0);
    let odd = nums.filter(b => b % 2 === 1);
    let evenIdnex = 0;
    let oddIndnex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            nums[i] = even[evenIdnex];
            evenIdnex++;
        } else {
            nums[i] = odd[oddIndnex];
            oddIndnex++;
        }
    }
    return nums;
};

//     Example 1:

// Input: nums = [4, 2, 5, 7]
// Output: [4, 5, 2, 7]
// Explanation: [4, 7, 2, 5], [2, 5, 4, 7], [2, 7, 4, 5] would also have been accepted.
//     Example 2:

// Input: nums = [2, 3]
// Output: [2, 3]