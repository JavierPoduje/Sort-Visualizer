import { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * source:
 *   https://usehooks-ts.com/react-hook/use-interval
 */
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
