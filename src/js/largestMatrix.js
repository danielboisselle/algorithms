/**
 * 
 * @param {number[][]} arr 
 */
function largestMatrix(arr) {
  let localMax = 0;

  arr.forEach((outterArr, outterIndex) => {
    outterArr.forEach((current, innerIndex) => {
      if (current === 0) {
        return
      }
      else {
        const max = getMatrix(outterIndex, innerIndex)
        if (max !== 1 && max > localMax) localMax = max;
      }
    })
  })

  function getMatrix(xPointer, yPointer, x = xPointer, y = yPointer) {
    try {
        let horizontal = arr[x].slice(xPointer, x + 1);
        let vertical = arr.map(innerArr => innerArr[yPointer]).slice(xPointer, y + 1);

        if (horizontal.every(i => i === 1) && vertical.every(i => i === 1)) {
            return 1 + getMatrix(xPointer, yPointer, x + 1, y + 1);
        } else {
            return 0;
        }
    } catch(e) {
        return 0
    }
  }

  return localMax
}