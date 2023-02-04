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
import { IIntroLang, multilangContext } from '@/src/context/multilangContext';

interface IHeader {
  setLang: Dispatch<SetStateAction<string>>;
}

export const Header: FC<IHeader> = ({ setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const translation = useContext(multilangContext) as IIntroLang;

  const toggleNavMenuOpen = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    isOpen
      ? document.body.classList.add('menu-opened')
      : document.body.classList.remove('menu-opened');
  }, [isOpen]);

  const handleLanguageSwitch = () => {
    translation && setLang(translation.lang);
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
                    {translation?.lang}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles['header__language-button']}>
          <p
            className={styles['header__language-content']}
            onClick={handleLanguageSwitch}
          >
            {translation?.lang}
          </p>
        </div>
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};
