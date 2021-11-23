// Styles
import './button.scss';

interface IButton {
  title: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButton> = ({ title, onClick }: IButton) => (
  <button
    onClick={(e) =>
      onClick ? onClick(e) : console.log('nothing to do here...')
    }
  >
    <h3>{title}</h3>
  </button>
);

export default Button;
