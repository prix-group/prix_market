import { FC } from 'react';
import styles from './styles.module.scss';
// @ts-ignore
import FaqQ from 'react-faq-component';

const data = {
  rows: [
    {
      title: 'what is prix.kz?',
      content:
        'prix.kz is a marketplace dapp running on the tao.',
    },
    {
      title: 'why all the dust?',
      content:
        'prix.kz is currently in public aplha and much about it is subject to change. please do not use it for more than testing and amusement for now.',
    },
    {
      title: "what's tao?",
      content: 'tao is a smaller EVM compatible blockchain.',
    },
    {
      title: 'what is prix.kz?',
      content:
        'prix.kz is a marketplace dapp running on the tao.',
    },
    {
      title: 'why all the dust?',
      content:
        'prix.kz is currently in public aplha and much about it is subject to change. please do not use it for more than testing and amusement for now.',
    },
    {
      title: "what's tao?",
      content: 'tao is a smaller EVM compatible.',
    },
  ],
};

const stylesConfig = {
  titleTextColor: 'black',
  rowTitleColor: 'black',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
};

const config = {
  animate: true,
  tabFocus: true,
};

export const FAQ: FC = () => {
  return (
    <section className={styles['FAQ']}>
      <h2 className={styles['FAQ__title']}>Часто Задаваемые Вопросы</h2>
      <div className={styles['FAQ__questions']}>
        <FaqQ data={data} styles={stylesConfig} config={config} />
      </div>
    </section>
  );
};
