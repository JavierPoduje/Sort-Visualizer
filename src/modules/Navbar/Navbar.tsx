import { useState, useContext } from 'react';
import SortVisualizerContext from '../../context/context';

// Components
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';

// Styles
import './navbar.scss';
import { InlineIcon } from '@iconify/react';

// Utils
import buildRandomArray from '../../utils/buildRandomArray';

const MIN_RANGE = 2;
const MAX_RANGE = 26;

const Navbar: React.FC = () => {
  const {
    setBars: setContextBars,
    setAlgorithm: setContextAlgorithm,
    setSpeed: setContextSpeed,
    algorithm: contextAlgorithm,
  } = useContext(SortVisualizerContext);
  const [numberOfBars, setNumberOfBars] = useState(10);
  const [speed, setSpeed] = useState(10);
  const [algorithm, setAlgorithm] = useState(contextAlgorithm);

  const handleRangeChange = (value: number) => {
    const a = Math.max(value, MIN_RANGE);
    const b = Math.min(a, MAX_RANGE);
    return b;
  };

  const algorithmLabels = {
    MERGE_SORT: 'Merge Sort',
    QUICK_SORT: 'Quick Sort',
    BUBBLE_SORT: 'Bubble Sort',
    INSERTION_SORT: 'Insertion Sort',
    HEAP_SORT: 'Heap Sort',
  };

  return (
    <nav className="navbar">
      <section className="logo-container">
        <h1 className="title">Sort Visualizer</h1>
        <InlineIcon
          className="cube-icon"
          stroke="green"
          icon="icon-park:cube"
          fr=""
          style={{ color: '#ebdbb2', stroke: '#ebdbb2', fontSize: '2rem' }}
        />
      </section>
      <ul className="items">
        <li className="item">
          <h4>
            Array: <span className="info">{numberOfBars}</span>
          </h4>
          <input
            className="range-input"
            type="range"
            min={MIN_RANGE}
            max={MAX_RANGE}
            step="1"
            value={numberOfBars}
            onChange={(e) => {
              const parsedRange = handleRangeChange(parseFloat(e.target.value));
              setNumberOfBars(parsedRange);
              setContextBars(buildRandomArray(parsedRange));
            }}
          />
        </li>
        <li className="item">
          <h4>
            Speed: <span className="info">{speed}</span>
          </h4>
          <input
            className="range-input"
            type="range"
            min={MIN_RANGE}
            max={MAX_RANGE}
            step="1"
            value={speed}
            onChange={(e) => {
              const parsedRange = handleRangeChange(parseFloat(e.target.value));
              setSpeed(parsedRange);
              setContextSpeed(parsedRange);
            }}
          />
        </li>
        <li className="item" style={{ width: '15rem' }}>
          <Dropdown
            title="Algorithms: "
            info={algorithmLabels[algorithm]}
            items={[
              {
                title: 'Merge Sort',
                onClick: () => {
                  setAlgorithm('MERGE_SORT');
                  setContextAlgorithm('MERGE_SORT');
                },
              },
              {
                title: 'Quick sort',
                onClick: () => {
                  setAlgorithm('QUICK_SORT');
                  setContextAlgorithm('QUICK_SORT');
                },
              },
              {
                title: 'Bubble Sort',
                onClick: () => {
                  setAlgorithm('BUBBLE_SORT');
                  setContextAlgorithm('BUBBLE_SORT');
                },
              },
              {
                title: 'Insertion Sort',
                onClick: () => {
                  setAlgorithm('INSERTION_SORT');
                  setContextAlgorithm('INSERTION_SORT');
                },
              },
              {
                title: 'Heap Sort',
                onClick: () => {
                  setAlgorithm('HEAP_SORT');
                  setContextAlgorithm('HEAP_SORT');
                },
              },
            ]}
          />
        </li>
        <li className="item">
          <Button title={'Run'} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
