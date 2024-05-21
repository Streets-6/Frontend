import { Link, NavLink } from 'react-router-dom'
import Logo from 'src/assets/images/logo/logo.svg'
import Socials from '../Socials/Socials'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link to="#" className={styles.logo}>
          <Logo />
        </Link>
        <Socials />
      </div>
      <ul className={styles.menu}>
        <li>
          <NavLink to="#" className={styles.menuLink}>
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.menuLink}>
            Дисциплины
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.menuLink}>
            Инфраструктура
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.menuLink}>
            Инициативы
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.menuLink}>
            Новости
          </NavLink>
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
