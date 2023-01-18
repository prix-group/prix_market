import styles from './styles.module.scss';
import {FC} from "react";
import cn from 'classnames'
import {HeaderMenu} from "@/components/HeaderMenu";
import burgerButtonIcon from '../../../public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '../../../public/images/cancel-close-svgrepo-com.svg';
import Link from "next/link";
import {useRouter} from "next/router";
const bodyScrollLock = require('body-scroll-lock');

interface IHeader {
    isOpen: boolean,
    setIsOpen: any
}

export const Header: FC<IHeader> = ({ isOpen, setIsOpen }) => {
    const router = useRouter();

    console.log('router', router.pathname)

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
                <Link
                    href={'/'}
                    className={styles.link}>
                    <h1 className={cn(
                        styles.logo,
                        { [styles['logo--white']]: isOpen }
                    )}>
                        prix
                    </h1>
                </Link>
                <button
                    className={cn(
                        styles['menu-button'],
                        { [styles['menu-button--close']] : isOpen }
                    )}
                    onClick={toggleNavMenuOpen}
                >
                    <img
                        className={styles['menu-button__icon']}
                        src={isOpen ? closeButtonIcon.src : burgerButtonIcon.src}
                        alt={'button icon'}
                    />
                </button>
                { isOpen && <HeaderMenu setIsOpen={toggleNavMenuOpen}/> }
                <nav className={styles.navigation}>
                    <ul className={styles['navigation__list']}>
                        <li className={styles['navigation__item']}>
                            <Link
                                href={'/about-us'}
                                className={cn(
                                styles.link,
                                {[styles['link--active']]: router.pathname === '/about-us'}
                            )}>
                                О нас
                            </Link>
                        </li>
                        <li className={styles['navigation__item']}>
                            <Link
                                href={'/partnership'}
                                className={cn(
                                styles.link,
                                {[styles['link--active']]: router.pathname === '/partnership'}
                            )}>
                                Сотрудничество
                            </Link>
                        </li>
                        <li className={styles['navigation__item']}>
                            <Link
                                href={'/blog'}
                                className={cn(
                                styles.link,
                                {[styles['link--active']]: router.pathname === '/blog'}
                            )}>
                                Блог
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
