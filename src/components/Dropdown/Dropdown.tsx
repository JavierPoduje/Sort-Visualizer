// Components
import Button from '../Button/Button';

// Styles
import './dropdown.scss';

type item = {
  title: string;
  onClick: (event: React.MouseEvent) => void;
};

interface IDropdown {
  title: string;
  items: item[];
}

const Dropdown: React.FC<IDropdown> = ({ title, items }: IDropdown) => {
  return (
    <div className="dropdown">
      <button>
        <h3>{title}</h3>
      </button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Button title={item.title} onClick={item.onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
