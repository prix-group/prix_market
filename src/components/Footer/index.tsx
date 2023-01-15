import styles from "./styles.module.scss"
import {FC} from "react";
import { snListContent, footerListContent } from "@/components/Footer/constants";

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.wrapper}>
                <div className={styles.flex}>
                    <div className={styles.holdingInfo}>
                        <p className={styles['holdingInfo--title']}>
                            ТОО `PRIX.KZ`
                        </p>
                        <p className={styles['holdingInfo--description']}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci cumque distinctio doloribus illo illum inventore
                            quod saepe. Et laudantium maiores natus nihil sint voluptate,
                            voluptates!
                        </p>
                    </div>
                    <div className={styles.lists}>
                        { footerListContent.map(item => {
                            return (
                                <div className="footer__company" key={item.id}>
                                    <p className={styles['list--title']}>
                                        {item.title}
                                    </p>
                                    <ul className={styles.list}>
                                        {item.list.map(item => {
                                            return (
                                                <li className={styles.link} key={item.id}>
                                                    <a href={item.url} className={styles.anchor}>
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }) }
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; Copyright 2022, Все права защищены
                    </p>
                    <ul className={styles.social}>
                        { snListContent.map( (item) => {
                            return (
                                <li className={styles['social--icon']} key={item.name}>
                                    <a className={styles['social--anchor']} target="_blank" href={item.url} rel="noreferrer">
                                        <img
                                            className={styles['social--image']}
                                            src={item.image.src}
                                            alt={item.alt}
                                        />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </footer>
    )
}
