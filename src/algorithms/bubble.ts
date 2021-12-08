import { BarType, AnimationType } from '../context/types';

const bubbleSort = (originalArr: BarType[]) => {
  const arr = [...originalArr];
  const animations: AnimationType[] = [];

  for (let i = 0; i < arr.length; i++) {
    let somethingWasSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const left = arr[j];
      const right = arr[j + 1];
      const swap = left.height > right.height;

      animations.push({
        compared: [left, right],
        swap,
        elementsToBeSwapped: [left, right],
      });

      if (swap) {
        [left.height, right.height] = [right.height, left.height];
        somethingWasSwapped = true;
      }
    }

    if (!somethingWasSwapped) break;
  }

  return animations;
};

export default bubbleSort;
