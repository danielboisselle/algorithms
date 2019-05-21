function isInfiniteProcess(a, b) {
  if (a > b) return true;

  return a === b ? false : isInfiniteProcess(a + 1, b - 1);
}