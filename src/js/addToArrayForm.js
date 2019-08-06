/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  K = [...String(K)].map(i => Number(i));
  
  let res = [];
  
  while (K.length || A.length) {
      let k = K.splice(-1);
      let a = A.splice(-1);
   
      k = k[0] ? k[0] : 0;
      a = a[0] ? a[0] : 0;
      
      let sum = k + a;
      
      if (sum > 9) {
          const remainder = Math.floor(sum / 10)
          let temp = K.pop();
          temp ? K.push(temp + remainder) : K.push(remainder);
          
          res.splice(0, 0, sum % 10);
      } else {
          res.splice(0, 0, sum);
      }
  }
  
  return res;
};