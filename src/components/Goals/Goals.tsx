import Image from 'src/assets/images/content/goals.png'
import styles from './Goals.module.scss'

const Goals = () => {
  return (
    <section className={styles.section}>
      <div className={styles.column}>
        <p className={styles.title}>5 направлений работы = 5 целей</p>
        <img
          src={Image}
          alt="Всероссийский образовательный форум"
          className={styles.image}
        />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.text}>
            Формирование здорового сообщества через профессиональное и личное
            развитие
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>
            Внедрение образовательных программ уличной культуры и спорта в
            систему высшего образования
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>
            Создание системы развития уличного спорта как основы здорового
            образа жизни
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>
            Внедрение и продвижение уличной культуры в государственную систему
            культуры
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>
            Внедрение уличной культуры как кластера креативной экономики
          </p>
        </li>
      </ul>
    </section>
  )
}
export default Goals
