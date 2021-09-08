// You are given a string sentence that consist of words separated by spaces.Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin"(a made - up language similar to Pig Latin.) The rules of Goat Latin are as follows:

// If a word begins with a vowel('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant(i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

var toGoatLatin = function (sentence) {
    sentence = sentence.split(' ');
    var map = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i][0] in map) {
            sentence[i] += 'ma';
        } else {
            let sent = sentence[i].split('');
            sent.push(sent.shift());
            sentence[i] = sent.join('');
            sentence[i] += 'ma';
        }
        let j = 0;
        while (j < i + 1) {
            sentence[i] += 'a';
            j++;
        }
    }
    return sentence.join(' ');
};

//     Example 1:

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: sentence = "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"