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
    animationFinished: state.animationFinished,
    animation: state.animation,
    bars: state.bars,
    barsHeight: state.barsHeight,
    runAlgorithm: state.runAlgorithm,
    navbarButtonsDisabled: state.navbarButtonsDisabled,
    buildAnimation: (value: BuildAnimationInputType) =>
      dispatch({ type: actions.BUILD_ANIMATION, value }),
    setAnimationFinished: (value: boolean) =>
      dispatch({ type: actions.SET_ANIMATION_FINISHED, value }),
    cleanAnimation: () => dispatch({ type: actions.CLEAN_ANIMATION, value }),
    setRunAlgorithm: (value: boolean) =>
      dispatch({ type: actions.SET_RUN_ALGORITHM, value }),
    setAlgorithm: (value: AlgorithmType) =>
      dispatch({ type: actions.SET_ALGORITHM, value }),
    setBarByIdx: (value: SetBarByIdxInputType) =>
      dispatch({ type: actions.SET_BAR_BY_IDX, value }),
    setBars: (value: BarType[]) => dispatch({ type: actions.SET_BARS, value }),
    setBarsHeight: (value: number[]) =>
      dispatch({ type: actions.SET_BARS_HEIGHT, value }),
    setNavbarButtonsDisabled: (value: boolean) =>
      dispatch({ type: actions.SET_NAVBAR_BUTTONS_DISABLED, value }),
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
