/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const tempArr = new Array(S.length);
  let localArr = [];

  for (const i in S) {
    const char = S[i];

    if (isAlphabetic(char)) {
      localArr.push(char);
    } else {
      tempArr[i] = char;
    }
  }

  let endPointer = 0;

  while (endPointer < S.length) {
    if (!tempArr[endPointer]) {
      tempArr[endPointer] = localArr.pop();
    }
    endPointer += 1;
  }

  return tempArr.join('');
};

/**
 * 
 * @param {string} char 
 * @return {boolean}
 */
function isAlphabetic(char) {
  const charCode = char.charCodeAt(0);

  return charCode > 64 && charCode < 91 
    || charCode > 96 && charCode < 123
};