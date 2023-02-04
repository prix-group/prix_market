import styles from './styles.module.scss';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import burgerButtonIcon from '@public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '@public/images/cancel-close-svgrepo-com.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '@components/Header/constants';
import { Menu } from '@components/Menu';

export const Header: FC = ({ setLang, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavMenuOpen = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    isOpen
      ? document.body.classList.add('menu-opened')
      : document.body.classList.remove('menu-opened');
  }, [isOpen]);

  const handleLanguageSwitch = () => {
    lang === 'en' ? setLang('ru') : setLang('en');
  };

  return (
    <header
      className={cn(styles['header'], { [styles['header--white']]: isOpen })}
    >
      <div className={styles['content']}>
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

        <nav className={styles['navigation']}>
          <ul className={styles['navigation__list']}>
            {links.map((item) => {
              return (
                <li className={styles['navigation__item']} key={item.link}>
                  <Link
                    href={item.link}
                    className={cn(styles['link'], {
                      [styles['link--active']]: router.pathname === item.link,
                    })}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles['header__language-button']}>
          <p className={styles['header__language-content']} onClick={handleLanguageSwitch}>
            {lang === 'ru' ? 'en' : 'ru'}
          </p>
        </div>
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};
