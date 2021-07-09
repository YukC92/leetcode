// Given a string s consists of some words separated by spaces, return the length of the last word in the string.If the last word does not exist, return 0.

// A word is a maximal substring consisting of non - space characters only.

var lengthOfLastWord = function (s) {
    if (s.trim() === '') return 0

    return s.trim().split(' ').pop().length;
};

//     Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0