import styles from './styles.module.scss';
import { FC } from 'react';
import cn from 'classnames';

interface IAdvantage {
  order: string;
  text: string;
  animation: string;
  image: string;
}

export const Advantage: FC<IAdvantage> = ({
  order,
  text,
  animation,
  image,
}) => {
  return (
    <section className={styles['journey-map']}>
      <div className={styles['wrapper']}>
        <div className={styles['content']}>
          <h2 className={styles['content__step']}>{order}</h2>
          <p className={styles['content__description']}>{text}</p>
        </div>
        <div className={styles['illustration']}>
          <img
            className={cn(styles['illustration__image'], styles[animation])}
            src={image}
            alt={'icon'}
          />
        </div>
      </div>
    </section>
  );
};
