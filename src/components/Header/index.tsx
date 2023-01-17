import styles from './styles.module.scss';
import {FC} from "react";
import cn from 'classnames'
import {HeaderMenu} from "@/components/HeaderMenu";
const bodyScrollLock = require('body-scroll-lock');

interface IHeader {
    isOpen: boolean,
    setIsOpen: any
}

export const Header: FC<IHeader> = ({ isOpen, setIsOpen }) => {
    const toggleNavMenuOpen = () => {
        if (isOpen) {
            setIsOpen(false);
            bodyScrollLock.enableBodyScroll(document);
        } else {
            setIsOpen(true);
            bodyScrollLock.disableBodyScroll(document);
        }
    }

    return (
        <header className={cn(
            styles.header,
            { [styles['header--white']]: isOpen }
        )}>
            <div className={styles.content}>
                <h1 className={cn(
                    styles.logo,
                    { [styles['logo--white']]: isOpen }
                )}>
                    prix
                </h1>
                <button
                    className={cn(
                        styles['menu-burger-button'],
                        { [styles['menu-burger-button-open']]: !isOpen },
                        { [styles['menu-burger-button-close']] : isOpen }
                    )}
                    onClick={toggleNavMenuOpen}
                >
                </button>
                { isOpen && <HeaderMenu setIsOpen={toggleNavMenuOpen}/> }
                <nav className={styles.navigation}>
                    <ul className={styles['navigation--list']}>
                        <li className={styles['navigation--item']}>О нас</li>
                        <li className={styles['navigation--item']}>Сотрудничество</li>
                        <li className={styles['navigation--item']}>Блог</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
