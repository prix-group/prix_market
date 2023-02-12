import styles from './styles.module.scss';
import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import firstCardImg from '@public/images/half-circle-svgrepo-com.svg';
import secondCardImg from '@public/images/flower-svgrepo-com.svg';

export const Features: FC = () => {
  return (
    <section className={styles['features']}>
      <div className={cn(styles['features__wrapper'], 'wrapper')}>
        <div
          className={cn(
            styles['features__card'],
            styles['features__card--about'],
          )}
        >
          <h2 className={styles['features__card-title']}>Как работает PRIX</h2>
          <p className={styles['features__card-brief']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            eum? Lorem ipsum dolor sit amet,
          </p>
          <Link href={'#'} className={styles['features__card-link']}>
            Узнать подробнее &#8594;
          </Link>
          <img
            src={firstCardImg.src}
            alt={''}
            className={styles['features__card-image']}
          />
        </div>
        <div
          className={cn(
            styles['features__card--regulations'],
            styles['features__card'],
          )}
        >
          <h2 className={styles['features__card-title']}>
            Соответствие всем стандартам качества
          </h2>
          <p className={styles['features__card-brief']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            harum inventore nemo nihil tempora ullam? Lorem
          </p>
          <Link href={'#'} className={styles['features__card-link']}>
            Узнать подробнее &#8594;
          </Link>
          <img
            src={secondCardImg.src}
            alt={''}
            className={cn(
              styles['features__card-image'],
              styles['features__card-image--regulations'],
            )}
          />
        </div>
      </div>
    </section>
  );
};
