import { useEffect, useState } from 'react';
import { useWindowSize } from '@hooks/useWindowSize';

export const useDevice = (desktopWidth: number) => {
  const windowSize = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(windowSize.width > desktopWidth);

  useEffect(() => {
    setIsDesktop(windowSize.width > desktopWidth);
  }, [desktopWidth, windowSize.width]);

  return isDesktop;
};
