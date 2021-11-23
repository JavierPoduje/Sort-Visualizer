const buildRandomArray = (length: number): number[] => {
  return new Array(length)
    .fill(undefined)
    .map(() => Math.floor(Math.random() * 100));
};

export default buildRandomArray;
