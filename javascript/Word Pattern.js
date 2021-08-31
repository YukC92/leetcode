// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non - empty word in s.

var wordPattern = function (pattern, s) {
    let words = s.split(" ");

    if (pattern.length !== words.length) return false;

    const chars = [...new Set(pattern.split(""))];
    words = [...new Set(words)];
    const charWordMap = new Map();
    let constructedString = "";

    for (let i = 0; i < chars.length; i++) charWordMap.set(chars[i], words[i]);

    for (let i = 0; i < pattern.length; i++) {
        constructedString += charWordMap.get(pattern[i]);
        if (i < pattern.length - 1) constructedString += " ";
    }

    if (constructedString === s) return true;
    else return false;
};

//     Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false