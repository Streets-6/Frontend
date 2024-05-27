import { Link, NavLink } from 'react-router-dom'
import Socials from '../Socials/Socials'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link to="#" className={styles.logo}>
          <div className={styles.logoImage} />
        </Link>
        <Socials />
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="#about" className={styles.menuLink}>
            О нас
          </a>
        </li>
        <li>
          <a href="#" className={styles.menuLink}>
            Дисциплины
          </a>
        </li>
        <li>
          <a href="#presence" className={styles.menuLink}>
            Инфраструктура
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.menuLink}>
            Инициативы
          </a>
        </li>
        <li>
          <a href="#news" className={styles.menuLink}>
            Новости
          </a>
        </li>
        <li>
          <NavLink to="#" className={styles.menuLink}>
            Партнерам
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
