import '@styles/fonts.scss';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={'container'}>
      <Header isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
