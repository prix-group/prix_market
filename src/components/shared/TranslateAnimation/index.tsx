import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import styles from './styles.module.scss';
import { isEven } from '@helpers/isEven';

enum TranslateSides {
  Left = 'left',
  Right = 'right',
}

interface IConfig {
  index: number;
}

interface ITranslateAnimation {
  children: ReactElement;
  config: IConfig;
}

export const TranslateAnimation: FC<ITranslateAnimation> = ({
  children,
  config,
}) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const { index } = config;

  const handleTranslateSide = (index: number) =>
    isEven(index) ? TranslateSides.Right : TranslateSides.Left;

  const translateSide = handleTranslateSide(index);

  return (
    <div
      ref={ref}
      className={cn({
        [styles[`animation__translate--${translateSide}`]]: inView,
      })}
    >
      {children}
    </div>
  );
};
