function almostIncreasingSequence(sequence) {
  let remove = -1;
  let result = false;

  while (remove < sequence.length && !result) {
    const tempCopy = [...sequence];

    if (remove > -1) {
      tempCopy.splice(remove, 1);
    }

    result = tempCopy.reduce((a, v, i) => {
      if (i - 1 === -1) return true;

      return a && v > tempCopy[i - 1];
    }, true);

    remove += 1;
  }

  return result;
}
