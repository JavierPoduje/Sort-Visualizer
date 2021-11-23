export type algorithmType =
  | 'MERGE_SORT'
  | 'QUICK_SORT'
  | 'BUBBLE_SORT'
  | 'INSERTION_SORT'
  | 'HEAP_SORT';

export interface ISortVisualizerState {
  bars: number[];
  setBars: (bars: number[]) => void;
  algorithm: algorithmType;
  setAlgorithm: (algorithm: algorithmType) => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

export interface IPayload {
  type: string;
  value?: number[] | algorithmType | number;
}
