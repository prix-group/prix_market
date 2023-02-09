import { FC } from 'react';
import styles from './styles.module.scss';
import paperPlanePic from '@public/images/paper-plane.png';

export const Banner: FC = () => {
  return (
    <div className={styles['banner']}>
      <div className={styles['banner__content']}>
        <p className={styles['banner__description']}>Узнайте больше о сотрудничестве с Prix</p>
        <img
          className={styles['banner__image']}
          src={paperPlanePic.src}
          alt="paper plane"
        />

        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <label className={styles.inputLabel}>
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="exmaple@example.kz"
              />
            </label>
            <button className={styles.button} type="submit">
              Выслать
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
};
