import {useCallback, useEffect} from 'react';
import {useSpring, config} from '@react-spring/core';
import {useGesture} from 'react-use-gesture';
import clamp from 'lodash/clamp';

export function useYScroll(aBounds, aProps) {
  const [{y}, set] = useSpring(() => ({y: 0, config: config.slow}));

  const scrollCallback = useCallback(
    ({xy: [, cy], previous: [, py], memo = y.get()}) => {
      const newY = clamp(memo + cy - py, ...aBounds);
      set({y: newY});
      console.log('newy: ', newY);
      return newY;
    },
    [aBounds, y, set]
  );

  const bind = useGesture({onWheel: scrollCallback, onDrag: scrollCallback}, aProps);

  useEffect(() => aProps && aProps.domTarget && bind(), [aProps, bind]);

  return [y, bind];
}
