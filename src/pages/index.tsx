import { Intro } from '@components/Intro';
import { Blog } from '@components/Blog';
import { Features } from '@components/Features';
import { Advantage } from '@components/Advantage';
import { advantageContent } from '@components/Advantage/constants';
import { Community } from '@components/Community';
import { Strategy } from '@components/Strategy';
import { Calculator } from '@components/Calculator';

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      {advantageContent.map((item) => {
        return (
          <Advantage
            key={item.type}
            type={item.type}
            flexReverse={item.flexReverse}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            image={item.image.src}
          />
        );
      })}
      <Strategy />
      <Calculator />
      <Blog />
      <Community />
    </>
  );
}
