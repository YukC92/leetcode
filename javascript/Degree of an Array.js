// Given a non - empty array of non - negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a(contiguous) subarray of nums, that has the same degree as nums.

var findShortestSubArray = function (nums) {
    if (nums.length === 0) return 0
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let v = map.get(nums[i])
            v.count++
            v.end = i
            map.set(nums[i], v)
        } else {
            map.set(nums[i], { count: 1, start: i, end: i })
        }
    }
    let max = 0
    let l = nums.length
    for (let key of map.keys()) {
        let v = map.get(key)
        let templ = v.end - v.start + 1
        if (v.count > max) {
            max = v.count
            l = templ
        }
        if (v.count === max) {
            if (templ < l) {
                l = templ
            }
        }
    }
    return l
};

//     Example 1:

// Input: nums = [1, 2, 2, 3, 1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1, 2, 2, 3, 1, 4, 2]
// Output: 6
// Explanation:
// The degree is 3 because the element 2 is repeated 3 times.
//     So[2, 2, 3, 1, 4, 2] is the shortest subarray, therefore returning 6.