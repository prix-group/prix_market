import '@styles/fonts.scss';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { multilangContext, translations } from '../context/multilangContext';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState('ru');

  return (
    <multilangContext.Provider value={translations[lang]}>
      <div className={'container'}>
        <Header setLang={setLang} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </multilangContext.Provider>
  );
}
