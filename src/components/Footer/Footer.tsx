import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import styles from './Footer.module.scss'
import Socials from '../Socials/Socials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.navigation}>
          <nav>
            <NavHashLink to="/#" className={styles.menuTitle}>
              Основное
            </NavHashLink>
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
                <NavHashLink to="/#" className={styles.menuLink}>
                  Официальные документы
                </NavHashLink>
              </li>
            </ul>
          </nav>
          <nav>
            <NavHashLink to="/partners#" className={styles.menuTitle}>
              Партнерам
            </NavHashLink>
            <ul className={styles.menu}>
              <NavHashLink
                to="/partners#streets-today"
                className={styles.menuLink}
              >
                Направления работы
              </NavHashLink>
              <NavHashLink to="/partners#" className={styles.menuLink}>
                Наши проекты
              </NavHashLink>
              <NavHashLink to="/partners#" className={styles.menuLink}>
                Наши партнеры
              </NavHashLink>
              <NavHashLink to="/partners#" className={styles.menuLink}>
                Заявка для сотрудничества
              </NavHashLink>
            </ul>
          </nav>
        </div>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoImage} />
        </Link>
        <div className={styles.info}>
          <p>
            Общероссийская общественная организация уличной культуры и спорта
            "Улицы России"
          </p>
          <p>ОГРН: 1217700519101</p>
          <p>ИНН: 2636219592</p>
          <p>info@streetrussia.ru</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.action}>
          <p className={styles.actionTitle}>Готов к реальным действиям?</p>
          <button className={styles.button}>Поддержать организацию</button>
        </div>
        <div className={styles.action}>
          <p className={styles.actionTitle}>Есть предложение по развитию?</p>
          <button className={styles.button}>напиши нам</button>
        </div>
        <Socials />
        <p className={styles.copyright}>
          2021-2024{'\n'}
          «Улицы России»
        </p>
      </div>
    </footer>
  )
}

export default Footer
