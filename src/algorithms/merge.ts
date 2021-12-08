import { BarType, MergeSortAnimationType } from '../context/types';

const mergeSort = (originalArr: BarType[]) => {
  const arrCopy = [...originalArr];
  const animations: MergeSortAnimationType[] = [];
  helper(arrCopy, animations, [...arrCopy], 0);

  return animations;
};

/**
 * FIX: mention a idx in `heightChange` instead of a bar...
 *
 */
const helper = (
  arr: BarType[],
  animations: MergeSortAnimationType[],
  original: BarType[],
  offset: number
): BarType[] => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = helper(arr.slice(0, mid), animations, original, offset);
  const right = helper(arr.slice(mid), animations, original, mid);
  let idx = 0;

  const sorted: BarType[] = [];
  while (left.length && right.length) {
    const compared = [original[idx + offset], left[0], right[0]];
    const min =
      left[0].height < right[0].height ? left.shift()! : right.shift()!;

    animations.push({
      compared,
      haveToChangeHeight: original[idx + offset].height !== min.height,
      heightChange: { bar: original[idx + offset], newHeight: min.height },
    });

    sorted.push(min!);
    idx++;
  }

  while (left.length) {
    const compared = [original[idx + offset], left[0]];
    sorted.push(left.shift()!);

    animations.push({
      compared,
      haveToChangeHeight: original[idx + offset].height !== compared[0].height,
      heightChange: {
        bar: original[idx + offset],
        newHeight: compared[0].height,
      },
    });
    idx++;
  }

  while (right.length) {
    const compared = [original[idx + offset], right[0]];
    sorted.push(right.shift()!);

    animations.push({
      compared,
      haveToChangeHeight: original[idx + offset].height !== compared[0].height,
      heightChange: {
        bar: original[idx + offset],
        newHeight: compared[0].height,
      },
    });
    idx++;
  }

  return sorted;
};

export default mergeSort;
