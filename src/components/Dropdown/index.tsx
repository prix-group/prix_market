import styles from './styles.module.scss';
import Link from 'next/link';
import { FC } from 'react';

interface IMenuItems {
  text: string;
  link: string;
}

interface IDropdown {
  section: string;
  menuItems: Array<IMenuItems>;
}

export const Dropdown: FC<IDropdown> = ({ section, menuItems }) => {
  return (
    <ul className={styles['dropdown__list']}>
      {menuItems.map((item) => {
        return (
          <li className={styles['dropdown__item']} key={item.text}>
            <Link href={item.link} className={styles['dropdown__link']}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
