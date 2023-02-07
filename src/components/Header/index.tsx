import styles from './styles.module.scss';
import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';
import burgerButtonIcon from '@public/images/menu-burger-horizontal-svgrepo-com .svg';
import closeButtonIcon from '@public/images/cancel-close-svgrepo-com.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '@components/Header/constants';
import { Menu } from '@components/Menu';
import { multilangContext } from '@/src/context/multilangContext';
import { DESKTOP_SIZE } from '@/src/constants';
import { useWindowSize } from '@/src/customHooks/useWindowSize';
import { LangBox } from '@components/LangBox';

interface IHeader {
  setLang: Dispatch<SetStateAction<string>>;
}

export const Header: FC<IHeader> = ({ setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const windowSize = useWindowSize();
  let isDesktop = windowSize.width >= DESKTOP_SIZE;

  const router = useRouter();

  const translation = useContext(multilangContext);

  const toggleNavMenuOpen = () => setIsMenuOpen((isOpen) => !isOpen);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add('menu-opened')
      : document.body.classList.remove('menu-opened');
  }, [isMenuOpen]);

  return (
    <header
      className={cn(styles['header'], {
        [styles['header--white']]: isMenuOpen,
      })}
    >
      <div className={styles['content']}>
        <Link
          href={'/'}
          className={styles['link']}
          onClick={() => setIsMenuOpen(false)}
        >
          <h1
            className={cn(styles['logo'], {
              [styles['logo--white']]: isMenuOpen,
            })}
          >
            prix
          </h1>
        </Link>

        <button
          className={cn(styles['menu-button'], {
            [styles['menu-button--close']]: isMenuOpen,
          })}
          onClick={toggleNavMenuOpen}
        >
          <img
            className={styles['menu-button__icon']}
            src={isMenuOpen ? closeButtonIcon.src : burgerButtonIcon.src}
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
                    {translation?.lang === 'en' ? item.text.en : item.text.ru}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {isDesktop && <LangBox setLang={setLang} />}
        {isMenuOpen && <Menu setIsOpen={setIsMenuOpen} setLang={setLang} />}
      </div>
    </header>
  );
};
