import { Reducer } from 'react';

import actions from './actions';
import {
  AlgorithmType,
  BarType,
  IPayload,
  ISortVisualizerState,
  SetBarByIdxInputType,
} from './types';

// TODO:
// este error ocurre porque el `value` del IPayload puede ser de tipo `number[] | algorithmType`,
// pero los métodos no pueden recibir los dos tipos, sino solo uno de ellos.
// Investigar cómo resolver este tipado.
const reducer: Reducer<ISortVisualizerState, IPayload> = (state, payload) => {
  switch (payload.type) {
    case actions.SET_BARS_HEIGHT:
      return { ...state, barsHeight: payload.value as number[] };
    case actions.SET_BARS:
      return { ...state, bars: payload.value as BarType[] };
    case actions.SET_BAR_BY_IDX:
      const bars = state.bars;
      const { bar, idx } = payload.value as SetBarByIdxInputType;
      const newBars = [...bars];
      newBars[idx] = bar;
      return { ...state, bars: newBars };
    case actions.SET_ALGORITHM:
      return { ...state, algorithm: payload.value as AlgorithmType };
    case actions.SET_SPEED:
      return { ...state, speed: payload.value as number };
    case actions.RUN_ALGORITHM:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
