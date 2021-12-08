import {
  ISortVisualizerState,
  BarType,
  AnimationType,
  MergeSortAnimationType,
} from './types';

const initialState: ISortVisualizerState = {
  algorithm: 'BUBBLE_SORT',
  animation: [] as (AnimationType | MergeSortAnimationType)[],
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
  speed: 0.9,
};

export default initialState;
