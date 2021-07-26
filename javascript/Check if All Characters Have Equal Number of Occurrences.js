// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences(i.e., the same frequency).

var areOccurrencesEqual = function (s) {
    let map = {}

    for (let e of s) {
        if (map[e] == null) {
            map[e] = 1
        } else {
            map[e] += 1
        }
    }

    let arr = Object.values(map)
    let check = false

    if (Object.keys(map).length == 1) {
        return true
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) {
            check = true
        } else {
            return false
        }
    }

    return check
};

//     Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'.All characters occur 2 times in s.
//     Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.