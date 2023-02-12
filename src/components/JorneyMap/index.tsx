import styles from './styles.module.scss';
import { FC } from 'react';
import { TranslateAnimation } from '@components/shared/TranslateAnimation';
import cn from 'classnames';
import { parseToUnderline } from '@/src/helpers/parseToUnderline';

interface IAdvantage {
  index: number;
  order: string;
  text: string;
  animation: string;
  image: string;
  underlinedWord: string;
}

export const Advantage: FC<IAdvantage> = ({
  order,
  index,
  text,
  animation,
  image,
  underlinedWord,
}) => {
  return (
    <section className={cn('wrapper', styles['journey-map'])}>
      <TranslateAnimation config={{ index }}>
        <div className={styles['wrapper']}>
          <div className={styles['content']}>
            <h2 className={styles['content__step']}>{order}</h2>
            <p className={styles['content__description']}>
              {parseToUnderline(text, underlinedWord, 'content', styles)}
            </p>
          </div>
          <div className={styles['illustration']}>
            <img
              className={cn(
                styles['illustration__image'],
                styles[`illustration__image--${animation}`],
              )}
              src={image}
              alt={'icon'}
            />
          </div>
        </div>
      </TranslateAnimation>
    </section>
  );
};
