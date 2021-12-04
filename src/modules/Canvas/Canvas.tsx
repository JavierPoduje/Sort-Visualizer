import { useContext, useEffect, useState } from 'react';

// context
import { AnimationType } from '../../context/types';
import SortVisualizerContext from '../../context/context';

// components
import Bar from '../../components/Bar/Bar';
import useInterval from '../hooks/useInterval';

// styles
import './canvas.scss';

const Canvas: React.FC = () => {
  const {
    barsHeight,
    setBars,
    setBarByIdx,
    bars,
    runAlgorithm,
    setRunAlgorithm,
    animation: contextAnimation,
    cleanAnimation,
  } = useContext(SortVisualizerContext);
  const [stepIdx, setStepIdx] = useState(0);

  const performAnimation = ({
    compared,
    swap,
    elementsToBeSwapped,
  }: AnimationType) => {
    // set compared a different color to the compared elements
    setTimeout(() => {
      compared.forEach((bar) => {
        if (bar.ref.current) bar.ref.current.className = 'bar compared';
      });
    }, 300);

    // swap if necessary
    setTimeout(() => {
      if (swap) {
        const [left, right] = elementsToBeSwapped;
        const leftElem = left.ref.current;
        const rightElem = right.ref.current;

        if (leftElem && rightElem) {
          [leftElem.style.height, rightElem.style.height] = [
            rightElem.style.height,
            leftElem.style.height,
          ];
        }
      }
    }, 600);

    setTimeout(() => {
      compared.forEach((bar) => {
        if (bar.ref.current) bar.ref.current.className = 'bar';
      });
    }, 900);
  };

  useEffect(() => {
    if (!bars) setBars(new Array(barsHeight.length).fill(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barsHeight]);

  useInterval(
    () => {
      if (contextAnimation.length && stepIdx < contextAnimation.length) {
        const animation = contextAnimation[stepIdx];
        performAnimation(animation);
        setStepIdx(stepIdx + 1);
      } else if (
        contextAnimation.length &&
        stepIdx >= contextAnimation.length
      ) {
        setStepIdx(0);
        setRunAlgorithm(false);
        cleanAnimation();
      }
    },
    runAlgorithm ? 700 : null
  );

  return (
    <section className="canvas">
      <section className="bars">
        {barsHeight &&
          barsHeight.map((barHeight, idx) => (
            <Bar
              key={idx}
              height={barHeight}
              idx={idx}
              setBarByIdxCallback={setBarByIdx}
            />
          ))}
      </section>
    </section>
  );
};

export default Canvas;
