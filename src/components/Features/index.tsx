import { FeatureCard } from '../FeatureCard';
import styles from './styles.module.scss';
import { cardsContent } from '@components/Features/constants';
import { FC, useContext } from 'react';
import { multilangContext } from '@/src/context/multilangContext';

export const Features: FC = () => {
  const language = useContext(multilangContext);

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
              title={item[language.lang].title}
              text={item[language.lang].description}
            />
          );
        })}
      </div>
    </section>
  );
};
