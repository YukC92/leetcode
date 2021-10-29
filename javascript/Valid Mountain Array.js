// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

//     arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

var validMountainArray = function (arr) {
    let down = false, up = false;

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];
        let prev = arr[i - 1];

        if (current === prev) return false;

        if (current > prev) {
            if (down) return false;
            up = true;
        } else {
            down = true;
        }
    }

    return up && down;
};

// Example 1:

// Input: arr = [2, 1]
// Output: false
// Example 2:

// Input: arr = [3, 5, 5]
// Output: false
// Example 3:

// Input: arr = [0, 3, 2, 1]
// Output: true
