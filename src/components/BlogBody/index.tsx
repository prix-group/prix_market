import styles from './styles.module.scss';
import { StandardPost } from '@components/Posts/StandardPost';
import { postData } from '@components/BlogBody/constants';
import { MajorPost } from '@components/Posts/MajorPost';
import { useRouter } from 'next/router';

export const BlogBody = () => {
  const router = useRouter();

  return (
    <div className={styles.blog}>
      <div className={styles['blog__wrapper']}>
        <h1 className={styles['blog__heading']}>Блог</h1>
        <p className={styles.routeback} onClick={() => router.back()}>
          <span className={styles.arrow}>&#8592;</span> Вернуться назад
        </p>
        <div className={styles['flex-container']}>
          {' '}
          {/* TODO: REFACTOR TO GRID CONTAINER */}
          {postData.map((item) =>
            item.major ? (
              <MajorPost
                key={item.id}
                image={item.image.src}
                title={item.title}
                date={item.date}
              />
            ) : (
              <StandardPost
                key={item.id}
                image={item.image.src}
                title={item.title}
                date={item.date}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};
