export type AlgorithmType = 'MERGE_SORT' | 'QUICK_SORT' | 'BUBBLE_SORT';

export type BarType = {
  height: number;
  ref?: React.RefObject<HTMLElement>;
};

export type SetBarByIdxInputType = {
  bar: BarType;
  idx: number;
};

export interface ISortVisualizerState {
  barsHeight: number[];
  setBarsHeight: (bars: number[]) => void;
  bars: BarType[];
  setBars: (bars: BarType[]) => void;
  setBarByIdx: (payload: SetBarByIdxInputType) => void;
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  runAlgorithm: () => void;
}

export interface IPayload {
  type: string;
  value: BarType[] | number[] | AlgorithmType | number | SetBarByIdxInputType;
}
