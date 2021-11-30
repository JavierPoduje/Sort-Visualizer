import { ISortVisualizerState, BarType } from './types';

const initialState: ISortVisualizerState = {
  barsHeight: [] as number[],
  setBarsHeight: () => undefined,

  algorithm: 'BUBBLE_SORT',
  setAlgorithm: () => undefined,

  speed: 2,
  setSpeed: () => undefined,

  bars: [] as BarType[],
  setBars: () => undefined,
  setBarByIdx: () => undefined,

  runAlgorithm: () => undefined,
};

export default initialState;
