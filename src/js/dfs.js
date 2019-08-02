/**
 * 
 * @param {TreeNode} root 
 * @return {string[array]}
 * 
 * @description all inherited combinations
 */
const dfs = function (root) {
  if (!root.left && !root.right) {
    return [root.val];
  }

  let l = r = [];

  if (root.left) {
    l = dfs(root.left)
  }

  if (root.right) {
    r = dfs(root.right)
  }

  return l.concat(r).map(i => i += root.val)
}