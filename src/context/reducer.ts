import { Reducer } from 'react';

import actions from './actions';
import { ISortVisualizerState, IPayload } from './types';

// TODO:
// este error ocurre porque el `value` del IPayload puede ser de tipo `number[] | algorithmType`,
// pero los métodos no pueden recibir los dos tipos, sino solo uno de ellos.
// Investigar cómo resolver este tipado.
const reducer: Reducer<ISortVisualizerState, IPayload> = (state, payload) => {
  switch (payload.type) {
    case actions.SET_BARS:
      return { ...state, bars: payload.value };
    case actions.SET_ALGORITHM:
      return { ...state, algorithm: payload.value };
    default:
      return state;
  }
};

export default reducer;
