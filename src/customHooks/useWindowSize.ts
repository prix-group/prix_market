import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowProps, setWindowProps] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowResize = () => {
    setWindowProps({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowProps]);

  useEffect(() => {
    handleWindowResize();
  }, []);

  return windowProps;
};
