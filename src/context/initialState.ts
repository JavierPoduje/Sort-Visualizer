import { ISortVisualizerState, BarType, AnimationType } from './types';

const initialState: ISortVisualizerState = {
  animation: [] as AnimationType[],
  algorithm: 'BUBBLE_SORT',
  bars: [] as BarType[],
  barsHeight: [] as number[],
  buildAnimation: () => undefined,
  cleanAnimation: () => undefined,
  setAlgorithm: () => undefined,
  setBarByIdx: () => undefined,
  setBars: () => undefined,
  setBarsHeight: () => undefined,
  setSpeed: () => undefined,
  speed: 2,
};

export default initialState;
