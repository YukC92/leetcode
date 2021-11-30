// For two strings s and t, we say "t divides s" if and only if s = t + ... + t(t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var gcdOfStrings = function (str1, str2) {
    const gcdOfNumber = (num1, num2) => {
        while (num2 !== 0) {
            const res = num2 % num1
            num1 = num2
            num2 = res
        }
        return num1
    }
    const gcd = gcdOfNumber(str1.length, str2.length)
    const common = str1.slice(0, gcd)
    return common.repeat(str1.length / gcd) === str1 &&
        common.repeat(str2.length / gcd) === str2
        ? common
        : ''
};

//     Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
// Example 4:

// Input: str1 = "ABCDEF", str2 = "ABC"
// Output: ""