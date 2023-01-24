import styles from './styles.module.scss';
import viewIcon from '../../../public/images/view-icon.svg';
import { FC } from 'react';

interface ICarCard {
  image: object;
  make: string;
  model: string;
  year: number;
  specs: {
    type: string;
    drive: string;
    gearbox: string;
    fuel: string;
    volume: string;
    mileage: string;
  };
  price: string;
  location: string;
}

export const CarCard: FC<ICarCard> = ({
  image,
  make,
  model,
  year,
  specs,
  price,
  location,
}) => {
  return (
    <>
      <div className={styles['card']}>
        <div className={styles['image-container']}>
          <img className={styles['image']} src={image.src} alt={''} />
        </div>
        <div className={styles['car-info']}>
          <p className={styles['car-info__title']}>
            {make} {model}
            <span className={styles['car-info__age']}> {year} год</span>
          </p>
          <p className={styles['car-info__price']}>{price} тг</p>
          <div className={styles['car-info__specs']}>
            <p className={styles['car-info__spec']}>{specs.type}</p>
            <p className={styles['car-info__spec']}>{specs.drive}</p>
            <p className={styles['car-info__spec']}>{specs.gearbox}</p>
            <p className={styles['car-info__spec']}>{specs.fuel}</p>
            <p className={styles['car-info__spec']}>{specs.volume}</p>
            <p className={styles['car-info__spec']}>{specs.mileage}</p>
          </div>
          <div className={styles['car-info__secondary']}>
            <p className={styles['car-info__location']}>{location}</p>
            <div className={styles['car-info__views']}>
              <span className={styles['car-info__counter']}>9</span>
              <img
                className={styles['car-info__views-icon']}
                src={viewIcon.src}
                alt={'view icon'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
