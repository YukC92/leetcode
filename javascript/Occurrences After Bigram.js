// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

var findOcurrences = function (text, first, second) {
    const arr = text.split(' ');
    const ans = [];
    let i = 0;
    while (i < arr.length - 2) {
        if (arr[i] == first && arr[i + 1] == second && arr[i + 2]) {
            ans.push(arr[i + 2]);
        }
        i++;
    }
    return ans;
};

//     Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl", "student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we", "rock"]