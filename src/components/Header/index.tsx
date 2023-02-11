import styles from './styles.module.scss';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import burgerButtonIcon from '@public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '@public/images/cancel-close-svgrepo-com.svg';
import Link from 'next/link';
import { links } from '@components/Header/constants';
import { Menu } from '@components/Menu';
import { NavItem } from '@components/NavItem';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenuOpen = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    isOpen
      ? document.body.classList.add('menu-opened')
      : document.body.classList.remove('menu-opened');
  }, [isOpen]);

  return (
    <header
      className={cn(styles['header'], { [styles['header--white']]: isOpen })}
    >
      <div className={styles['wrapper']}>
        <Link href={'/'} className={styles['link']}>
          <h1
            className={cn(styles['logo'], { [styles['logo--white']]: isOpen })}
          >
            prix
          </h1>
        </Link>

        <button
          className={cn(styles['menu-button'], {
            [styles['menu-button--close']]: isOpen,
          })}
          onClick={toggleNavMenuOpen}
        >
          <img
            className={styles['menu-button__icon']}
            src={isOpen ? closeButtonIcon.src : burgerButtonIcon.src}
            alt={'button icon'}
          />
        </button>
        <div className={styles['header__content']}>
          <nav className={styles['navigation']}>
            <ul className={styles['navigation__list']}>
              {links.map((item) => {
                return (
                  <NavItem
                    key={item.section}
                    text={item.text}
                    menuItems={item.submenu}
                    section={item.section}
                    link={item.link}
                  />
                );
              })}
            </ul>
          </nav>
        </div>

        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};
