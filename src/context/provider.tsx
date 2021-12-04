import { useReducer, FC } from 'react';

import SortVisualizerContext from './context';
import reducer from './reducer';
import actions from './actions';
import initialState from './initialState';

// types
import {
  AlgorithmType,
  BarType,
  SetBarByIdxInputType,
  BuildAnimationInputType,
} from './types';

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    algorithm: state.algorithm,
    animation: state.animation,
    bars: state.bars,
    barsHeight: state.barsHeight,
    buildAnimation: (value: BuildAnimationInputType) =>
      dispatch({ type: actions.BUILD_ANIMATION, value }),
    cleanAnimation: () => dispatch({ type: actions.CLEAN_ANIMATION, value }),
    setAlgorithm: (value: AlgorithmType) =>
      dispatch({ type: actions.SET_ALGORITHM, value }),
    setBarByIdx: (value: SetBarByIdxInputType) =>
      dispatch({ type: actions.SET_BAR_BY_IDX, value }),
    setBars: (value: BarType[]) => dispatch({ type: actions.SET_BARS, value }),
    setBarsHeight: (value: number[]) =>
      dispatch({ type: actions.SET_BARS_HEIGHT, value }),
    setSpeed: (value: number) => dispatch({ type: actions.SET_SPEED, value }),
    speed: state.speed,
  };

  return (
    <SortVisualizerContext.Provider value={value}>
      {children}
    </SortVisualizerContext.Provider>
  );
};

export default Provider;
