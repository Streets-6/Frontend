import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import Socials from '../Socials/Socials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.navigation}>
          <nav>
            <p className={styles.menuTitle}>Основное</p>
            <ul className={styles.menu}>
              <li>О нас</li>
              <li>Дисциплины</li>
              <li>Инфраструктура</li>
              <li>События</li>
              <li>Инициативы</li>
              <li>Новости</li>
              <li>Официальные документы</li>
            </ul>
          </nav>
          <nav>
            <p className={styles.menuTitle}>Партнерам</p>
            <ul className={styles.menu}>
              <li>Направления работы</li>
              <li>Наши проекты</li>
              <li>Наши партнеры</li>
              <li>Заявка для сотрудничества</li>
            </ul>
          </nav>
        </div>
        <Link to="#" className={styles.logo}>
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
