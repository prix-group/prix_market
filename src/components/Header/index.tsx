import styles from './styles.module.scss';
import {FC} from "react";
import cn from 'classnames'
import {HeaderMenu} from "@/components/HeaderMenu";
import burgerButtonIcon from '../../../public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '../../../public/images/cancel-close-svgrepo-com.svg';
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
                        styles['menu-button'],
                        { [styles['menu-button-close']] : isOpen }
                    )}
                    onClick={toggleNavMenuOpen}
                >
                    <img
                        className={styles['menu-button-icon']}
                        src={isOpen ? closeButtonIcon.src : burgerButtonIcon.src}
                        alt={'button icon'}
                    />
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
