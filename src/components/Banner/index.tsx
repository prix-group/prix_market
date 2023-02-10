import { FC } from 'react';
import styles from './styles.module.scss';
import threePic from '@public/images/three.svg';

export const Banner: FC = () => {
  return (
    <div className={styles['banner']}>
      <div className={styles['banner__content']}>
        <p className={styles['banner__description']}>
          Узнайте больше о сотрудничестве с Prix
        </p>
        <img
          className={styles['banner__image']}
          src={threePic.src}
          alt="banner element"
        />

        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <label className={styles.inputLabel}>
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="youremail@example.kz"
              />
            </label>

            <button className={styles.button} type="submit">
              Выслать
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
