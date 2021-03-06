/**
 * @param {number} num
 * @return {boolean}
 */
function isUgly (num) {
  if(num < -1) {
    return false; 
  }
  
  while(parseInt(num/2) === num/2) { 
      num/=2;
  } 
  while(parseInt(num/3) === num/3) { 
      num/=3;
  }
  while(parseInt(num/5) === num/5) {
      num/=5;
  }
  
  return num===1;
};