import { IDisciplineType } from 'src/utils/types'
import styles from './DisciplineCard.module.scss'

interface IDisciplineCardProps {
  data: IDisciplineType
}

const DisciplineCard = (props: IDisciplineCardProps) => {
  const { data } = props
  return (
    <li className={styles.card} data-id={data?.title}>
      <img src={data?.imageUrl} alt={data?.title} className={styles.image} />
      <h3 className={styles.title}>{data?.title}</h3>
      <div className={styles.textContainer}>
        <p className={styles.text}>{data?.description}</p>
      </div>
    </li>
  )
}

export default DisciplineCard
