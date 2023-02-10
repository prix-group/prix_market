import { FC } from 'react';
import { advantageContent } from '@components/Advantage/constants';
import { Advantage } from '@components/Advantage';

export const AdvantagesList: FC = () => {
  return (
    <>
      {advantageContent.map((item) => {
        return (
          <Advantage
            key={item.type}
            type={item.type}
            flexReverse={item.flexReverse}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            image={item.image.src}
          />
        );
      })}
    </>
  );
};
