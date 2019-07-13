/**
 * @param {string[]} strs
 * @return {string}
 * @description Inital approach
 */
var longestCommonPrefix = function (strs) {
  let res = null;
  checkStr = strs[0];

  while (checkStr && !res) {
    if (strs.every(i => i.indexOf(checkStr) === 0)) {
      res = checkStr;
    }

    checkStr = checkStr.slice(0, -1)
  }

  return res ? res : '';
};

/**
 * @param {string[]} strs
 * @return {string}
 * @description Horizontal scanning approach
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }

  return strs.reduce((a, b) => {
    if (b.indexOf(a) === 0) {
      return a;
    } else {
      for (const key in a) {
        if (a[key] !== b[key]) {
          a = a.slice(0, key);
          break;
        }
      }

      return a;
    }
  });
};
