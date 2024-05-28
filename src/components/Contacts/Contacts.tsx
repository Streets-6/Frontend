import { Link } from 'react-router-dom'
import { genericHashLink } from 'react-router-hash-link'
import Photo from 'src/assets/images/content/contacts.png'
import styles from './Contacts.module.scss'

const Contacts = () => {
  const HashLink = genericHashLink(Link)

  return (
    <section className={styles.section}>
      <div className={styles.column}>
        <div className={styles.logo} aria-label="Улицы России" />
        <img
          src={Photo}
          alt="Председатель «Улицы России»"
          className={styles.photo}
        />
      </div>
      <div className={styles.column}>
        <h2 className={styles.sectionTitle}>Наши контакты</h2>
        <div>
          <p className={styles.row}>Председатель ОООУКС «Улицы России»</p>
          <p className={styles.row}>Валентин Работенко</p>
          <p className={styles.row}>+7 918 752 55 17</p>
          <p className={styles.row}>
            <Link
              to="https://vk.com/streetrf"
              target="blank"
              title="Открыть группу Вконтакте"
              className={styles.link}
            >
              ВКонтакте
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCse4y0X9dK0utXKtjwlZ1dg"
              target="blank"
              title="Открыть канал на YouTube"
              className={styles.link}
            >
              Youtube
            </Link>
          </p>
        </div>
        <HashLink to="/#about" className={`${styles.link} ${styles.arrow}`}>
          Подробнее об организации
        </HashLink>
      </div>
    </section>
  )
}

export default Contacts
