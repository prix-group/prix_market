import { useEffect, useState } from 'react';

export const useWindowResize = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowProps]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handleWindowResize();
  }, []);

  // let isDesktop: boolean = windowProps.width > 1200;

  return windowProps;
};
