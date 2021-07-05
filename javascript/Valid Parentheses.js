// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
    const openParenthesis = [];

    const closedParenthesis = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let i = 0; i < s.length; i++) {
        const item = s[i];

        if (closedParenthesis[item] !== undefined) {
            const lastOpen = openParenthesis.pop();

            if (closedParenthesis[item] !== lastOpen) {
                return false;
            } ``
        } else {
            openParenthesis.push(item);
        }
    }

    return !openParenthesis.length;
};

//     Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true