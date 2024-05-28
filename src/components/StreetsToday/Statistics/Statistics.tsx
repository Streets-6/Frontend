import styles from './Statistics.module.scss'

const Statistics = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        <li className={`${styles.item} ${styles.directions}`}>
          <span className={styles.value}>14</span>
          <p className={styles.text}>направлений</p>
        </li>
        <li className={`${styles.item} ${styles.members}`}>
          <span className={styles.value}>1187</span>
          <p className={styles.text}>членов организации</p>
        </li>
        <li className={`${styles.item} ${styles.presence}`}>
          <span className={styles.value}>54</span>
          <p className={styles.text}>региона присутствия</p>
        </li>
        <li className={`${styles.item} ${styles.infrastructure}`}>
          <span className={styles.value}>60+</span>
          <p className={styles.text}>объектов инфраструктуры</p>
        </li>
        <li className={`${styles.item} ${styles.events}`}>
          <span className={styles.value}>197</span>
          <p className={styles.text}>мероприятий</p>
        </li>
        <li className={`${styles.item} ${styles.projects}`}>
          <span className={styles.value}>11</span>
          <p className={styles.text}>флагманских проектов</p>
        </li>
        <li className={`${styles.item} ${styles.programms}`}>
          <span className={styles.value}>3</span>
          <p className={styles.text}>образовательные программы</p>
        </li>
      </ul>
    </section>
  )
}

export default Statistics
