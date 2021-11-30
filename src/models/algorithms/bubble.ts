import { AnimationType } from '../types';

const bubbleSort = (originalArr: number[]) => {
  const arr = [...originalArr];
  const animations: AnimationType[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      const left = arr[j];
      const right = arr[j + 1];

      console.log('left: ', left);
      console.log('right: ', right);
    }
  }

  return animations;
};

export default bubbleSort;
