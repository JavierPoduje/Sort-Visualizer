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
  info?: string;
}

const Dropdown: React.FC<IDropdown> = ({ title, items, info }: IDropdown) => {
  return (
    <div className="dropdown">
      <button>
        <h3>
          {/* TODO: info doesn't display his tag... */}
          {title} {info ?? <span className="info">{info}</span>}
        </h3>
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
