import { Link, NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import Socials from '../Socials/Socials'
import ProfileIcon from 'src/assets/images/icons/profile.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoImage} />
        </Link>
        <div className={styles.row}>
          <Link to="#">
            <img
              src={ProfileIcon}
              alt="Мой профиль"
              className={styles.profileIcon}
            />
          </Link>
          <Socials />
        </div>
      </div>
      <ul className={styles.menu}>
        <li>
          <NavHashLink to="/#about" className={styles.menuLink}>
            О нас
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#disciplines" className={styles.menuLink}>
            Дисциплины
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#presence" className={styles.menuLink}>
            Инфраструктура и события
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#projects" className={styles.menuLink}>
            Инициативы
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#news" className={styles.menuLink}>
            Новости
          </NavHashLink>
        </li>
        <li>
          <NavLink to="/partners" className={styles.menuLink}>
            Партнерам
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
