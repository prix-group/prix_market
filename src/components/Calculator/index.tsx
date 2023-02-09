import { FC } from 'react';
import styles from './styles.module.scss';

export const Calculator: FC = () => {
  return (
    <section className={styles['calculator']}>
      <h1 className={styles['calculator__title']}>
        Calculator
      </h1>

      <div className={styles['calculator__wrapper']}>
        <p>Text</p>
        <div className={styles['calculator__gadget']}>

        </div>
      </div>
    </section>
  )
}
