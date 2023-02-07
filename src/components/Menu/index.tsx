import styles from './styles.module.scss';
import { Dispatch, FC, SetStateAction, useContext } from 'react';
import { SocialNetworks } from '@components/SocialNetworks';
import { links } from '@components/Header/constants';
import { multilangContext } from '@/src/context/multilangContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { LangBox } from '@components/LangBox';

interface IMenu {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setLang: Dispatch<SetStateAction<string>>;
}

export const Menu: FC<IMenu> = ({ setIsOpen, setLang }) => {
  const closeMenu = () => setIsOpen(false);

  const router = useRouter();

  const translation = useContext(multilangContext);

  return (
    <div className={styles['navigation']}>
      <div className={styles['container']}>
        <button className={styles['button']} onClick={closeMenu}>
          Связаться с нами
        </button>
        <ul className={styles['list']}>
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={styles['list__item']}
                onClick={closeMenu}
              >
                <Link
                  className={cn(styles['list__link'], {
                    [styles['list__link--active']]:
                      router.pathname === link.link,
                  })}
                  href={link.link}
                >
                  {link.text[translation.lang]}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className={styles['note']}>Social Networks</p>
        <SocialNetworks />
        <LangBox setLang={setLang} />
      </div>
    </div>
  );
};
