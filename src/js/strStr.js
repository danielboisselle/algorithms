/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length + needle.length === 0 || needle === '') {
    return 0;
  }

  let matching = false;
  let checkIndex = 0;
  let indexStart = 0;

  for (let i = 0, len = haystack.length; i < len && needle[checkIndex]; i += 1) {
    const current = haystack[i];

    if (current === needle[checkIndex]) {
      if (!matching) {
        indexStart = i;
        matching = true;
      }
      checkIndex += 1;
    } else {
      if (matching) {
        i = indexStart;
      }

      matching = false;
      checkIndex = 0;
    }
  }

  return (matching && checkIndex === needle.length) ? indexStart : -1;
};
