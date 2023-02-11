import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { FadeInAnimation } from '@components/shared/FadeInAnimation';

export const Calculator: FC = () => {
  return (
    <section className={styles['calculator']}>
      <FadeInAnimation>
        <>
          <h2 className={styles['calculator__title']}>
            <span className={styles['calculator__title-line']}>Таможенный</span>
            <span
              className={cn(
                styles['calculator__title-line'],
                styles['calculator__title-line--underlined'],
              )}
            >
              калькулятор
            </span>
          </h2>

          <div className={styles['calculator__wrapper']}>
            <div className={styles['calculator__text']}>
              <h3 className={styles['calculator__text-title']}>
                Из чего складывается стоимость автомобиля?
              </h3>

              <p className={styles['calculator__text-description']}>
                Стоимость автомобиля состоит из цены автомобиля в Корее,
                транспортировка в порт, перевозка во Владивосток, Таможня,
                Комиссия фирмы
              </p>
            </div>

            <div className={styles['calculator__gadget']}>
              <button
                className={cn(
                  styles['calculator__button'],
                  styles['calculator__button--disabled'],
                )}
              >
                Рассчитать
              </button>
            </div>
          </div>
        </>
      </FadeInAnimation>
    </section>
  );
};
