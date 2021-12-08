import {
  BarType,
  AlgorithmType,
  AnimationType,
  MergeSortAnimationType,
} from '../context/types';

// sort algorithms
import bubbleSort from './bubble';
import quickSort from './quick';
import mergeSort from './merge';

const buildAnimations = (
  bars: BarType[],
  algorithm: AlgorithmType
): (AnimationType | MergeSortAnimationType)[] => {
  switch (algorithm) {
    case 'BUBBLE_SORT':
      return bubbleSort(bars);
    case 'MERGE_SORT':
      const animations = mergeSort(bars);
      return animations;
    case 'QUICK_SORT':
      return quickSort(bars);
    default:
      console.log('Algorithm not supported...');
      return [];
  }
};

export default buildAnimations;
