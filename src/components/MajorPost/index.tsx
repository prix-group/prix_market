import styles from './styles.module.scss';
import {FC} from "react";

interface IStandardPost {
    image: string,
    title: string,
    date: string,
}

export const MajorPost: FC<IStandardPost> = ({ image, title, date }) => {
    return (
        <div className={styles.post}>
            <div className={styles['image-container']}>
                <img
                    className={styles.image}
                    src={image}
                    alt={'post pic'}
                />
            </div>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles['flex-container']}>
                <p className={styles.date}>
                    {date}
                </p>
                <p className={styles.tag}>
                    Блог
                </p>
            </div>
        </div>
    )
}
