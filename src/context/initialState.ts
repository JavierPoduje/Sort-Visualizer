import { ISortVisualizerState } from './types';

const initialState: ISortVisualizerState = {
  bars: [] as number[],
  setBars: () => undefined,
  algorithm: 'BUBBLE_SORT',
  setAlgorithm: () => undefined,
};

export default initialState;
