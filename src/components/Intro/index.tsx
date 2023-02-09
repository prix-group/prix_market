import styles from './styles.module.scss';
import { useContext } from 'react';
import { multilangContext } from '@/src/context/multilangContext';
import buyCar from '@public/images/buycar.png';

export const Intro = () => {
  const translation = useContext(multilangContext);

  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{translation?.intro.title}</h1>
          <h3 className={styles.subtitle}>{translation?.intro.subtitle}</h3>
        </div>
        <img className={styles.image} src={buyCar.src} alt="main pic" />
      </div>
    </section>
  );
};
