import cn from 'classnames';
import { ReactElement } from 'react';

export const parseToUnderline = (
  text: string,
  word: string,
  block: string,
  styles: any,
): ReactElement => {
  const words = text.split(' ');

  return (
    <>
      {words.map((wordItem, index) => {
        if (wordItem === word) {
          return (
            <span
              key={index}
              className={cn(
                styles[`${block}__title-line`],
                styles[`${block}__title-line--underlined`],
              )}
            >
              {wordItem}
            </span>
          );
        }

        return (
          <span key={index} className={styles[`${block}__title-line`]}>
            {wordItem}
          </span>
        );
      })}
    </>
  );
}

