import styles from './styles.module.scss';
import { FC } from 'react';
import { footerListContent } from '@components/Footer/constants';
import { SocialNetworks } from '@components/SocialNetworks';
import cn from 'classnames';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={cn(styles['wrapper'], 'wrapper')}>
        <div className={styles.flex}>
          <div className={styles['holding-info']}>
            <p className={styles['holding-info--title']}>
              ТОО &ldquo;PRIX.KZ&ldquo;
            </p>
            <p className={styles['holding-info--description']}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              cumque distinctio!
            </p>
          </div>
          <div className={styles.lists}>
            {footerListContent.map((item) => {
              return (
                <div className="footer__company" key={item.id}>
                  <p className={styles['list--title']}>{item.title}</p>
                  <ul className={styles.list}>
                    {item.list.map((item) => (
                      <li className={styles.link} key={item.id}>
                        <a href={item.url} className={styles.anchor}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; Copyright 2022, Все права защищены
          </p>
          <SocialNetworks />
        </div>
      </section>
    </footer>
  );
};
