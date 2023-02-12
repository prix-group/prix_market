import styles from './styles.module.scss';
import { FC, useEffect, useState, MouseEvent } from 'react';
import cn from 'classnames';
import burgerButtonIcon from '@public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '@public/images/cancel-close-svgrepo-com.svg';
import Link from 'next/link';
import { links } from '@components/Header/constants';
import { Menu } from '@components/Menu';
import { NavItem } from '@components/NavItem';
import { useRouter } from 'next/router';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavMenuOpen = () => setIsOpen((isOpen) => !isOpen);

  const handleLogoClick = (e: MouseEvent<HTMLElement>) => {
    if (router.route === '/') {
      e.preventDefault();

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    isOpen
      ? document.body.classList.add('menu-opened')
      : document.body.classList.remove('menu-opened');
  }, [isOpen]);

  return (
    <header
      className={cn(styles['header'], {
        [styles['header--white']]: isOpen,
      })}
    >
      <div className={cn(styles['wrapper'])}>
        <Link href={'/'} className={styles['link']} onClick={handleLogoClick}>
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
