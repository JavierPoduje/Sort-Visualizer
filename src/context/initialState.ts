import {
  ISortVisualizerState,
  BarType,
  AnimationType,
  MergeSortAnimationType,
} from './types';

const initialState: ISortVisualizerState = {
  algorithm: 'BUBBLE_SORT',
  animation: [] as (AnimationType | MergeSortAnimationType)[],
  animationFinished: false,
  bars: [] as BarType[],
  barsHeight: [] as number[],
  buildAnimation: () => undefined,
  cleanAnimation: () => undefined,
  navbarButtonsDisabled: false,
  runAlgorithm: false,
  setAlgorithm: () => undefined,
  setAnimationFinished: () => undefined,
  setBarByIdx: () => undefined,
  setBars: () => undefined,
  setBarsHeight: () => undefined,
  setNavbarButtonsDisabled: () => undefined,
  setRunAlgorithm: () => undefined,
  setSpeed: () => undefined,
  speed: 0.9,
};

export default initialState;
