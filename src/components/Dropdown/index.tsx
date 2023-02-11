import styles from './styles.module.scss';
import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';

interface IDropdown {
  section: string;
  menuItems: any;
}

export const Dropdown: FC<IDropdown> = ({ section, menuItems }) => {
  return (
    <ul className={styles['dropdown__list']}>
      {menuItems.map((item: any) => {
        return (
          <li
            className={cn(
              styles['dropdown__item'],
              styles[`dropdown__item--${section}`],
            )}
            key={item.text}
          >
            <Link href={item.link} className={styles['dropdown__link']}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
