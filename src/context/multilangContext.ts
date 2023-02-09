import { createContext } from 'react';

export interface IIntroLang {
  lang: 'en' | 'ru';
  intro: {
    title: string;
    subtitle: string;
  };
}

export type IntroTranslations = Record<string, IIntroLang>;

export const translations: IntroTranslations = {
  en: {
    lang: 'en',
    intro: {
      title: 'Online car purchase service',
      subtitle:
        'Safe, fast and convenient way of buying and delivering a car to Kazakhstan',
    },
  },
  ru: {
    lang: 'ru',
    intro: {
      title: 'Онлайн-сервис покупки авто',
      subtitle:
        'Безопасный, быстрый и удобный способ покупки и доставки авто в Казахстан',
    },
  },
};

export const multilangContext = createContext(translations['en']);
