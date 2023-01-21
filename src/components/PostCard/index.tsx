import styles from './styles.module.scss';
import {FC} from "react";
import {BlogTag} from "@/components/Tags/BlogTag";
import cn from "classnames";

export interface IPost {
    image: string,
    title: string,
    date: string,
    major: boolean
}

export const PostCard: FC<IPost> = ({ image, title, date, major}) => {
    return (
        <div className={cn(
            styles['post'],
            { [styles['post--major']]: major }
        )}>
            <div className={cn(
                styles['image-container'],
                { [styles['image-container--major']]: major }
            )}>
                <img
                    className={cn(
                        styles['image'],
                        { [styles['image--major']]: major}
                    )}
                    src={image}
                    alt={'post pic'}
                />
            </div>
            <h2 className={cn(
                styles['title'],
                { [styles['title--major']]: major }
            )}>
                {title}
            </h2>
            <div className={cn(
                styles['flex-container'],
                { [styles['flex-container--major']]: major }
            )}>
                <p className={cn(
                    styles['date'],
                    { [styles['date--major']]: major }
                )}>
                    {date}
                </p>
                <BlogTag />
            </div>
        </div>
    )
}
