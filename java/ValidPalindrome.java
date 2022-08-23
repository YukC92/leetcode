// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 
 class Solution {
    public boolean isPalindrome(String s) {
        
        StringBuilder str = new StringBuilder();
        
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if(c >= 'A' && c <= 'Z'){
                str.append(Character.toLowerCase(c));
            }
            else if((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')){
                str.append(c);
            }
        }
        
        String s1 = str.toString();
        str.reverse();
        
        if(s1.equals(str.toString())){
            return true;
        }
        
        return false;
        
    }
}