// You are given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non - space characters.

var countSegments = function (s) {
    s = s.split(" ").filter(Boolean).length
    return s
};

//     Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
// Example 3:

// Input: s = "love live! mu'sic forever"
// Output: 4
// Example 4:

// Input: s = ""
// Output: 0