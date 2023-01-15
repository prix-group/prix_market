import styles from "./styles.module.scss"
import {FC} from "react";

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.wrapper}>
                <div className={styles.flex}>
                    <div className={styles.holdingInfo}>
                        <p className={styles['holdingInfo--title']}>
                            ТОО "PRIX.KZ"
                        </p>
                        <p className={styles['holdingInfo--description']}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci cumque distinctio doloribus illo illum inventore
                            quod saepe. Et laudantium maiores natus nihil sint voluptate,
                            voluptates!
                        </p>
                    </div>
                    <div className={styles.lists}>
                        <div className="footer__company">
                            <p className={styles['list--title']}>
                                Компания
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>
                                        О Нас
                                    </a>
                                </li>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>
                                        Преимущества
                                    </a>
                                </li>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>
                                        Миссия
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__company">
                            <p className={styles['list--title']}>
                                Справка
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>Служба Поддержки</a>
                                </li>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>Конфиденциальность</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__company">
                            <p className={styles['list--title']}>
                                Ресурсы
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>FAQ</a>
                                </li>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>YouTube</a>
                                </li>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>How-to Blog</a>
                                </li>
                                <li className={styles.link}>
                                    <a href="#" className={styles.anchor}>Развитие</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; Copyright 2022, Все права защищены
                    </p>
                    <ul className={styles.social}>
                        <li className={styles.icon}>
                            <a target="_blank" href="https://www.linkedin.com/company/prixkz" rel="noreferrer"></a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" href="https://www.instagram.com" rel="noreferrer"></a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" href="https://www.facebook.com" rel="noreferrer"></a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" href="https://www.github.io" rel="noreferrer"></a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
