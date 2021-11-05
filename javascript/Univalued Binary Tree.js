// A binary tree is uni - valued if every node in the tree has the same value.

// Given the root of a binary tree, return true if the given tree is uni - valued, or false otherwise.

var isUnivalTree = function (root) {
    return (!root.left || root.val == root.left.val && isUnivalTree(root.left)) && (!root.right || root.val == root.right.val && isUnivalTree(root.right));

};

//     Example 1:


// Input: root = [1, 1, 1, 1, 1, null, 1]
// Output: true
// Example 2:


// Input: root = [2, 2, 2, 5, 2]
// Output: false