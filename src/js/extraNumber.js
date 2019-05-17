function extraNumber(a, b, c) {
  return a === b ? c : extraNumber(b, c, a);
}
