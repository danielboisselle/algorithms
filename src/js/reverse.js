/**
 * @param {number} x
 * @return {number}
 */

const MAX_INT = (2 ** 31)

var reverse = function (x) {
  function reverseToString(number) {
    return Array.prototype.reduce.call(`${number}`, (a, b) => {
      return b + a;
    });
  }

  const res = (x < 0) ?
    Number(reverseToString(x * -1)) * -1 :
    Number(reverseToString(x));

  if (res >= MAX_INT || res <= (MAX_INT * (-1))) return 0;

  return res;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  function reverseToString(number) {
    const stringedNumber = `${number}`;
    let reveredString = '';

    for (const index in stringedNumber) {
      const char = stringedNumber[index];
      reveredString = char + reveredString;
    }

    return reveredString;
  }

  let res;

  if (x < 0) {
    const reversed = reverseToString(x * -1);
    res = Number(reversed) * -1;
  } else {
    res = Number(reverseToString(x));
  }

  if (res >= (2 ** 31) || res <= ((2 ** 31) * (-1))) return 0;

  return res;
};
