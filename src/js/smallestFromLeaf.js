/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = (root, parent = '') => {
  if (root === null) return parent;
  const char = String.fromCharCode(root.val + 97);
  if (root.right === null) return smallestFromLeaf(root.left, char + parent);
  if (root.left === null) return smallestFromLeaf(root.right, char + parent);

  const leftSmallest = smallestFromLeaf(root.left, char + parent);
  const rightSmallest = smallestFromLeaf(root.right, char + parent);
  return leftSmallest < rightSmallest ? leftSmallest : rightSmallest;
};