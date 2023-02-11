import { useRouter } from 'next/router';
import { useWindowSize } from '@hooks/useWindowSize';
import { DESKTOP_SIZE } from '@shared/constants';
import { postData } from '../../views/constants';
import { PostCard } from '@components/PostCard';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function BlogPage() {
  const router = useRouter();
  const windowSize = useWindowSize();

  const isDesktop = windowSize.width > DESKTOP_SIZE;

  const back = () => router.back();

  return (
    <div className={styles.blog}>
      <div className={styles['blog__wrapper']}>
        <h1 className={styles['blog__heading']}>Блог</h1>
        <p className={styles['route-back']} onClick={back}>
          <span className={styles.arrow}>&#8592;</span> Вернуться назад
        </p>
        <div className={styles['flex-container']}>
          {postData?.map((item) => (
            <Link
              href={`/blog/${item.id}`}
              key={item.id}
              className={styles['link']}
            >
              <PostCard
                image={item.image?.src}
                title={item.title}
                date={item.date}
                major={isDesktop && item.major}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
