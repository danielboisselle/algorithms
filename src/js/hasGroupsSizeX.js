/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const map = new Map();
  let count = Number.MAX_SAFE_INTEGER;
  for (const d of deck) {
      if (!map.has(d)) {
          map.set(d, 0);
      }
      map.set(d, map.get(d) + 1);
  }
  
  const entries = [...map.entries()];
  let r = 0;
  for (const e of entries) {
     r = gcd(r, e[1]); 
  }
  return r > 1;
};

function gcd (a, b) {
  if (b === 0) {
      return a;
  }
  return gcd(b, a % b);
};