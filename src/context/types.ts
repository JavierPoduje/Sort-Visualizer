export type AlgorithmType = 'MERGE_SORT' | 'QUICK_SORT' | 'BUBBLE_SORT';

export type AnimationType = {
  compared: BarType[];
  swap: boolean;
  elementsToBeSwapped: [BarType, BarType];
};

export type MergeSortAnimationType = {
  compared: BarType[];
  haveToChangeHeight: boolean;
  heightChange: { bar: BarType; newHeight: number };
};

export type BarType = {
  height: number;
  ref: React.RefObject<HTMLInputElement>;
};

export type SetBarByIdxInputType = {
  bar: BarType;
  idx: number;
};

export type BuildAnimationInputType = {
  bars: BarType[];
  algorithm: AlgorithmType;
};

export interface ISortVisualizerState {
  algorithm: AlgorithmType;
  animation: (AnimationType | MergeSortAnimationType)[];
  animationFinished: boolean;
  bars: BarType[];
  barsHeight: number[];
  buildAnimation: (payloadValue: BuildAnimationInputType) => void;
  cleanAnimation: () => void;
  navbarButtonsDisabled: boolean;
  runAlgorithm: boolean;
  setAlgorithm: (payloadValue: AlgorithmType) => void;
  setAnimationFinished: (payloadValue: boolean) => void;
  setBarByIdx: (payloadValue: SetBarByIdxInputType) => void;
  setBars: (payloadValue: BarType[]) => void;
  setBarsHeight: (payloadValue: number[]) => void;
  setNavbarButtonsDisabled: (payloadValue: boolean) => void;
  setRunAlgorithm: (payloadValue: boolean) => void;
  setSpeed: (payloadValue: number) => void;
  speed: number;
}

export interface IPayload {
  type: string;
  value?:
    | AlgorithmType
    | BarType[]
    | BuildAnimationInputType
    | SetBarByIdxInputType
    | boolean
    | number
    | number[];
}
