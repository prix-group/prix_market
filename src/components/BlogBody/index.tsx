import styles from './styles.module.scss';
import { PostCard } from '@components/PostCard';
import { postData } from '@components/BlogBody/constants';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useWindowSize } from '@/src/customHooks/useWindowSize';
import { DESKTOP_SIZE } from '@/src/constants';

export const BlogBody = () => {
  const router = useRouter();
  const windowSize = useWindowSize();

  let isDesktop = windowSize.width > DESKTOP_SIZE;

  return (
    <div className={styles.blog}>
      <div className={styles['blog__wrapper']}>
        <h1 className={styles['blog__heading']}>Блог</h1>
        <p className={styles['route-back']} onClick={() => router.back()}>
          <span className={styles.arrow}>&#8592;</span> Вернуться назад
        </p>
        <div className={styles['flex-container']}>
          {/* TODO: REFACTOR TO GRID CONTAINER */}
          {postData &&
            postData.map((item) => (
              <Link
                href={`/blog/${item.id}`}
                key={item.id}
                className={styles['link']}
              >
                <PostCard
                  image={item.image.src}
                  title={item.title}
                  date={item.date}
                  major={isDesktop ? item.major : false}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
