// styles
import './bar.scss';

interface IProps {
  height: number;
}

const Bar: React.FC<IProps> = (props) => {
  const { height } = props;
  return <figure className="bar" style={{ height: height * 7 }}></figure>;
};

export default Bar;
