import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IConfig {
  order: number;
}

interface ITranslateAnimation {
  children: ReactElement,
  config: IConfig;
}

const isEven = (number: number): boolean => number % 2 === 0;

export const TranslateAnimation: FC<ITranslateAnimation> = ({
  children,
  config,
}) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const { order } = config;

  return (
    <div
      ref={ref}
      className={cn({
        [styles['animation__translate--left']]: inView && isEven(order),
        [styles['animation__translate--right']]: inView && !isEven(order),
      })}
    >
      {children}
    </div>
  );
};
