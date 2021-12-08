// Styles
import './button.scss';

interface IButton {
  title: string;
  disabled: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButton> = ({ title, onClick, disabled }: IButton) => {
  return (
    <button
      className={disabled ? 'disabled' : ''}
      onClick={(e) =>
        onClick ? onClick(e) : console.log('nothing to do here...')
      }
      disabled={disabled}
    >
      <h3>{title}</h3>
    </button>
  );
};

export default Button;
