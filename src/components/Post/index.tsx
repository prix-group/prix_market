import styles from './styles.module.scss';
import { BlogTag } from '@components/Tags/BlogTag';
import { useRouter } from 'next/router';
import { postData } from '@components/BlogBody/constants';

export const Post = () => {
  const router = useRouter();

  const postInfo = postData.find((item) => item.id === router.query.postId);

  return (
    <div className={styles.post}>
      <div className={styles.wrapper}>
        <p className={styles.routeback} onClick={() => router.back()}>
          <span className={styles.arrow}>&#8592;</span> Вернуться назад
        </p>
        <h1 className={styles['post__title']}>{postInfo && postInfo.title}</h1>
        <div className={styles['post__info']}>
          <BlogTag />
          <p className={styles['post__date']}>{postInfo && postInfo.date}</p>
        </div>
        <h2 className={styles['post__subtitle']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
          autem eum, odit optio soluta.
        </h2>
        <div className={styles['image-container']}>
          <img
            className={styles['image']}
            src={postInfo && postInfo.image.src}
          />
        </div>
        <h3 className={styles['post__subheading']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h3>
        <p className={styles['post__text']}>
          Architecto consectetur, deserunt doloremque fugit ipsum iste iusto,
          magni nemo nobis nostrum optio praesentium quas temporibus veniam,
          vero! Accusamus ad autem, consectetur cupiditate delectus, deleniti
          dolorem ea eaque eius enim error harum illo illum magnam maxime minima
          natus non odio odit optio placeat, quo rerum sapiente ut vero?
          Accusantium adipisci autem commodi consequatur consequuntur corporis
          dolores doloribus, dolorum earum eius eveniet ex excepturi
          exercitationem facere id quae quod voluptatibus? Aperiam, at
          consequatur culpa debitis deleniti, dignissimos dolore earum eius esse
          et in iste minima molestiae necessitatibus nesciunt porro similique,
          sunt. Architecto cupiditate deleniti dolorem dolorum facilis, harum
          itaque maxime nemo repellat sequi, sunt voluptatem? Alias amet animi
          aperiam assumenda commodi consequatur corporis cupiditate dolore
          doloremque eaque enim error, esse explicabo facilis harum in iste modi
          nam necessitatibus nemo odit pariatur perspiciatis placeat quae quam
          quas ratione rem sed sunt tenetur voluptatibus voluptatum?
        </p>
      </div>
    </div>
  );
};
