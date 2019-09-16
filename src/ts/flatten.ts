const flatten = (arr: any[]): number[] => {
  return arr.reduce((flattened: number[], iterator) => {
    if (Array.isArray(iterator)) {
      flattened.push(...flatten(iterator));
    } else if (typeof iterator === 'number') {
      flattened.push(iterator);
    }

    return flattened;
  }, []);
};
