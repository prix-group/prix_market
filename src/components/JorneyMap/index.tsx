import styles from './styles.module.scss';
import { FC } from 'react';
import carpic from '@public/images/car-white-svgrepo-com.svg';
import loopa from '@public/images/search-svgrepo-com.svg';
import { TranslateAnimation } from '@components/shared/TranslateAnimation';
import cn from 'classnames';
import { parseToUnderline } from '@/src/helpers/parseToUnderline';

interface IAdvantage {
  index: number;
  order: string;
  text: string;
  underlinedWord: string;
}

export const Advantage: FC<IAdvantage> = ({ index, order, text, underlinedWord }) => {
  return (
    <section className={cn('wrapper', styles['journey-map'])}>
      <TranslateAnimation config={{ index }}>
        <div className={styles['wrapper']}>
          <div className={styles['content']}>
            <h2 className={styles['content__step']}>{order}</h2>
            <p className={styles['content__description']}>
              {parseToUnderline(text, underlinedWord, 'content', styles)}
            </p>
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
