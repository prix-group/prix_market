import styles from './styles.module.scss';
import { PaymentAdvantageList } from '@components/PaymentAdvantageList';
import { FC } from 'react';
import cn from 'classnames';

interface IAdvantage {
  type: string;
  flexReverse: boolean;
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

export const Advantage: FC<IAdvantage> = ({
  type,
  flexReverse,
  title,
  subtitle,
  text,
  image,
}) => {
  const handleContentSwitch = (type: string) => {
    switch (type) {
      case 'payment':
        return <PaymentAdvantageList />;
      default:
        return (
          <>
            <p className={styles.text}>{text}</p>
            <a className={styles.link} href="#">
              Узнать подробнее
            </a>
          </>
        );
    }
  };

  return (
    <section
      className={cn(styles['advantages'], {
        [styles['advantages--grey']]: type !== 'partners',
      })}
      key={type}
    >
      <div
        className={cn(styles['wrapper'], {
          [styles['wrapper--flexReverse']]: flexReverse,
        })}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>
            {title}
            {/* /!*<div className="advantages__title-border"></div>*!/TODO:WILL BE ADDED? */}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
          {handleContentSwitch(type)}
        </div>
        <div
          className={cn(styles['image-container'], {
            [styles['image-container--transparent']]: type !== 'partners',
          })}
        >
          <img className={styles.image} src={image} alt={image} />
        </div>
      </div>
    </section>
  );
};
