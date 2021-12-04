import { BarType } from '../context/types';

export type AnimationType = {
  compared: BarType[];
  swap: boolean;
  elementsToBeSwapped: [BarType, BarType];
};
