import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import '@styles/fonts.scss';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import favicon from '@public/images/icon.png';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
        <title>Prix - сервис покупки авто из-за границы</title>
      </Head>

      <div className={'container'}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
