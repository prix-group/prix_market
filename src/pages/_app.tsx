import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import '@styles/fonts.scss';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
