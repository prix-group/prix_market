import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import arrowSVG from '@public/images/arrow-down-bold-svgrepo-com.svg';
import { IAccordionItem } from '@components/shared/Accordion/types';

const qnsStates = (length: number) => Array(length).fill(false);

interface IAccordion {
  data: IAccordionItem[];
}

export const Accordion: FC<IAccordion> = ({ data }) => {
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
          <div key={index} className={styles['accordion__wrapper']}>
            <div
              id={String(index)}
              className={styles['accordion__item']}
              onClick={onClick}
            >
              <span className={styles['accordion__item-question']}>
                {item.question}
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
              {item.answer}
            </span>
          </div>
        );
      })}
    </div>
  );
}
