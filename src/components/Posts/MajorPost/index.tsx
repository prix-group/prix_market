import styles from './styles.module.scss';
import {FC} from "react";
import {IPost} from "@/components/Posts/types";

export const MajorPost: FC<IPost> = ({ image, title, date }) => {
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
