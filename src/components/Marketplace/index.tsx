import styles from './styles.module.scss';
import { CarCard } from '@components/CarCard';
import Link from 'next/link';
import { DESKTOP_SIZE } from '@/src/constants';
import { useWindowSize } from '@/src/customHooks/useWindowSize';
import { FC, useState } from 'react';
import { Filter } from '@components/Filter';
import { Pagination } from '@components/Pagination';

export const Marketplace: FC = ({ carsData }) => {
  const windowSize = useWindowSize();
  const [filterOpen, setFilterOpen] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  console.log(carsData);

  const handleFilterToggle = () => {
    setFilterOpen((filterOpen) => !filterOpen);
  };

  console.log('CARS DATA INSIDE MARKETPLACE', carsData);

  // let lastCardIndex = currentPage * POSTS_PER_PAGE;
  // let firstCardIndex = lastCardIndex - POSTS_PER_PAGE;
  // let carsOnPage = carsData.slice(firstCardIndex, lastCardIndex);

  const isMobile = windowSize.width < DESKTOP_SIZE;

  return (
    <div className={styles['marketplace']}>
      <div className={styles['wrapper']}>
        <h1 className={styles['marketplace__title']}>Результаты поиска</h1>
        {isMobile && (
          <p
            className={styles['marketplace__filter-button']}
            onClick={handleFilterToggle}
          >
            {filterOpen ? 'Закрыть Фильтр' : 'Открыть Фильтр'}
          </p>
        )}
        <div className={styles['marketplace__content']}>
          <Filter isMobile={isMobile} isHidden={!filterOpen} />
          <div className={styles['marketplace__grid']}>
            {carsData.items.map((item) => {
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
            totalCards={carsData.itemsQty}
            cardsPerPage={12}
            currentPage={carsData.pageNumber}
          />
        </div>
      </div>
    </div>
  );
};
