import styles from './About.module.scss'

import FPGLogo from 'src/assets/images/mock/logos/FPG.png'
import rosmolodezhLogo from 'src/assets/images/mock/logos/rosmolodezh.png'
import membersPhoto from 'src/assets/images/mock/photos/members.jpg'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.leftSide}>
        <img
          className={styles.membersPhoto}
          src={membersPhoto}
          alt="Команда Улиц России"
        />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.sectionTitle}>Улицы России</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.title}>О нас</h3>
            <p className={styles.text}>
              Всероссийская общественная организация, создана 2 октября 2020
              года <br />
              Объединяем спортивные и творческие направления молодёжи
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.title}>Миссия</h3>
            <p className={styles.text}>
              Всецелое развитие человеческого потенциала
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.title}>Цель</h3>
            <p className={styles.text}>
              Комплексное развитие уличных культур и социально-значимых проектов
              на территории России
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.title}>Генеральные партнеры</h3>
            <ul className={styles.logoList}>
              <li className={styles.logoListItem}>
                <img
                  className={styles.partnerLogo}
                  src={FPGLogo}
                  alt="Логотип партнера"
                />
              </li>
              <li className={styles.logoListItem}>
                <img
                  className={styles.partnerLogo}
                  src={rosmolodezhLogo}
                  alt="Логотип партнера"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button className={styles.button}>Зарегистрироваться</button>
    </section>
  )
}

export default About
