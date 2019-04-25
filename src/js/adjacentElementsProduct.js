function adjacentElementsProduct(inputArray) {
  return Math.max(...inputArray.slice(1).map((v,i) => v*inputArray[i]));
}

function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  
  for (let i = 1, len = inputArray.length; i < len; i += 1) {
      const product = inputArray[i] * inputArray[i+1];
      if (product > max) {
        max = product;
      }
  }
  
  return max;
}

function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  let inputArrayLen = inputArray.length ;
  
  if (inputArrayLen === 2) {
      return max;
  }
  
  let first = 1;
  let second= 2;
  
  while (second < inputArrayLen) {
    const product = inputArray[first] * inputArray[second];

    if (product > max) {
      max = product;
    }

    first += 1;
    second += 1;
  }
  
  return max;
}