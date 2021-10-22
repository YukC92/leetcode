// Your friend is typing his name into a keyboard.Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard.Return True if it is possible that it was your friends name, with some characters(possibly none) being long pressed.

var isLongPressedName = function (name, typed) {
    let idx = 0, prv = 0
    for (let i = 0; i < name.length; i++) {
        prv = idx
        // if the characters are not the same
        if (name[i] !== typed[idx]) return false
        // if consecutive characters are the same
        while (name[i] === name[i + 1] && name[i] === typed[idx] && name[i + 1] === typed[idx + 1]) {
            idx++;
            i++;
        }
        // if characters are the same, but not consecutive
        while (name[i] === typed[idx] && name[i] !== name[i + 1]) {
            idx++
        }
        // if idx has not incremented
        if (prv === idx) return false
    }
    // if idx has not reached the length of typed
    if (idx !== typed.length) return false
    // all is good, return true
    return true
};

//     Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
//     Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.