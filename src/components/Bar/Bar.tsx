import { useRef, useEffect } from 'react';

import { SetBarByIdxInputType } from '../../context/types';

// styles
import './bar.scss';

interface IProps {
  height: number;
  idx: number;
  setBarByIdxCallback: (payload: SetBarByIdxInputType) => void;
}

const Bar: React.FC<IProps> = (props) => {
  const { height, setBarByIdxCallback, idx } = props;
  const barRef = useRef(null);

  useEffect(() => {
    const barObj = {
      height,
      ref: barRef,
    };
    setBarByIdxCallback({ bar: barObj, idx });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  return (
    <figure
      className="bar"
      style={{ height: height * 7 }}
      ref={barRef}
    ></figure>
  );
};

export default Bar;
