// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return '';
    var length = strs.length, result = '';

    var s = '', min = strs[0].length, j = 0;
    for (let i = 0; i < length; i++) {
        j = (length - 1 == i) ? 0 : i + 1;
        s = s + '(strs[' + i + '][i] == strs[' + j + '][i]) && ';
        if (min > strs[i].length) {
            min = strs[i].length;
        }
    }
    s = s.substring(0, s.length - 4);
    for (let i = 0; i < min; i++) {
        if (i == 0 && !eval(s)) {
            return "";
        }
        if (eval(s)) {
            result = result + strs[0][i];
        }
    }
    return result;
};

//     Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.