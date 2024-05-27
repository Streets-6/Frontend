import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.titleImage} aria-label="Улицы России" />
      <p className={styles.subtitle}>Общероссийская общественная организация</p>
      <div className={styles.activities}>
        <p className={styles.listTitle}>Направления работы</p>
        <ul className={styles.list}>
          <li className={styles.item}>Люди и сообщества</li>
          <li className={styles.item}>Образование и наука</li>
          <li className={styles.item}>Культура и искусство</li>
          <li className={styles.item}>Спорт и активный образ жизни</li>
          <li className={styles.item}>Новый сектор креативной экономики</li>
        </ul>
      </div>
    </section>
  )
}
export default Intro
