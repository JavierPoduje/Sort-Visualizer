// Components
import Dropdown from '../../components/Dropdown/Dropdown';

// Styles
import './navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="title">Sort Visualizer</h1>
      <ul className="items">
        <li className="item">number-of-bars</li>
        <li className="item" style={{ width: '7rem' }}>
          <Dropdown
            title="algorithms"
            items={[
              {
                title: 'bubble sort',
                onClick: () => console.log('click! bubble sort'),
              },
              {
                title: 'merge sort',
                onClick: () => console.log('click! merge sort'),
              },
              {
                title: 'quick sort',
                onClick: () => console.log('click! quicksort sort'),
              },
            ]}
          />
        </li>
        <li className="item">
          <button>Start</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
