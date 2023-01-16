import styles from "./styles.module.scss"
import rightPic from "../../../public/images/mercedesE63SW213.jpg"
import leftPic from "../../../public/images/bmwf90m5.jpg"
import {FC} from "react";

export const Blog: FC = () => {
    return (
        <section className={styles.blog}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    Читайте блог, чтобы узнавать об обновлениях
                </h2>
                <h3 className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat in laborum neque perspiciatis vero?
                </h3>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div className={styles.imageContainer}>
                            <img alt="blog image" className={styles.image} src={leftPic.src} />
                        </div>
                        <p className={styles.cite}>
                            Декабрь, 2022.
                        </p>
                        <p className={styles.description}>
                            15 лучших способов выбрать правильный автомобиль для себя
                        </p>
                        <a href="#" className={styles.link}>Узнать подробнее &#10548;</a>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageContainer}>
                            <img alt="news image" className={styles.image} src={rightPic.src} />
                        </div>
                        <p className={styles.cite}>
                            Декабрь, 2022.
                        </p>
                        <p className={styles.description}>
                            Самые выгодные предложения импортных люксовых автомобилей
                        </p>
                        <a href="#" className={styles.link}>Узнать подробнее &#10548;</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

