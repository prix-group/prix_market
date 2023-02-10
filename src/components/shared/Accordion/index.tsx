import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import arrowSVG from '@public/images/arrow-down-bold-svgrepo-com.svg'

const data = [
  {
    id: 1,
    q: 'Для более подробной информации по Казахстанской компании см?',
    a: 'Для более подробной информации по Казахстанской компании см!',
  },
  {
    id: 2,
    q: 'Для более подробной информации по Казахстанской компании см?',
    a: 'Для более подробной информации по Казахстанской компании см!',
  },
  {
    id: 3,
    q: 'Для более подробной информации по Казахстанской компании см?',
    a: 'Для более подробной информации по Казахстанской компании см!',
  },
];

const qnsStates = (length: number) => Array(length).fill(false);

export const Accordion: FC = () => {
  const [qnState, setQnState] = useState(qnsStates(data.length));

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    const id: string = event.currentTarget.id;

    setQnState((prevState) => {
      prevState[+id] = !prevState[+id];

      return [...prevState];
    });
  };

  return (
    <div className={styles['accordion']}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            id={String(index)}
            className={styles['accordion__wrapper']}
            onClick={onClick}
          >
            <div className={styles['accordion__item']}>
              <span className={styles['accordion__item-question']}>
                {item.q}
              </span>
              <img
                src={arrowSVG.src}
                alt="arrow"
                className={cn(styles['accordion__arrow'], {
                  [styles['accordion__arrow--open']]: qnState[index],
                })}
              />
            </div>

            <span
              className={cn(styles['accordion__item-answer'], {
                [styles['accordion__item-answer--open']]: qnState[index],
              })}
            >
              {item.a}
            </span>
          </div>
        );
      })}
    </div>
  );
}
