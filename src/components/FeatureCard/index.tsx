import styles from "./styles.module.scss"
import {FC} from "react";
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";

interface FeatureCard {
    id: string,
    src: string,
    alt: string,
    title: string,
    text: string
}

export const FeatureCard = ({ id, src, alt, title, text } : FeatureCard) => {
    return (
        <div className={styles.card} id={id}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={src} alt={alt} />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{text}</p>
        </div>
    )
}
