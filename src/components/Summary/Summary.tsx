import styles from './Summary.module.scss'

const Summary = () => {
  return (
    <section className={styles.summary}>
      <article className={styles.article}>
        <span className={styles.accent}>«Улицы России»</span>&#32;
        <span className={styles.text}> сегодня имеют</span>
        <br />
        <span className={styles.accent}>54 региональных отделения</span>&#32;
        <span className={styles.text}>развивают</span>
        <br />
        <span className={styles.text}>
          <span className={styles.accent}>
            14 направлений культуры и спорта
          </span>
        </span>
        <span className={styles.text}>в регионах присутствия действуют</span>
        <br />
        <span className={styles.text}>
          <span className={styles.accent}>60+ объектов инфраструктуры</span>
        </span>
        <br />
        <span className={styles.text}>в календарном плане на 2024 год</span>
        <span className={styles.text}>
          заявлено&nbsp; <span className={styles.accent}>104 мероприятия</span>
        </span>
      </article>
    </section>
  )
}

export default Summary
