// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let letters = {};
    for (let i = 0; i < s.length; i++) {
        letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
        letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
    }

    for (let letter in letters) {
        if (letters[letter] !== 0) {
            return false;
        }
    }
    return true;
};

//     Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false