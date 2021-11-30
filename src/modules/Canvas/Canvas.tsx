import { useContext, useEffect } from 'react';

// context
import SortVisualizerContext from '../../context/context';

// components
import Bar from '../../components/Bar/Bar';

// styles
import './canvas.scss';

const Canvas: React.FC = () => {
  const { barsHeight, setBars, setBarByIdx, bars } = useContext(
    SortVisualizerContext
  );

  useEffect(() => {
    if (!bars) setBars(new Array(barsHeight.length).fill(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barsHeight]);

  return (
    <section className="canvas">
      <section className="bars">
        {barsHeight &&
          barsHeight.map((barHeight, idx) => (
            <Bar
              key={idx}
              height={barHeight}
              idx={idx}
              setBarByIdxCallback={setBarByIdx}
            />
          ))}
      </section>
    </section>
  );
};

export default Canvas;
