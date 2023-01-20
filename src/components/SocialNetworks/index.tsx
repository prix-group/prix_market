import styles from './styles.module.scss';
import { snListContent } from '@/components/SocialNetworks/constants';

export const SocialNetworks = () => {
  return (
    <ul className={styles.social}>
      {snListContent.map((item) => {
        return (
          <li className={styles['social--icon']} key={item.name}>
            <a
              className={styles['social--anchor']}
              target="_blank"
              href={item.url}
              rel="noreferrer"
            >
              <img
                className={styles['social--image']}
                src={item.image.src}
                alt={item.alt}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
