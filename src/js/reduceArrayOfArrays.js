function accumulate(arrayOfArrays, callback) {
  return arrayOfArrays.reduce((acc, current) => {
    return current.map((v, i) => callback(v, acc[i]));
  });
}
