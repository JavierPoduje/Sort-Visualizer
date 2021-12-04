import { BarType, AlgorithmType } from '../context/types';

import { AnimationType } from './types';
import bubbleSort from './bubble';

const buildAnimation = (
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
      console.log('not supported just yet...');
      return [];
    default:
      console.log('Algorithm not supported...');
      return [];
  }
};

export default buildAnimation;
