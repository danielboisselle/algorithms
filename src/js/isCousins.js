/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (_root, x, y) {
  let found = {};

  let find = (root, parent, depth = 0) => {
    if (found.x && found.y) return;

    if (root.left) {
      find(root.left, root.val, depth + 1);
    }

    if (root.right) {
      find(root.right, root.val, depth + 1);
    }

    if (root.val === x) {
      found.x = depth;
      found.xParent = parent;
    }

    if (root.val === y) {
      found.y = depth;
      found.yParent = parent;
    }
  }

  find(_root)

  return found.x === found.y && found.xParent !== found.yParent;
};