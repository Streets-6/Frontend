import { Link, NavLink } from 'react-router-dom'
import { genericHashLink } from 'react-router-hash-link'
import Socials from '../Socials/Socials'
import ProfileIcon from 'src/assets/images/icons/profile.svg'
import styles from './Header.module.scss'
import { useAppDispatch } from 'src/service/hooks'
import {
  setAuthModalType,
  setIsAuthModalOpen,
} from 'src/service/slices/modalsSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const onProfileIconClick = () => {
    dispatch(setAuthModalType('login'))
    dispatch(setIsAuthModalOpen(true))
  }

  const HashLink = genericHashLink(Link)

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoImage} />
        </Link>
        <div className={styles.row}>
          <div>
            <img
              src={ProfileIcon}
              alt="Мой профиль"
              className={styles.profileIcon}
              onClick={onProfileIconClick}
              aria-label="Открыть мой профиль"
              title="Открыть мой профиль"
            />
          </div>
          <Socials />
        </div>
      </div>
      <ul className={styles.menu}>
        <li>
          <HashLink to="/#about" className={styles.menuLink}>
            О нас
          </HashLink>
        </li>
        <li>
          <HashLink to="/#disciplines" className={styles.menuLink}>
            Дисциплины
          </HashLink>
        </li>
        <li>
          <HashLink to="/#presence" className={styles.menuLink}>
            Инфраструктура и события
          </HashLink>
        </li>
        <li>
          <HashLink to="/#projects" className={styles.menuLink}>
            Инициативы
          </HashLink>
        </li>
        <li>
          <HashLink to="/#news" className={styles.menuLink}>
            Новости
          </HashLink>
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
