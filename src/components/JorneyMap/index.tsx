import styles from './styles.module.scss';
import { FC } from 'react';
import carpic from '@public/images/car-white-svgrepo-com.svg';
import loopa from '@public/images/search-svgrepo-com.svg';
import { TranslateAnimation } from '@components/shared/TranslateAnimation';

interface IAdvantage {
  order: number;
  text: string;
}

export const Advantage: FC<IAdvantage> = ({ order, text }) => {
  return (
    <section className={styles['journey-map']}>
      <TranslateAnimation config={{ order }}>
        <div className={styles['wrapper']}>
          <div className={styles['content']}>
            <h2 className={styles['content__step']}>{order}</h2>
            <p className={styles['content__description']}>{text}</p>
          </div>
          <div className={styles['illustration']}>
            <div className={styles['illustration__urlInput']}>
              <p className={styles['illustration__url']}>www.dreamcar.com</p>
              <img className={styles['illustration__svg']} src={loopa.src} />
            </div>
            <img className={styles['illustration__image']} src={carpic.src} />
            <p className={styles['illustration__description']}>МАШИНА МЕЧТЫ</p>
          </div>
        </div>
      </TranslateAnimation>
    </section>
  );
};
