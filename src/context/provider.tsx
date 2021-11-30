import { useReducer, FC } from 'react';

import SortVisualizerContext from './context';
import reducer from './reducer';
import actions from './actions';
import initialState from './initialState';

// types
import { AlgorithmType, BarType, SetBarByIdxInputType } from './types';

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    barsHeight: state.barsHeight,
    setBarsHeight: (value: number[]) =>
      dispatch({ type: actions.SET_BARS_HEIGHT, value }),
    bars: state.bars,
    setBars: (value: BarType[]) => dispatch({ type: actions.SET_BARS, value }),
    setBarByIdx: (value: SetBarByIdxInputType) =>
      dispatch({ type: actions.SET_BAR_BY_IDX, value }),
    algorithm: state.algorithm,
    setAlgorithm: (value: AlgorithmType) =>
      dispatch({ type: actions.SET_ALGORITHM, value }),
    speed: state.speed,
    setSpeed: (value: number) => dispatch({ type: actions.SET_SPEED, value }),
    runAlgorithm: () => dispatch({ type: actions.RUN_ALGORITHM, value: -1 }),
  };

  return (
    <SortVisualizerContext.Provider value={value}>
      {children}
    </SortVisualizerContext.Provider>
  );
};

export default Provider;
