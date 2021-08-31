// Given two non - negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built -in library for handling large integers(such as BigInteger).You must also not convert the inputs to integers directly.

var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let res = "";
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let cur = (i >= 0 ? parseInt(num1[i]) : 0) + (j >= 0 ? parseInt(num2[j]) : 0) + carry;
        carry = Math.floor(cur / 10);
        cur = cur % 10;
        res = cur + res;
        i--;
        j--;
    }
    if (carry) {
        res = carry + res;
    }
    return res;
};

//     Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"