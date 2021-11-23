import { ISortVisualizerState } from './types';

const initialState: ISortVisualizerState = {
  bars: [] as number[],
  setBars: () => undefined,

  algorithm: 'BUBBLE_SORT',
  setAlgorithm: () => undefined,

  speed: 2,
  setSpeed: () => undefined,
};

export default initialState;
