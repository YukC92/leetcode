// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order.The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

var isAlienSorted = function (words, order) {
    let dict = {};
    for (let i = 0; i < order.length; i++) dict[order[i]] = i;

    for (let i = 0; i < words.length - 1; i++) {
        const a = words[i], b = words[i + 1];

        for (let j = 0; j < a.length; j++) {
            const aIdx = dict[a[j]], bIdx = dict[b[j]];
            if (aIdx > bIdx || !b[j]) return false;
            if (aIdx < bIdx) break;
        }
    }

    return true;
};

//     Example 1:

// Input: words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
//     Example 2:

// Input: words = ["word", "world", "row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
//     Example 3:

// Input: words = ["apple", "app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter(in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character(More info).