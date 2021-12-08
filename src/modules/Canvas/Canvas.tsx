import { useContext, useEffect, useState } from 'react';

// context
import { AnimationType, MergeSortAnimationType } from '../../context/types';
import SortVisualizerContext from '../../context/context';

// components
import Bar from '../../components/Bar/Bar';
import useInterval from '../hooks/useInterval';

// styles
import './canvas.scss';

const Canvas: React.FC = () => {
  const {
    algorithm,
    animation: contextAnimation,
    bars,
    barsHeight,
    cleanAnimation,
    runAlgorithm,
    setBarByIdx,
    setBars,
    setRunAlgorithm,
    speed,
  } = useContext(SortVisualizerContext);
  const [stepIdx, setStepIdx] = useState(0);

  const performMergeSortAnimation = (
    animation: MergeSortAnimationType
  ): void => {
    const { compared, haveToChangeHeight, heightChange } = animation;

    setTimeout(() => {
      compared.forEach((bar, idx) => {
        bar.ref.current!.className = `bar ${idx === 0 ? 'pivot' : 'compared'}`;
      });
    }, speed * 150);

    setTimeout(() => {
      if (haveToChangeHeight) {
        const { bar, newHeight } = heightChange;
        const currBar = bar.ref.current;
        if (currBar) currBar.style.height = `${(newHeight * 7).toString()}px`;
      }
    }, speed * 300);
  };

  const performBubbleSortAnimation = (animation: AnimationType) => {
    const { compared, swap, elementsToBeSwapped } = animation;

    setTimeout(() => {
      compared.forEach((bar) => {
        bar.ref.current!.className = 'bar compared';
      });
    }, speed * 150);

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
    }, speed * 300);
  };

  const performQuickSortAnimation = (animation: AnimationType) => {
    const { compared, swap, elementsToBeSwapped } = animation;

    setTimeout(() => {
      compared.forEach((bar, idx) => {
        bar.ref.current!.className = `bar ${idx === 0 ? 'pivot' : 'compared'}`;
      });
    }, speed * 150);

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
    }, speed * 300);
  };

  const performAnimation = (
    animation: AnimationType | MergeSortAnimationType
  ) => {
    if (algorithm === 'BUBBLE_SORT') {
      performBubbleSortAnimation(animation as AnimationType);
    } else if (algorithm === 'QUICK_SORT') {
      performQuickSortAnimation(animation as AnimationType);
    } else if (algorithm === 'MERGE_SORT') {
      performMergeSortAnimation(animation as MergeSortAnimationType);
    }

    // set compared elements to their original color
    const { compared } = animation;
    setTimeout(() => {
      compared.forEach((bar) => {
        if (bar.ref.current) bar.ref.current.className = 'bar';
      });
    }, speed * 450);
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
    runAlgorithm ? speed * 350 : null
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
