export type AlgorithmType = 'MERGE_SORT' | 'QUICK_SORT' | 'BUBBLE_SORT';

export type AnimationType = {
  compared: BarType[];
  swap: boolean;
  elementsToBeSwapped: [BarType, BarType];
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
  animation: AnimationType[];
  bars: BarType[];
  barsHeight: number[];
  buildAnimation: (payload: BuildAnimationInputType) => void;
  cleanAnimation: () => void;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  setBarByIdx: (payload: SetBarByIdxInputType) => void;
  setBars: (bars: BarType[]) => void;
  setBarsHeight: (bars: number[]) => void;
  setSpeed: (speed: number) => void;
  speed: number;
}

export interface IPayload {
  type: string;
  value?:
    | AlgorithmType
    | BarType[]
    | BuildAnimationInputType
    | SetBarByIdxInputType
    | number
    | number[];
}
