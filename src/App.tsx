import './styles.css';

import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>Hola Sort Visualizer - {process.env.name}</h1>
      <ClickCounter />
    </>
  );
};
