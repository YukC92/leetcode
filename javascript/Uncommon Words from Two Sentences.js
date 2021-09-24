// A sentence is a string of single - space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words.You may return the answer in any order.

var uncommonFromSentences = function (s1, s2) {
    let sent = s1.concat(" ", s2).split(" ");
    let result = [];

    for (let i = 0; i < sent.length; i++) {
        if (sent.indexOf(sent[i]) === sent.lastIndexOf(sent[i])) {
            result.push(sent[i])
        }
    }
    return result
};

//     Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet", "sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
