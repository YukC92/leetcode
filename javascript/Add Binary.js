// Given two binary strings a and b, return their sum as a binary string.


var addBinary = function (a, b) {
    let binA;
    let binB;
    let carry = null;
    if (a.length > b.length) {
        binA = a.split("");
        binB = b.split("");
    } else if (a.length < b.length) {
        binA = b.split("");
        binB = a.split("");
    } else {
        binA = a.split("");
        binB = b.split("");
    }
    for (let i = binA.length - 1, j = binB.length - 1; i >= 0; i-- , j--) {
        if (binA[i] === "0" && binB[j] === "0") {
            if (carry === null) {
                binA[i] = "0";
            } else if (carry === "1") {
                binA[i] = "1";
                carry = null;
            }
        } else if (binA[i] === "1" && binB[j] === "1") {
            if (carry === null) {
                binA[i] = "0";
                carry = "1";
            } else if (carry === "1") {
                binA[i] = "1";
                carry = "1";
            }
        } else if (binA[i] === "1" && binB[j] === "0") {
            if (carry === null) {
                binA[i] = "1";
            } else if (carry === "1") {
                binA[i] = "0";
                carry = "1";
            }
        } else if (binA[i] === "0" && binB[j] === "1") {
            if (carry === null) {
                binA[i] = "1";
            } else if (carry === "1") {
                binA[i] = "0";
                carry = "1";
            }
        } else if (carry === "1" && binB[j] === undefined) {
            if (binA[i] === "0") {
                binA[i] = "1";
                carry = null;
            } else if (binA[i] === "1") {
                binA[i] = "0";
                carry = "1";
            }
        }
    }
    if (carry === "1") {
        binA.unshift("1");
        carry = null;
    }
    return binA.join("");
};

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"