import { useContext } from 'react';

// context
import SortVisualizerContext from '../../context/context';

// styles
import './canvas.scss';

const Canvas: React.FC = () => {
  const { bars } = useContext(SortVisualizerContext);

  return (
    <section className="canvas">
      <section className="bars">
        {bars &&
          bars.map((barHeight, idx) => (
            <figure
              key={idx}
              className="bar"
              style={{ height: barHeight * 7 }}
            ></figure>
          ))}
      </section>
    </section>
  );
};

export default Canvas;
