import styles from './styles.module.scss';
import { FC } from 'react';

interface IFeatureCard {
  id: string;
  src: string;
  alt: string;
  title: string;
  text: string;
}

export const FeatureCard: FC<IFeatureCard> = ({
  id,
  src,
  alt,
  title,
  text,
}) => {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={src} alt={alt} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{text}</p>
    </div>
  );
};
