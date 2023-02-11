import { Intro } from '@components/Intro';
import { Blog } from '@components/Blog';
import { Features } from '@components/Features';
import { Advantage } from '@components/JorneyMap';
import { advantageContent } from '@components/JorneyMap/constants';
import { Community } from '@components/Community';

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      {advantageContent.map((item) => {
        return (
          <Advantage
            key={item.type}
            number={item.number}
            type={item.type}
            flexReverse={item.flexReverse}
            text={item.text}
            image={item.image.src}
          />
        );
      })}
      <Blog />
      <Community />
    </>
  );
}
