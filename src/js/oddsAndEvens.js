/**
 * 
 * @param {number[]} arr 
 * @description ensures array is sorted in ASC, assumes when comapring to values where arr[i - 1] < arr[i]
 *              the preceding items are sorted.
 */
function sort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let i = arr.length - 1;

  while (arr[i] < arr[i - 1]) {

    let pointer = i;

    while (arr[pointer - 1] > arr[pointer]) {
      let prev = arr[pointer - 1];
      arr[pointer - 1] = arr[pointer];
      arr[pointer] = prev;

      pointer--;
    }

    i--;
  }

  return arr;
}

/**
 * 
 * @param {number[]} arr 
 * 
 * @description returns an array of odd numbers firstly by in order by seen,
 *              even numbers proceding the evens but in ASC order.
 */
function oddsAndEvens(arr) {
  const evens = [];
  const odds = [];

  for (const i in arr) {
    const current = arr[i];

    current % 2 === 0 ?
      evens.push(current) : odds.push(current) && sort(odds);
  }

  return [...odds, ...evens]
}

