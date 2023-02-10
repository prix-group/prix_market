import { Intro } from '@components/Intro';
import { Blog } from '@components/Blog';
import { Features } from '@components/Features';
import { Strategy } from '@components/Strategy';
import { Calculator } from '@components/Calculator';
import { Banner } from '@components/Banner';
import { AdvantagesList } from '@components/AdvantagesList';
import { FAQ } from '@components/FAQ';

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      <AdvantagesList />
      <Strategy />
      <Calculator />
      <Blog />
      <FAQ />
      <Banner />
    </>
  );
}
