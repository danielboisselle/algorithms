/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonSubStr = function(strs) {
  if (!strs.length) return '';
  
  let checkStr = strs[0];
  let res = null;
  
  while (checkStr.length && !res) {
    const check = strs.filter(i => i.indexOf(checkStr) !== -1).length

      if (check === strs.length) {
          res = checkStr
      } else {
          checkStr = checkStr.slice(0, -1)
      }
  }
  
  return res ? res : '';
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
