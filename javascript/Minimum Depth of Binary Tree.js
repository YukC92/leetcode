// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

//     Note: A leaf is a node with no children.

var minDepth = function (root) {
    if (!root) return null;
    let left = root.left ? minDepth(root.left) : Infinity;
    let right = root.right ? minDepth(root.right) : Infinity;
    if (Math.min(left, right) !== Infinity) {
        return Math.min(left, right) + 1;
    } else {
        return 1;
    }
};

//         Example 1:


// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: 2
// Example 2:

// Input: root = [2, null, 3, null, 4, null, 5, null, 6]
// Output: 5
