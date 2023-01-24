import styles from './styles.module.scss';
import { CarCard } from '@components/CarCard';
import Link from 'next/link';
import {carsData, POSTS_PER_PAGE} from '@components/Marketplace/constants';
import { useWindowSize } from '@/src/customHooks/useWindowSize';
import { DESKTOP_SIZE } from '@components/BlogBody/constants';
import { useState } from 'react';
import { Filter } from '@components/Filter';
import { Pagination } from '@components/Pagination';

export const Marketplace = () => {
  const windowSize = useWindowSize();
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  let lastCardIndex = currentPage * POSTS_PER_PAGE;
  let firstCardIndex = lastCardIndex - POSTS_PER_PAGE;
  let carsOnPage = carsData.slice(firstCardIndex, lastCardIndex);

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
          <div className={styles['grid-container']}>
            <div className={styles['marketplace__grid']}>
              {carsOnPage.map((item) => {
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
            <Pagination
              totalCards={carsData.length}
              cardsPerPage={12}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
