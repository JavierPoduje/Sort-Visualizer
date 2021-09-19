import { createContext } from 'react';
import initialState from './initialState';

// types
import { ISortVisualizerState } from './types';

const SortVisualizerContext = createContext<ISortVisualizerState>(initialState);

export default SortVisualizerContext;
