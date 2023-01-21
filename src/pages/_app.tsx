import '@styles/fonts.scss';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={'container'}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
