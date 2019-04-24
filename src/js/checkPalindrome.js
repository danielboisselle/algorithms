function checkPalindrome(inputString) {
    
  const inputLen = inputString.length;
  
  if (inputLen <= 1) {
    return true;
  }
  
  if (inputString[0] !== inputString[inputLen - 1]) {
    return false;
  }
  
  return checkPalindrome(inputString.slice(1, -1));
}

function checkPalindrome(inputString) {
  let leftFlag = 0;
  let rightFlag = inputString.length - 1;
  let res = undefined;
  
  while(leftFlag < rightFlag && res === undefined) {
      
      let leftChar = inputString[leftFlag];
      let rightChar = inputString[rightFlag];
      
      if (leftChar !== rightChar) {
          res = false;
      }
          
      leftFlag += 1;
      rightFlag -= 1;
  }
  
  return (res === undefined ? true : res);
}

function checkPalindrome(inputString) {
  const strLen = inputString.length;
  
  if (strLen === 1) {
    return true;
  }

  const isEvenLength = ((strLen % 2) === 0);

  let left, right;

  if (isEvenLength) {
    let midpoint = strLen / 2;

    left = inputString.slice(0, midpoint);
    right = inputString.slice(midpoint);
  } else {
    let midpoint = Math.floor(strLen / 2);

    left = inputString.slice(0, midpoint + 1);
    right = inputString.slice(midpoint);
  }

  return left === right.split('').reverse().join('');
}