// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

var detectCapitalUse = function (word) {
    var word1 = word.toUpperCase();
    var word2 = word.toLowerCase();
    var word3 = word[0].toUpperCase() + word.slice(1).toLowerCase();
    if (word1 === word || word2 === word || word3 == word) {
        return true
    }
    return false
};

//     Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false