import styles from './styles.module.scss';
import {Dispatch, FC, SetStateAction} from "react";
import cn from 'classnames'
import {HeaderMenu} from "@/components/HeaderMenu";
import burgerButtonIcon from '../../../public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '../../../public/images/cancel-close-svgrepo-com.svg';
import Link from "next/link";
import {useRouter} from "next/router";
import {links} from "@/components/Header/constants";
const bodyScrollLock = require('body-scroll-lock');

interface IHeader {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header: FC<IHeader> = ({ isOpen, setIsOpen }) => {
    const router = useRouter();

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
                        { links.map( item => {
                            return (
                                <li className={styles['navigation__item']} key={item.link}>
                                    <Link
                                        href={item.link}
                                        className={cn(
                                            styles.link,
                                            {[styles['link--active']]: router.pathname === item.link}
                                        )}>
                                        {item.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
