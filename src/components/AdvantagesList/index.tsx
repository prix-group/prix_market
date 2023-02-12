import { FC } from 'react';
import { advantageContent } from '@components/JorneyMap/constants';
import { Advantage } from '@components/JorneyMap';

const words = ['ссылку', 'Удобную', 'безопасность'];

export const AdvantagesList: FC = () => {
  return (
    <>
      {advantageContent.map((item, index) => {
        return (
          <Advantage
            key={index}
            index={index}
            order={item.order}
            text={item.text}
            image={item.image}
            animation={item.animation}
            underlinedWord={words[index]}
          />
        );
      })}
    </>
  );
};
