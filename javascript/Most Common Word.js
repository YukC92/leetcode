// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned.It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case -insensitive and the answer should be returned in lowercase.

var mostCommonWord = function (paragraph, banned) {
    let word = ''
    let maxCount = 0
    let mostCommon = ''
    const map = new Map()

    for (let i = 0; i < paragraph.length; i++) {
        let char = paragraph[i].toLowerCase()

        if (/[a-z]/.test(char)) {
            word += char

            if (i < paragraph.length - 1) {
                continue
            }
        }

        if (word.length && !banned.includes(word)) {
            map.set(word, map.get(word) + 1 || 1)

            if (map.get(word) > maxCount) {
                maxCount = map.get(word)
                mostCommon = word
            }
        }

        word = ''
    }

    return mostCommon
};

//     Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice(and no other word does), so it is the most frequent non - banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
//     that punctuation is ignored(even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"
