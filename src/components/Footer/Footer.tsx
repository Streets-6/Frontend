import { Link } from 'react-router-dom'
import { genericHashLink } from 'react-router-hash-link'
import styles from './Footer.module.scss'
import Socials from '../Socials/Socials'
import { useAppDispatch } from 'src/service/hooks'
import { setIsDonateModalOpen } from 'src/service/slices/modalsSlice'

const Footer = () => {
  const dispatch = useAppDispatch()

  const HashLink = genericHashLink(Link)

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.navigation}>
          <nav>
            <HashLink to="/#" className={styles.menuTitle}>
              Основное
            </HashLink>
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
                <HashLink to="/#" className={styles.menuLink}>
                  Официальные документы
                </HashLink>
              </li>
            </ul>
          </nav>
          <nav>
            <HashLink to="/partners#" className={styles.menuTitle}>
              Партнерам
            </HashLink>
            <ul className={styles.menu}>
              <HashLink
                to="/partners#streets-today"
                className={styles.menuLink}
              >
                Направления работы
              </HashLink>
              <HashLink to="/partners#our-projects" className={styles.menuLink}>
                Наши проекты
              </HashLink>
              <HashLink to="/partners#our-partners" className={styles.menuLink}>
                Наши партнеры
              </HashLink>
              <HashLink to="/partners#request" className={styles.menuLink}>
                Заявка для сотрудничества
              </HashLink>
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
          <button
            className={styles.button}
            onClick={() => dispatch(setIsDonateModalOpen(true))}
          >
            Поддержать организацию
          </button>
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
