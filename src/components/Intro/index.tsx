import styles from './styles.module.scss';
import buyCar from '@public/images/buycar.png';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Онлайн-сервис покупки авто <br /> из-за границы
          </h1>
          <h3 className={styles.subtitle}>
            Безопасный, быстрый и удобный <br />
            способ покупки и доставки авто в Казахстан
          </h3>
        </div>
        <img className={styles.image} src={buyCar.src} alt="main pic" />
      </div>
    </section>
  );
};
