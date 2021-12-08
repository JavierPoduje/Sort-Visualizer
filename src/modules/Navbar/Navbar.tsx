import { useState, useContext, useEffect } from 'react';

// Context
import SortVisualizerContext from '../../context/context';

// Components
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';

// Styles
import './navbar.scss';
import { InlineIcon } from '@iconify/react';

// Utils
import arrayByLength from '../../utils/arrayByLength';

const MIN_RANGE = 2;
const MAX_RANGE = 26;

const Navbar: React.FC = () => {
  const {
    algorithm: contextAlgorithm,
    bars: contextBars,
    buildAnimation,
    navbarButtonsDisabled,
    setAlgorithm: setContextAlgorithm,
    setBars,
    setBarsHeight: setContextBars,
    setNavbarButtonsDisabled,
    setRunAlgorithm,
    setSpeed: setContextSpeed,
  } = useContext(SortVisualizerContext);
  const [barsHeight, setBarsHeight] = useState(10);
  const [speed, setSpeed] = useState(10);
  const [algorithm, setAlgorithm] = useState(contextAlgorithm);

  const setBarsInContext = (
    numOfBars: number,
    cb: (barsHeight: number[]) => void
  ) => {
    const barsHeight: number[] = arrayByLength(numOfBars).map(
      (height) => height
    );
    cb(barsHeight);
    setBars([]);
  };

  useEffect(() => {
    setBarsInContext(barsHeight, setContextBars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barsHeight]);

  const handleRangeChange = (value: number) =>
    Math.min(Math.max(value, MIN_RANGE), MAX_RANGE);

  const algorithmLabels = {
    MERGE_SORT: 'Merge Sort',
    QUICK_SORT: 'Quick Sort',
    BUBBLE_SORT: 'Bubble Sort',
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
        <li className={`item ${navbarButtonsDisabled ? 'disabled' : ''}`}>
          <h4>
            Array: <span className="info">{barsHeight}</span>
          </h4>
          <input
            className="range-input"
            type="range"
            min={MIN_RANGE}
            max={MAX_RANGE}
            step="1"
            value={barsHeight}
            disabled={navbarButtonsDisabled}
            onChange={(e) => {
              const parsedRange = handleRangeChange(parseFloat(e.target.value));
              setBarsHeight(parsedRange);
              setBarsInContext(parsedRange, setContextBars);
            }}
          />
        </li>
        <li className={`item ${navbarButtonsDisabled ? 'disabled' : ''}`}>
          <h4>
            Speed: <span className="info">{speed}</span>
          </h4>
          <input
            className="range-input"
            type="range"
            min={MIN_RANGE}
            max={MAX_RANGE}
            step="1"
            disabled={navbarButtonsDisabled}
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
            disabled={navbarButtonsDisabled}
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
            ]}
          />
        </li>
        <li className="item">
          <Button
            title={'Run'}
            onClick={() => {
              buildAnimation({ bars: contextBars, algorithm });
              setNavbarButtonsDisabled(true);
              setRunAlgorithm(true);
            }}
            disabled={navbarButtonsDisabled}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
