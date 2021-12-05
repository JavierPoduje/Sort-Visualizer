import { BarType } from '../context/types';
import { AnimationType } from './types';

const quickSort = (originalArr: BarType[]) => {
  const arrCopy = [...originalArr];
  const animations: AnimationType[] = [];
  helper(arrCopy, animations, 0, 1, arrCopy.length - 1);
  return animations;
};

const helper = (
  arr: BarType[],
  animations: AnimationType[],
  pivotIdx: number,
  leftBoundary: number,
  rightBoundary: number
) => {
  if (rightBoundary - pivotIdx < 1) return;

  const pivot = arr[pivotIdx];
  let left = leftBoundary;
  let right = rightBoundary;

  while (left <= right) {
    const swap =
      arr[left].height > pivot.height && pivot.height >= arr[right].height;
    if (swap) swapBarHeights(arr[left], arr[right]);
    animations.push({
      compared: [pivot, arr[left], arr[right]],
      swap,
      elementsToBeSwapped: [arr[left], arr[right]],
    });
    if (arr[left].height <= pivot.height) left++;
    if (arr[right].height > pivot.height) right--;
  }

  swapBarHeights(arr[pivotIdx], arr[right]);
  animations.push({
    compared: [arr[pivotIdx], arr[right]],
    swap: true,
    elementsToBeSwapped: [arr[pivotIdx], arr[right]],
  });

  // sort left subarray
  const leftPivotIdx = pivotIdx;
  const leftLeftBoundary = pivotIdx + 1;
  const leftRightBoundary = right - 1;
  helper(arr, animations, leftPivotIdx, leftLeftBoundary, leftRightBoundary);

  // sort right subarray
  const rightPivotIdx = left;
  const rightLeftBoundary = left + 1;
  const rightRightBoundary = rightBoundary;
  helper(arr, animations, rightPivotIdx, rightLeftBoundary, rightRightBoundary);
};

const swapBarHeights = (a: BarType, b: BarType) =>
  ([a.height, b.height] = [b.height, a.height]);

export default quickSort;
