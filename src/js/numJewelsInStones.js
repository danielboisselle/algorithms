/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
<<<<<<< HEAD
var numJewelsInStones = function (J, S) {
=======
var numJewelsInStones = function(J, S) {
>>>>>>> bce6854c9b9a1401bc644d3f21b51327baea5e27
  const jewels = new Set(J);
  let total = 0;

  for (const index in S) {
<<<<<<< HEAD
    const character = S[index];

    if (jewels.has(character)) {
      total = total + 1;
    }
  }

=======
      const character = S[index];
      
      if (jewels.has(character)) {
          total = total + 1;
      }
  }
  
>>>>>>> bce6854c9b9a1401bc644d3f21b51327baea5e27
  return total;
};