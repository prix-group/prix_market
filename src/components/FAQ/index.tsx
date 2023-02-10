import { FC } from 'react';
import styles from './styles.module.scss';
import { Accordion } from '@components/shared/Accordion';
import { data } from '@/src/mockedData/FAQ';

export const FAQ: FC = () => {
  return (
    <section className={styles['FAQ']}>
      <h2 className={styles['FAQ__title']}>Часто Задаваемые Вопросы</h2>
      <div className={styles['FAQ__questions']}>
        <Accordion data={data} />
      </div>

      <button className={styles['FAQ__button']}>Посмотреть еще</button>
    </section>
  );
};
