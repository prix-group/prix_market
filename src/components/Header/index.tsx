import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.logo}>prix</h1>
                <nav className="header__navigation">
                    <ul className={styles.navigation_list}>
                        <li className={styles.navigation_item}>О нас</li>
                        <li className={styles.navigation_item}>Сотрудничество</li>
                        <li className={styles.navigation_item}>Блог</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
