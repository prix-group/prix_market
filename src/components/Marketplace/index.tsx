import styles from './styles.module.scss';
import { CarCard } from '@components/CarCard';
import Link from 'next/link';
import { carsData } from '@components/Marketplace/constants';
import { useWindowSize } from '@/src/customHooks/useWindowSize';
import { DESKTOP_SIZE } from '@components/BlogBody/constants';
import { useState } from 'react';
import { File } from 'next/dist/compiled/@edge-runtime/primitives/fetch';
import { Filter } from '@components/Filter';

export const Marketplace = () => {
  const windowSize = useWindowSize();
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  let isDesktop = windowSize.width > DESKTOP_SIZE;

  return (
    <div className={styles['marketplace']}>
      <div className={styles['wrapper']}>
        <h1 className={styles['marketplace__title']}>Результаты поиска</h1>
        {!isDesktop && (
          <p
            className={styles['marketplace__filter-button']}
            onClick={handleFilterToggle}
          >
            {filterOpen ? 'Закрыть Фильтр' : 'Открыть Фильтр'}
          </p>
        )}
        <div className={styles['marketplace__content']}>
          <Filter isDesktop={isDesktop} isHidden={!filterOpen} />
          <div className={styles['marketplace__grid']}>
            {carsData.map((item) => {
              return (
                <Link
                  href={'#'}
                  className={styles['marketplace__link']}
                  key={item.id}
                >
                  <CarCard
                    image={item.image}
                    make={item.make}
                    model={item.model}
                    year={item.year}
                    specs={item.specs}
                    price={item.price}
                    location={item.location}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
