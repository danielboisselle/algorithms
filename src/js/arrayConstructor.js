Array.prototype.reduce = function (callback, accumulator) {
  let start = 0;

  if (accumulator === undefined) {
    start = 1;
  }

  for (let i = start; i < this.length; i += 1) {
    accumulator = callback(this[i], i, this)
  }

  return accumulator;
}