// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public boolean isTreeSymmetric(TreeNode leftRoot, TreeNode rightRoot) {
        if (leftRoot == null && rightRoot == null)
            return true;
        if ((leftRoot == null && rightRoot != null) || (leftRoot != null && rightRoot == null))
            return false;
        if (leftRoot.val != rightRoot.val)
            return false;
        return isTreeSymmetric(leftRoot.left, rightRoot.right) && isTreeSymmetric(leftRoot.right, rightRoot.left);
    }

    public boolean isSymmetric(TreeNode root) {
        return isTreeSymmetric(root.left, root.right);
    }
}