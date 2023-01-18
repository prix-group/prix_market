import styles from './styles.module.scss'
import {Dispatch, FC, SetStateAction} from "react";
import {SocialNetworks} from "@/components/SocialNetworks";

interface IHeaderMenu {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMenu: FC<IHeaderMenu> = ({ setIsOpen }) => {
    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.container}>
                    <button
                        className={styles['button']}
                        onClick={handleClick}
                    >
                        Связаться с нами
                    </button>
                    <ul className={styles['list']}>
                        <li className={styles['item']} onClick={handleClick}>О нас</li>
                        <li className={styles['item']} onClick={handleClick}>Сотрудничество</li>
                        <li className={styles['item']} onClick={handleClick}>Блог</li>
                    </ul>
                    <p className={styles.note}>Social Networks</p>
                    <SocialNetworks />
                </div>
            </div>
        </>
    )
}
