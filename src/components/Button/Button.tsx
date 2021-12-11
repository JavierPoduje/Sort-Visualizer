// Styles
import './button.scss';

interface IButton {
  title: string;
  disabled: boolean;
  alternativeColor?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButton> = ({
  title,
  onClick,
  disabled,
  alternativeColor,
}: IButton) => {
  const className = `${disabled ? 'disabled' : ''} ${
    alternativeColor ? 'alternativeColor' : ''
  }`;

  return (
    <button
      className={className}
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
