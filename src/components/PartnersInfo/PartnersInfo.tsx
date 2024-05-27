import styles from './PartnersInfo.module.scss'

const PartnersInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.contentBlock}>
          <h3 className={styles.listTitle}>Генеральные{'\n'}партнеры</h3>
          <ul className={styles.list}>
            <li className={styles.item}>Росмолодежь</li>
            <li className={styles.item}>Фонд Президентских грантов</li>
          </ul>
        </div>
        <div className={styles.contentBlock}>
          <h3 className={styles.listTitle}>Стратегические{'\n'}партнеры</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              Ассоциация студенческих спортивных клубов России
            </li>
            <li className={styles.item}>
              Северо-Кавказский федеральный университет
            </li>
          </ul>
        </div>
        <div className={styles.contentBlock}>
          <h3 className={styles.listTitle}>Организационные{'\n'}партнеры</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              Благотворительный фонд Владимира Потанина
            </li>
            <li className={styles.item}>Танцевальная школа «Offbeats»</li>
          </ul>
        </div>
        <div className={styles.contentBlock}>
          <h3 className={styles.listTitle}>Региональные{'\n'}партнеры</h3>
          <ul className={styles.list}>
            <li className={styles.item}>WORKOUTUDM Школа Воркаута Ижевск</li>
            <li className={styles.item}>
              Центр спортивных субкультур «Прорыв»
            </li>
            <li className={styles.item}>
              Центр развития творческого потенциала человека «ТруДом»
            </li>
            <li className={styles.item}>
              Спортивное движение «Street Workout Псков»
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PartnersInfo
