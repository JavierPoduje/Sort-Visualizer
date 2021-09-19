import { Reducer } from 'react';

import actions from './actions';
import { ISortVisualizerState, IPayload } from './types';

const reducer: Reducer<ISortVisualizerState, IPayload> = (state, payload) => {
  switch (payload.type) {
    case actions.SET_BARS:
      return { ...state, bars: payload.value };
    default:
      return state;
  }
};

export default reducer;
