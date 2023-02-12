import { FC } from 'react';
import styles from './styles.module.scss';
import { Accordion } from '@components/shared/Accordion';
import { data } from '@/src/mockedData/FAQ';
import cn from 'classnames';
import { FadeInAnimation } from '@components/shared/FadeInAnimation';

export const FAQ: FC = () => {
  return (
    <section className={styles['FAQ']}>
      <FadeInAnimation>
        <div className={cn('wrapper', styles['FAQ__wrapper'])}>
          <h2 className={styles['FAQ__title']}>
            <span className={styles['FAQ__title-line']}>Часто Задаваемые</span>
            <span
              className={cn(
                styles['FAQ__title-line'],
                styles['FAQ__title-line--underlined'],
              )}
            >
              Вопросы
            </span>
          </h2>
          <div className={styles['FAQ__questions']}>
            <Accordion data={data} />
          </div>

          <button className={styles['FAQ__button']}>Посмотреть еще</button>
        </div>
      </FadeInAnimation>
    </section>
  );
};
