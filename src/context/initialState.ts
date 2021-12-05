import { ISortVisualizerState, BarType, AnimationType } from './types';

const initialState: ISortVisualizerState = {
  algorithm: 'BUBBLE_SORT',
  animation: [] as AnimationType[],
  bars: [] as BarType[],
  barsHeight: [] as number[],
  buildAnimation: () => undefined,
  cleanAnimation: () => undefined,
  runAlgorithm: false,
  setAlgorithm: () => undefined,
  setBarByIdx: () => undefined,
  setBars: () => undefined,
  setBarsHeight: () => undefined,
  setRunAlgorithm: () => undefined,
  setSpeed: () => undefined,
  speed: 2,
};

export default initialState;
