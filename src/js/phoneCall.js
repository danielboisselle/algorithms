function phoneCall(min1, min2_10, min11, s) {
  const min1Used = s - min1;

  if (min1Used === 0) {
    return 1;
  }

  const min2to10Used = min2_10 * 9;
  const minutestLeft = min1Used - min2to10Used;

  if (minutestLeft < 0) {
    return 1 + (Math.floor(min1Used / min2_10));
  }

  const remainderMinutes = Math.floor(minutestLeft / min11);

  return (1 + 9 + remainderMinutes);
}
