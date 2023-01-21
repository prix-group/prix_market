import styles from './styles.module.scss';

export const Community = () => {
  return (
    <section className={styles.community}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Узнайте больше о сотрудничестве с{' '}
          <span className={styles.prix}>prix</span>
        </h2>
        <h3 className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut eum
          minima minus optio totam.
        </h3>
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
        <p className={styles.note}>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>
    </section>
  );
};
