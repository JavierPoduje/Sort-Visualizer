import { useReducer, FC } from 'react';

import SortVisualizerContext from './context';
import reducer from './reducer';
import actions from './actions';
import initialState from './initialState';

// types
import { algorithmType } from './types';

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    bars: state.bars,
    setBars: (value: number[]) => dispatch({ type: actions.SET_BARS, value }),
    algorithm: state.algorithm,
    setAlgorithm: (value: algorithmType) =>
      dispatch({ type: actions.SET_ALGORITHM, value }),
    speed: state.speed,
    setSpeed: (value: number) => dispatch({ type: actions.SET_SPEED, value }),
  };

  return (
    <SortVisualizerContext.Provider value={value}>
      {children}
    </SortVisualizerContext.Provider>
  );
};

export default Provider;
