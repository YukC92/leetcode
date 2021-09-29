// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

var findTarget = function (root, k) {
    let sortedArr = [], left, right;
    inOrderTraversal(root);
    function inOrderTraversal(node) {
        if (node === null) {
            return null;
        }
        inOrderTraversal(node.left);
        sortedArr.push(node.val);
        inOrderTraversal(node.right);
    }
    left = 0;
    right = sortedArr.length - 1;
    while (left < right) {
        if (sortedArr[left] + sortedArr[right] === k) {
            return true;
        } else if (sortedArr[left] + sortedArr[right] < k) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};

//     Example 1:


// Input: root = [5, 3, 6, 2, 4, null, 7], k = 9
// Output: true
// Example 2:


// Input: root = [5, 3, 6, 2, 4, null, 7], k = 28
// Output: false
// Example 3:

// Input: root = [2, 1, 3], k = 4
// Output: true
// Example 4:

// Input: root = [2, 1, 3], k = 1
// Output: false
// Example 5:

// Input: root = [2, 1, 3], k = 3
// Output: true