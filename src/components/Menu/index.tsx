import styles from './styles.module.scss';
import { Dispatch, FC, SetStateAction } from 'react';
import { SocialNetworks } from '@components/SocialNetworks';
import { links } from '@components/Header/constants';

interface IMenu {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Menu: FC<IMenu> = ({ setIsOpen }) => {
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles['navigation']}>
      <div className={styles['container']}>
        <button className={styles['button']} onClick={closeMenu}>
          Связаться с нами
        </button>
        <ul className={styles['list']}>
          {links.map((link, index) => {
            return (
              <li key={index} className={styles['item']} onClick={closeMenu}>
                {link.text}
              </li>
            );
          })}
        </ul>
        <p className={styles['note']}>Social Networks</p>
        <SocialNetworks />
      </div>
    </div>
  );
};
