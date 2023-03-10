import styles from './styles.module.scss';
import { FadeInAnimation } from '@components/shared/FadeInAnimation';
import cn from 'classnames';

export const Intro = () => {
  return (
    <FadeInAnimation>
      <section className={styles.intro}>
        <div className={cn(styles.wrapper, 'wrapper')}>
          <div className={styles['content']}>
            <div className={styles['content__text']}>
              <p className={styles['content__text-note']}>
                Первый и единственный
              </p>
              <h1 className={styles['content__text-title']}>
                Онлайн-сервис покупки авто <br /> из-за границы
              </h1>
              <h3 className={styles['content__text-subtitle']}>
                Безопасный, быстрый и удобный <br />
                способ покупки и доставки авто в Казахстан
              </h3>
            </div>
            <div className={styles['content__statistics']}>
              <div className={styles['content__statistics-container']}>
                <h3 className={styles['content__statistics-title']}>100 +</h3>
                <p className={styles['content__statistics-note']}>
                  Бла бла бла бла
                </p>
              </div>
              <div className={styles['content__statistics-container']}>
                <h3 className={styles['content__statistics-title']}>100 +</h3>
                <p className={styles['content__statistics-note']}>
                  Бла бла бла бла
                </p>
              </div>
            </div>
          </div>
          <div className={styles['screen-simulator']}>
            <img className={styles.image} src={''} alt="main pic" />
            <div className={styles['search-button']}>
              <p className={styles['search-button__text']}>Искать</p>
            </div>
          </div>
        </div>
      </section>
    </FadeInAnimation>
  );
};
