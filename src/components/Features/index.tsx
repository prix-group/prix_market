import { FeatureCard } from '../FeatureCard';
import styles from './styles.module.scss';
import { cardsContent } from '@components/Features/constants';
import { FC } from 'react';

export const Features: FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.cards}>
        {cardsContent.map((item) => {
          return (
            <FeatureCard
              key={item.id}
              id={item.id}
              src={item.imageUrl}
              alt={item.imageAlt}
              title={item.title}
              text={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};
