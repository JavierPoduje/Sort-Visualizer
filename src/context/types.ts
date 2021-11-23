export type algorithmType =
  | 'MERGE_SORT'
  | 'QUICK_SORT'
  | 'BUBBLE_SORT'
  | 'INSERTION_SORT'
  | 'HEAP_SORT';

export interface ISortVisualizerState {
  bars: number[] | undefined;
  setBars?: (bars: number[]) => void;
  algorithm: algorithmType | undefined;
  setAlgorithm?: (algorithm: algorithmType) => void;
}

export interface IPayload {
  type: string;
  value?: number[] | algorithmType;
}
