const flatten = (arr: any[]): number[] => {
  const flattened: number[] = [];

  for (const iterator of arr) {
    if (Array.isArray(iterator)) {
      flattened.push(...flatten(iterator));
    } else if (typeof iterator === 'number') {
      flattened.push(iterator);
    }
  }

  return flattened;
};
