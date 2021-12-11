import { BarType, MergeSortAnimationType } from '../context/types';

const mergeSort = (originalArr: BarType[]) => {
  const arrCopy = [...originalArr];
  const animations: MergeSortAnimationType[] = [];
  helper(arrCopy, animations, [...arrCopy], 0, arrCopy.length);
  return animations;
};

const helper = (
  arr: BarType[],
  animations: MergeSortAnimationType[],
  original: BarType[],
  leftBoundary: number,
  rightBoundary: number
): BarType[] => {
  if (arr.length <= 1) return arr;

  const midIdx = Math.floor(arr.length / 2);
  const sortedLeftChunk = helper(
    arr.slice(0, midIdx),
    animations,
    original,
    leftBoundary,
    midIdx + leftBoundary
  );
  const sortedRightChunk = helper(
    arr.slice(midIdx, rightBoundary),
    animations,
    original,
    midIdx + leftBoundary,
    rightBoundary
  );
  let idx = 0;

  const sorted: BarType[] = [];
  while (sortedLeftChunk.length && sortedRightChunk.length) {
    const compared = [
      original[idx + leftBoundary],
      sortedLeftChunk[0],
      sortedRightChunk[0],
    ];

    const smallerBar =
      sortedLeftChunk[0].height < sortedRightChunk[0].height
        ? sortedLeftChunk.shift()!
        : sortedRightChunk.shift()!;

    sorted.push(smallerBar);

    animations.push({
      compared,
      heightChange: {
        bar: original[idx++ + leftBoundary],
        newHeight: smallerBar.height,
      },
    });
  }

  while (sortedLeftChunk.length) {
    const compared = [original[idx + leftBoundary], sortedLeftChunk[0]];
    sorted.push(sortedLeftChunk.shift()!);

    animations.push({
      compared,
      heightChange: {
        bar: original[idx++ + leftBoundary],
        newHeight: compared[1].height,
      },
    });
  }

  while (sortedRightChunk.length) {
    const compared = [original[idx + leftBoundary], sortedRightChunk[0]];
    sorted.push(sortedRightChunk.shift()!);

    animations.push({
      compared,
      heightChange: {
        bar: original[idx++ + leftBoundary],
        newHeight: compared[1].height,
      },
    });
  }

  // replace bars on the original arr
  original = [
    ...original.slice(0, leftBoundary),
    ...sorted,
    ...original.slice(rightBoundary, original.length),
  ];

  return sorted;
};

export default mergeSort;
