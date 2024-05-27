import { IInfrastructureType } from 'src/api/apiTypes'
import styles from './InfrastructureCard.module.scss'
import SaveIcon from 'src/assets/images/components/save.svg'
interface IInfrastructureCardProps {
  data: IInfrastructureType
}

const InfrastructureCard = (props: IInfrastructureCardProps) => {
  const { data } = props
  return (
    <li className={styles.infrastructureCard}>
      <img className={styles.image} src={data?.photo[0]} alt={data?.title} />
      <h4 className={styles.title}>{data?.title}</h4>
      <p className={` ${styles.text}`}>{data?.city}</p>
      <p className={` ${styles.text}`}>{data?.address}</p>
      <span className={styles.ageLimit}>5+</span>
      <button className={styles.save}>
        <SaveIcon />
      </button>
      <span className={`${styles.chip} ${styles.price}`}>Вход свободный</span>
    </li>
  )
}

export default InfrastructureCard
