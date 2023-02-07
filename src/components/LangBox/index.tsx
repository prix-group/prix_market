import styles from './styles.module.scss';
import engFlag from '@public/images/flag-for-flag-united-kingdom-svgrepo-com.svg';
import rusFlag from '@public/images/flag-for-flag-russia-svgrepo-com.svg';
import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { multilangContext } from '@/src/context/multilangContext';
import { useWindowSize } from '@/src/hooks/useWindowSize';
import { DESKTOP_SIZE } from '@/src/shared/constants';

interface ILangBox {
  setLang: Dispatch<SetStateAction<string>>;
}

export const LangBox: FC<ILangBox> = ({ setLang }) => {
  const [langboxOpen, setLangboxOpen] = useState(false);

  const windowSize = useWindowSize();
  let isMobile = windowSize.width < DESKTOP_SIZE;

  const translation = useContext(multilangContext);

  const handleLanguageSwitch = (e: MouseEvent<HTMLLIElement>) => {
    setLang(e.currentTarget.id);
    handleLangBoxClose();
  };

  const handleLangBoxOpen = () => {
    setLangboxOpen(true);
  };

  const handleLangBoxClose = () => {
    setLangboxOpen(false);
  };

  const handleLangBoxMarkup = () => {
    if (!langboxOpen && !isMobile) {
      return (
        <div
          className={styles['langbox__language-button']}
          onClick={handleLangBoxOpen}
        >
          <p className={styles['langbox__language-content']}>
            {translation.lang === 'ru' ? 'рус' : 'en'}
          </p>
          <img
            className={styles['langbox__language-flag']}
            src={translation.lang === 'en' ? engFlag.src : rusFlag.src}
            alt={translation.lang === 'en' ? 'english flag' : 'russian flag'}
          />
        </div>
      );
    }

    if (langboxOpen && !isMobile) {
      return (
        <>
          <div className={styles['overlay']} onClick={handleLangBoxClose}></div>
          <div className={styles['langbox__language-menu']}>
            <div className={styles['langbox__language-container']}>
              <ul className={styles['langbox__language-list']}>
                <li
                  className={styles['langbox__language-item']}
                  onClick={(e) => handleLanguageSwitch(e)}
                  id={'en'}
                >
                  <p className={styles['langbox__language-name']}>en</p>
                  <img
                    className={styles['langbox__language-flag']}
                    src={engFlag.src}
                    alt={'english flag'}
                  />
                </li>
                <li
                  className={styles['langbox__language-item']}
                  onClick={(e) => handleLanguageSwitch(e)}
                  id={'ru'}
                >
                  <p className={styles['langbox__language-name']}>ru</p>
                  <img
                    className={styles['langbox__language-flag']}
                    src={rusFlag.src}
                    alt={'russian flag'}
                  />
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }

    if (isMobile) {
      return (
        <>
          <ul className={styles['langbox__language-list--mobile']}>
            <li
              className={styles['langbox__language-item--mobile']}
              id={'en'}
              onClick={(e) => handleLanguageSwitch(e)}
            >
              <img
                className={styles['langbox__language-flag--mobile']}
                src={engFlag.src}
                alt={'english flag'}
              />
            </li>
            <li
              className={styles['langbox__language-item--mobile']}
              id={'ru'}
              onClick={(e) => handleLanguageSwitch(e)}
            >
              <img
                className={styles['langbox__language-flag--mobile']}
                src={rusFlag.src}
                alt={'russian flag'}
              />
            </li>
          </ul>
        </>
      );
    }
  };

  return <>{handleLangBoxMarkup()}</>;
};
