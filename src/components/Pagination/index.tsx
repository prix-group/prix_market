import styles from './styles.module.scss';
import { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';

interface IPagination {
  totalCards: number;
  cardsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IPagination> = ({
  totalCards,
  cardsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <ul className={styles['pagination']}>
      {pages.map((item, index) => {
        // eslint-disable-next-line no-return-assign
        return (
          <li
            className={cn(styles['pagination__page-number'],
              { [styles['pagination__page-number--active']]: index === currentPage }
            )}
            key={index}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
