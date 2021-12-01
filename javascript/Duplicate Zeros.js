// Given a fixed - length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.Do the above modifications to the input array in place and do not return anything.

var duplicateZeros = function (arr) {
    const res = []
    let count = 0
    let p = 0
    while (count < arr.length) {
        const cur = arr[p++]
        if (cur !== 0) {
            res.push(cur)
            count++
        } else {
            res.push(cur)
            res.push(cur)
            count += 2
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = res[i]
    }
};

//     Example 1:

// Input: arr = [1, 0, 2, 3, 0, 4, 5, 0]
// Output: [1, 0, 0, 2, 3, 0, 0, 4]
// Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]
// Example 2:

// Input: arr = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation: After calling your function, the input array is modified to: [1, 2, 3]