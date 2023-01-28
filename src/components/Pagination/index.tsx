import styles from './styles.module.scss';
import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { types } from 'sass';
import Number = types.Number;

interface IPagination {
  totalCards: number;
  cardsPerPage: number;
  currentPage: number;
}

export const Pagination: FC<IPagination> = ({
  totalCards,
  cardsPerPage,
  currentPage,
}) => {
  const router = useRouter();
  const currentPageNumber = router.query;

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  const isLastPage = pages.length === +currentPageNumber.pageId;
  const isFirstPage = +currentPageNumber.pageId === 1;

  return (
    <div className={styles['pagination']}>
      {!isFirstPage && (
        <Link href={`/market/${+currentPageNumber?.pageId - 1}`}>Previous</Link>
      )}
      <ul className={styles['pagination__list']}>
        {pages.map((item, index) => {
          const pageNumber = index + 1;
          return (
            <li className={cn(styles['pagination__page-number'])} key={index}>
              <Link
                className={cn(styles['pagination__page-link'], {
                  [styles['pagination__page-link--active']]:
                    currentPageNumber.pageId === String(pageNumber),
                })}
                href={`/market/${pageNumber}`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      {!isLastPage && (
        <Link
          className={cn(
            styles['pagination__page-link'],
            styles['pagination__page-button'],
          )}
          href={`/market/${+currentPageNumber?.pageId + 1}`}
        >
          Next
        </Link>
      )}
    </div>
  );
};
