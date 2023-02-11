import styles from './styles.module.scss';
import { FC, useState } from 'react';
import { Dropdown } from '@components/Dropdown';
import Link from 'next/link';
import arrowIcon from '@public/images/arrow-up-bold-svgrepo-com.svg';

interface IMenuItem {
  text: string;
  link: string;
}

interface INavItem {
  text: string;
  menuItems?: Array<IMenuItem>;
  section: string;
  link: string;
}

export const NavItem: FC<INavItem> = ({ text, menuItems, section, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  if (menuItems) {
    return (
      <li
        className={styles['nav-item']}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <Link href={link} className={styles['nav-item__link']}>
          {text}
        </Link>
        <img
          className={styles['nav-item__arrow']}
          src={arrowIcon.src}
          alt={'arrow icon'}
        />
        {isOpen && <Dropdown section={section} menuItems={menuItems} />}
      </li>
    );
  }

  return (
    <li
      className={styles['nav-item']}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <Link href={link} className={styles['nav-item__link']}>
        {text}
      </Link>
    </li>
  );
};
