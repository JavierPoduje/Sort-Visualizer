import { useContext } from 'react';

// context
import SortVisualizerContext from '../../context/context';

// components
import Bar from '../../components/Bar/Bar';

// styles
import './canvas.scss';

const Canvas: React.FC = () => {
  const { bars } = useContext(SortVisualizerContext);

  return (
    <section className="canvas">
      <section className="bars">
        {bars &&
          bars.map((barHeight: number, idx) => (
            <Bar key={idx} height={barHeight} />
          ))}
      </section>
    </section>
  );
};

export default Canvas;
