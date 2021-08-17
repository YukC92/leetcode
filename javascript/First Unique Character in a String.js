// Given a string s, find the first non - repeating character in it and return its index.If it does not exist, return -1.

var firstUniqChar = function (s) {
    const res = {};
    // build res hashmap
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (res[char] === undefined) {
            res[char] = 1
        } else {
            res[char] +=1
        }
    }
    //iterate through chars of string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (res[char] === 1) {
            // the first char with a count of 1 should be returned
            return i
        }
    }
    return -1
};

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1