// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function (num) {
    var s = 0;
    var i;
    while (num > 0) {
        i = num % 10;
        s = s + i;
        num = (num - i) / 10;
        if (num === 0 && s > 9) {
            num = s;
            s = 0;
        }
    }
    return s;
};

//     Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 -- > 3 + 8 -- > 11
// 11 -- > 1 + 1 -- > 2
// Since 2 has only one digit, return it.
//     Example 2:

// Input: num = 0
// Output: 0