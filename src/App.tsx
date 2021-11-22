// Modules
import Navbar from './modules/Navbar/Navbar';
import Canvas from './modules/Canvas/Canvas';
import Provider from './context/provider';

// Styles
import './assets/styles/index.scss';

export const App = () => {
  return (
    <Provider>
      <Navbar />
      <Canvas />
    </Provider>
  );
};
