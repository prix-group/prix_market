import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { FadeInAnimation } from '@components/shared/FadeInAnimation';

export const Strategy: FC = () => {
  return (
    <section className={styles['strategy']}>
      <FadeInAnimation>
        <div className="wrapper">
          <h2 className={styles['strategy__title']}>
            <span
              className={cn(
                styles['strategy__title-line'],
                styles['strategy__title-line--underlined'],
              )}
            >
              Стратегия
            </span>
            <span
              className={cn(
                styles['strategy__title-line'],
                styles['strategy__title-line--block'],
              )}
            >
              импорта автомобиля
            </span>
          </h2>

          <ul className={styles['strategy__info']}>
            <li className={styles['strategy__info-item']}>
              <span className={styles['strategy__info-item-title']}>
                Без ограничений
              </span>

              <span className={styles['strategy__info-item-subtitle']}>
                выгодные предложения
              </span>
            </li>
            <li className={styles['strategy__info-item']}>
              <span className={styles['strategy__info-item-title']}>
                Каждые 3 месяца
              </span>
              <span className={styles['strategy__info-item-subtitle']}>
                выгодные предложения
              </span>
            </li>
            <li className={styles['strategy__info-item']}>
              <span className={styles['strategy__info-item-title']}>
                Каждые 3 месяца
              </span>
              <span className={styles['strategy__info-item-subtitle']}>
                выгодные предложения
              </span>
            </li>
            <li className={styles['strategy__info-item']}>
              <span className={styles['strategy__info-item-title']}>
                Без ограничений
              </span>
              <span className={styles['strategy__info-item-subtitle']}>
                выгодные предложения
              </span>
            </li>
            <li className={styles['strategy__info-item']}>
              <span className={styles['strategy__info-item-title']}>
                Каждые 3 месяца
              </span>
              <span className={styles['strategy__info-item-subtitle']}>
                выгодные предложения
              </span>
            </li>
            <li className={styles['strategy__info-item']}>
              <span className={styles['strategy__info-item-title']}>
                Без ограничений
              </span>
              <span className={styles['strategy__info-item-subtitle']}>
                выгодные предложения
              </span>
            </li>
          </ul>
        </div>
      </FadeInAnimation>
    </section>
  );
};
