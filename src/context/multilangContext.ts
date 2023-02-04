import { createContext } from 'react';

export const multilangContext = createContext();

export const translations = {
  en: {
    intro: 'Online car purchase service',
  },
  ru: {
    intro: 'Онлайн-сервис покупки авто',
  },
};
