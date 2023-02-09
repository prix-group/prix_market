import styles from './styles.module.scss';
import { PaymentAdvantageList } from '@components/PaymentAdvantageList';
import { FC } from 'react';
import cn from 'classnames';
import carpic from '@public/images/car-white-svgrepo-com.svg'
import loopa from '@public/images/search-svgrepo-com.svg'

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
  // const handleContentSwitch = (type: string) => {
  //   switch (type) {
  //     case 'payment':
  //       return <PaymentAdvantageList />;
  //     default:
  //       return (
  //         <>
  //           <p className={styles.text}>{text}</p>
  //           <a className={styles.link} href="#">
  //             Узнать подробнее
  //           </a>
  //         </>
  //       );
  //   }
  // };

  return (
    <section className={styles['journey-map']}>
      <div className={styles['wrapper']}>
        <div className={styles['content']}>
          <h2 className={styles['content__step']}>1</h2>
          <p className={styles['content__description']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, veniam.
          </p>
        </div>
        <div className={styles['illustration']}>
          <div className={styles['illustration__urlInput']}>
            <p className={styles['illustration__url']}>www.dreamcar.com</p>
            <img className={styles['illustration__svg']} src={loopa.src}/>
          </div>
          <img className={styles['illustration__image']} src={carpic.src} />
          <p className={styles['illustration__description']}>МАШИНА МЕЧТЫ</p>
        </div>
      </div>
    </section>
  );
};
