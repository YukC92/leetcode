// Give a binary string s, return the number of non - empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

var countBinarySubstrings = function (s) {
    let total = 0;
    let prevCount = 0;
    let char = null;
    let currCount = 0;

    // loop past end of array, using s[s.length] (undefined) as a sentinel to trigger the s[i] !== char condition on the last group
    for (let i = 0; i <= s.length; i++) {
        if (s[i] !== char) {
            total += Math.min(prevCount, currCount);
            prevCount = currCount;
            currCount = 1;
            char = s[i];
        } else {
            currCount++;
        }
    }

    return total;
};

//     Example 1:

// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
//     Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
//         Example 2:

// Input: s = "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.