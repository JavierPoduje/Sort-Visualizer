import { BarType, AlgorithmType } from '../context/types';

import { AnimationType } from './types';

// sort algorithms
import bubbleSort from './bubble';
import quickSort from './quick';

const buildAnimations = (
  bars: BarType[],
  algorithm: AlgorithmType
): AnimationType[] => {
  switch (algorithm) {
    case 'BUBBLE_SORT':
      return bubbleSort(bars);
    case 'MERGE_SORT':
      console.log('not supported just yet...');
      return [];
    case 'QUICK_SORT':
      return quickSort(bars);
    default:
      console.log('Algorithm not supported...');
      return [];
  }
};

export default buildAnimations;
