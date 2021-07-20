// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function (s, t) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1] && t[i] === t[i + 1]) {
            return false
        } else if (s[i] === s[i + 1] && t[i] !== t[i + 1]) {
            return false
        }
    }
    return true
};

//     Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
