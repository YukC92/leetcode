// Given the root of a Binary Search Tree(BST), return the minimum absolute difference between the values of any two different nodes in the tree.

var getMinimumDifference = function (root) {
    let prevNodeVal = Number.MAX_VALUE;
    let min = Number.MAX_VALUE;

    // traverse Inorder to compare elements sequentially to find min
    function helper(node) {
        if (node == null) {
            return;
        }

        helper(node.left);
        min = Math.min(min, Math.abs(node.val - prevNodeVal))
        prevNodeVal = node.val;
        helper(node.right);
    }

    helper(root);
    return min;
};

//     Example 1:


// Input: root = [4, 2, 6, 1, 3]
// Output: 1
// Example 2:


// Input: root = [1, 0, 48, null, null, 12, 49]
// Output: 1