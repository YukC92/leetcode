// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters(lowercase or uppercase) should be reversed.
// Return s after reversing it.

var reverseOnlyLetters = function (s) {
    const array = S.split('')
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let start = 0
    let end = S.length - 1

    while (start < end) {
        while (!alphabets.includes(array[start]) && start < end) {
            start++
        }
        while (!alphabets.includes(array[end]) && start < end) {
            end--
        }

        const temp = array[start]
        array[start] = array[end]
        array[end] = temp
        start++
        end--
    }

    return array.join('')
};

//     Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"