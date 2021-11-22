// Styles
import './button.scss';

interface IButton {
  title: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButton> = ({ title, onClick }: IButton) =>
  onClick ? (
    <button onClick={(e) => onClick(e)}>
      <h3>{title}</h3>
    </button>
  ) : (
    <button>
      <h3>{title}</h3>
    </button>
  );

export default Button;
