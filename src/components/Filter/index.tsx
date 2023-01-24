import styles from './styles.module.scss';
import cn from 'classnames';
import { FC } from 'react';

interface IFilter {
  isDesktop: boolean;
  isHidden: boolean;
}

export const Filter: FC<IFilter> = ({ isDesktop, isHidden }) => {
  return (
    <div
      className={cn(
        styles['filter'],
        { [styles['filter--mobile']]: !isDesktop },
        { [styles['filter--hidden']]: !isDesktop && isHidden },
      )}
    >
      <div className={''}>
        <p className={styles['filter__title']}>FILTER</p>
      </div>
    </div>
  );
};
