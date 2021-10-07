// You have a set of integers s, which originally contains all the numbers from 1 to n.Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

var findErrorNums = function (nums) {
    // Ex: [1,2,2,4]
    const n = nums.length
    const except = n * (n + 1) / 2  // 1 + 2 + 3 + 4

    const set = new Set(nums) // {1, 2, 4}
    let setSum = 0
    set.forEach(val => setSum += val) // 1 + 2 + 4 

    const numSum = nums.reduce((curr, acc) => curr + acc) // 1 + 2 + 2 + 4

    // numSum - setSum = [1 + 2 + 2 + 4] - [1 + 2 + 4] = 2
    // except - setSum = [1 + 2 + 3 + 4] - [1 + 2 + 4] = 3

    return [numSum - setSum, except - setSum]
};

//     Example 1:

// Input: nums = [1, 2, 2, 4]
// Output: [2, 3]
// Example 2:

// Input: nums = [1, 1]
// Output: [1, 2]