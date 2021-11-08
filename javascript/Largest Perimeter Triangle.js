// Given an integer array nums, return the largest perimeter of a triangle with a non - zero area, formed from three of these lengths.If it is impossible to form any triangle of a non - zero area, return 0.

var largestPerimeter = function (nums) {
    const arr = [...nums]
    arr.sort((a, b) => a - b)
    let max = arr.pop()
    let second = arr.pop()
    while (arr.length) {
        const least = arr.pop()
        if (least + second > max)
            return least + second + max
        max = second
        second = least
    }
    return 0
};

// Example 1:

// Input: nums = [2, 1, 2]
// Output: 5
// Example 2:

// Input: nums = [1, 2, 1]
// Output: 0
// Example 3:

// Input: nums = [3, 2, 3, 4]
// Output: 10
// Example 4:

// Input: nums = [3, 6, 2, 3]
// Output: 8