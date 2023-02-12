import styles from './styles.module.scss';
import { FC } from 'react';
import carpic from '@public/images/car-white-svgrepo-com.svg';
import loopa from '@public/images/search-svgrepo-com.svg';

interface IAdvantage {
  order: number;
  text: string;
}

export const Advantage: FC<IAdvantage> = ({ order, text }) => {
  return (
    <section className={styles['journey-map']}>
      <div className={styles['wrapper']}>
        <div className={styles['content']}>
          <h2 className={styles['content__step']}>{order}</h2>
          <p className={styles['content__description']}>{text}</p>
        </div>
        <div className={styles['illustration']}></div>
      </div>
    </section>
  );
};
