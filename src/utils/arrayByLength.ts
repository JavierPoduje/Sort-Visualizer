/**
 * Given a number `n`, build an array of numbers with `n` elements.
 *
 * @param {number} length Number of elements of the array.
 * @return {number[]} Array with `length` number elements.
 */
const arrayByLength = (length: number): number[] => {
  return new Array(length)
    .fill(undefined)
    .map(() => Math.floor(Math.random() * 100));
};

export default arrayByLength;
