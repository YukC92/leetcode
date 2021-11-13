// Given a string array words, return an array of all characters that show up in all strings within the words(including duplicates).You may return the answer in any order.

var commonChars = function (words) {
    function split(s) {
        const map = {}
        for (let a of s) map[a] = (map[a] || 0) + 1
        return map
    }
    const map = split(A[0])
    for (let a of A) {
        const tmp = split(a)
        for (let m in map) {
            map[m] = Math.min(map[m], tmp[m] || 0)
        }
    }
    let list = []
    for (let m in map) {
        for (let i = 0; i < map[m]; i++) list.push(m)
    }
    return list
};

//     Example 1:

// Input: words = ["bella", "label", "roller"]
// Output: ["e", "l", "l"]
// Example 2:

// Input: words = ["cool", "lock", "cook"]
// Output: ["c", "o"]