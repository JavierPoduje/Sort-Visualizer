export interface ISortVisualizerState {
  bars: number[] | undefined;
  setBars?: (bars: number[]) => void;
}

export interface IPayload {
  type: string;
  value?: number[];
}
