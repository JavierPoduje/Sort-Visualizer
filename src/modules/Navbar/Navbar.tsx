import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from 'react';
import SortVisualizerContext from '../../context/context';

// Components
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';

// Styles
import './navbar.scss';
import { InlineIcon } from '@iconify/react';

// Utils
import buildRandomArray from '../../utils/buildRandomArray';

const Navbar: React.FC = () => {
  const [numberOfBars, setNumberOfBars] = useState(10);
  const [speed, setSpeed] = useState(10);
  const { setBars } = useContext(SortVisualizerContext);

  const handleRangeChange = (
    value: number,
    cb: Dispatch<SetStateAction<number>>
  ) => {
    const a = Math.max(value, 2);
    const b = Math.min(a, 26);
    cb(b);
  };

  useEffect(() => {
    if (numberOfBars && setBars) {
      setBars(buildRandomArray(numberOfBars));
    }
  }, [numberOfBars]);

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
          <h4>Array: </h4>
          <input
            className="range-input"
            type="range"
            min="2"
            max="26"
            step="1"
            value={numberOfBars}
            onChange={(e) =>
              handleRangeChange(parseFloat(e.target.value), setNumberOfBars)
            }
          />
        </li>
        <li className="item">
          <h4>Speed: </h4>
          <input
            className="range-input"
            type="range"
            min="2"
            max="100"
            step="1"
            value={speed}
            onChange={(e) =>
              handleRangeChange(parseFloat(e.target.value), setSpeed)
            }
          />
        </li>
        <li className="item" style={{ width: '7rem' }}>
          <Dropdown
            title="Algorithms"
            items={[
              {
                title: 'Merge Sort',
                onClick: () => console.log('click! Merge Sort...'),
              },
              {
                title: 'Quick sort',
                onClick: () => console.log('click! Quick Sort'),
              },
              {
                title: 'Bubble Sort',
                onClick: () => console.log('click! Bubble Sort'),
              },
              {
                title: 'Insertion Sort',
                onClick: () => console.log('click! Insertion Sort'),
              },
              {
                title: 'Heap Sort',
                onClick: () => console.log('click! Heap Sort'),
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
