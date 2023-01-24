import styles from './styles.module.scss';
import { CarCard } from '@components/CarCard';
import Link from 'next/link';
import { carsData } from '@components/Marketplace/constants';

export const Marketplace = () => {
  return (
    <div className={styles['marketplace']}>
      <div className={styles['wrapper']}>
        <h1 className={styles['marketplace__title']}>Результаты поиска</h1>
        <div className={styles['marketplace__content']}>
          <div className={styles['marketplace__filter']}></div>
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
