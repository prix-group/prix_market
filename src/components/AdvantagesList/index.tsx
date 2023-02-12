import { FC } from 'react';
import { advantageContent } from '@components/JorneyMap/constants';
import { Advantage } from '@components/JorneyMap';

export const AdvantagesList: FC = () => {
  return (
    <>
      {advantageContent.map((item) => {
        return (
          <Advantage key={item.order} order={item.order} text={item.text} />
        );
      })}
    </>
  );
};
