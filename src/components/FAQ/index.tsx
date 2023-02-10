import { FC } from 'react';
import styles from './styles.module.scss';
import { Accordion } from '@components/shared/Accordion';

export const FAQ: FC = () => {
  return (
    <section className={styles['FAQ']}>
      <h2 className={styles['FAQ__title']}>Часто Задаваемые Вопросы</h2>
      <div className={styles['FAQ__questions']}>
        <Accordion />
      </div>

      <button className={styles['FAQ__button']}>Посмотреть еще</button>
    </section>
  );
};
