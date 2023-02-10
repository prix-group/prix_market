import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Strategy: FC = () => {
  return (
    <section className={styles['strategy']}>
      <h2 className={styles['strategy__title']}>
        <span
          className={cn(
            styles['strategy__title-line'],
            styles['strategy__title-line--underlined'],
          )}
        >
          Madrasa-Installments
        </span>
        <span
          className={cn(
            styles['strategy__title-line'],
            styles['strategy__title-line--block'],
          )}
        >
          investment strategy
        </span>
      </h2>

      <ul className={styles['strategy__info']}>
        <li className={styles['strategy__info-item']}>
          <span className={styles['strategy__info-item-title']}>
            starting from 2.5 million sum
          </span>

          <span className={styles['strategy__info-item-subtitle']}>
            follow-on investments
          </span>
        </li>
        <li className={styles['strategy__info-item']}>
          <span className={styles['strategy__info-item-title']}>
            starting from 2.5 million sum
          </span>
          <span className={styles['strategy__info-item-subtitle']}>
            follow-on investments
          </span>
        </li>
        <li className={styles['strategy__info-item']}>
          <span className={styles['strategy__info-item-title']}>
            starting from 1 something
          </span>
          <span className={styles['strategy__info-item-subtitle']}>
            follow-on investments
          </span>
        </li>
        <li className={styles['strategy__info-item']}>
          <span className={styles['strategy__info-item-title']}>
            starting from 2.5 million sum
          </span>
          <span className={styles['strategy__info-item-subtitle']}>
            follow-on investments
          </span>
        </li>
        <li className={styles['strategy__info-item']}>
          <span className={styles['strategy__info-item-title']}>
            from 100k sum
          </span>
          <span className={styles['strategy__info-item-subtitle']}>
            follow-on investments
          </span>
        </li>
        <li className={styles['strategy__info-item']}>
          <span className={styles['strategy__info-item-title']}>
            starting from 2.5 million
          </span>
          <span className={styles['strategy__info-item-subtitle']}>
            follow-on investments
          </span>
        </li>
      </ul>
    </section>
  );
};
