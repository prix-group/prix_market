import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.logo}>prix</h1>
                <nav className={styles.navigation}>
                    <ul className={styles['navigation--list']}>
                        <li className={styles['navigation--item']}>О нас</li>
                        <li className={styles['navigation--item']}>Сотрудничество</li>
                        <li className={styles['navigation--item']}>Блог</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
