import { FC } from 'react';
import styles from './styles.module.scss';

export const FAQ: FC = () => {
  return (
    <section className={styles['FAQ']}>
      <h1 className={styles['FAQ__title']}>Frequently Asked Questions</h1>
    </section>
  )
}
