/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jewels = new Set(J);
  let total = 0;

  for (const index in S) {
    const character = S[index];

    if (jewels.has(character)) {
      total = total + 1;
    }
  }

  return total;
};