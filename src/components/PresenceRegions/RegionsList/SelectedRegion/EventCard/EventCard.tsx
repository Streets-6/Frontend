import { IEventType } from 'src/api/apiTypes'
import styles from './EventCard.module.scss'
import { getEventDates } from 'src/utils/utils'
import SaveIcon from 'src/assets/images/components/save.svg'
interface IEventCardProps {
  data: IEventType
}

const EventCard = (props: IEventCardProps) => {
  const { data } = props
  return (
    <li className={styles.eventCard}>
      <img className={styles.image} src={data?.photo[0]} alt={data?.title} />
      <h4 className={styles.title}>{data?.title}</h4>
      <p
        className={`${styles.address} ${styles.text}`}
      >{`${data?.city} ${data?.address}`}</p>
      <p className={styles.text}>
        {getEventDates(data?.startDate, data?.endDate)}
      </p>
      <span className={styles.ageLimit}>7+</span>
      <button className={styles.save}>
        <SaveIcon />
      </button>
      <span className={`${styles.chip} ${styles.price}`}>Бесплатно</span>
      <span className={`${styles.chip} ${styles.registration}`}>
        Нужна регистрация
      </span>
    </li>
  )
}

export default EventCard
