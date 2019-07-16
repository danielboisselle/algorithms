/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @returns {String} YES | NO
 */
function findNumber(arr, n) {
  let index = 0;

  while (arr[index] && arr[index] !== n) {
    index += 1;
  }

  return index === arr.length ? 'NO' : 'YES';
}

function findNumberRecursive(arr, n) {
  if (!arr.length) {
    return 'NO';
  } else if (arr.pop() === n) {
    return 'YES';
  }

  return findNumber(arr, n);
}

function findNumberSimple() {
  return arr.includes(k) ?
    'YES' :
    'NO';
}