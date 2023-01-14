import styles from './styles.module.scss';
import { PaymentListContent } from "@/components/PaymentAdvantageList/utils";

export const PaymentAdvantageList = () => {
    return (
        <>
            <ul className={styles.list}>
                {PaymentListContent.map( (item) => {
                    return (
                        <li className={styles.member} key={item.id}>
                            <span className={styles.icon}>
                                <img alt="icon" className={styles.iconSVG} src={item.icon}/>
                            </span>
                            <h4 className={styles.heading}>
                                {item.heading}
                            </h4>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
