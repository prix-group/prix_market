import styles from './styles.module.scss';
import cn from 'classnames';
import { FC } from 'react';

interface IFilter {
  isMobile: boolean;
  isHidden: boolean;
}

export const Filter: FC<IFilter> = ({ isMobile, isHidden }) => {
  return (
    <div
      className={cn(
        styles['filter'],
        { [styles['filter--mobile']]: isMobile },
        { [styles['filter--hidden']]: isMobile && isHidden },
      )}
    >
      <div className={''}>
        <p className={styles['filter__title']}>FILTER</p>
      </div>
    </div>
  );
};
