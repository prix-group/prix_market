import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IFadeInAnimation {
  children: ReactElement;
}

export const FadeInAnimation: FC<IFadeInAnimation> = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn({ [styles['fade-in-animation--in-view']]: inView })}
    >
      {children}
    </div>
  );
};
