// Styles
import './button.scss';

interface IButton {
  title: string;
  onClick: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButton> = ({ title, onClick }: IButton) => {
  return <button onClick={(e) => onClick(e)}>{title}</button>;
};

export default Button;
