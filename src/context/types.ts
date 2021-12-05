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
  buildAnimation: (payloadValue: BuildAnimationInputType) => void;
  cleanAnimation: () => void;
  runAlgorithm: boolean;
  setAlgorithm: (payloadValue: AlgorithmType) => void;
  setBarByIdx: (payloadValue: SetBarByIdxInputType) => void;
  setBars: (payloadValue: BarType[]) => void;
  setBarsHeight: (payloadValue: number[]) => void;
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
