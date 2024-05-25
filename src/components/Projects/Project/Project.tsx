import { IProjectType } from 'src/api/apiTypes'
import styles from './Project.module.scss'
import { getDateString } from 'src/utils/utils'

type TProjectProps = {
  data?: IProjectType
}

const Project = (props: TProjectProps) => {
  const { data } = props
  if (data?.status === 'completed') {
    return (
      <li className={`${styles.project} ${styles.completed}`}>
        <a className={styles?.link}>
          <span className={styles.date}>{getDateString(data?.date)}</span>
          <img
            className={styles.image}
            src={data?.imageUrl}
            alt={data?.title}
          />
          <h4 className={styles.title}>{data?.title}</h4>
          <p className={styles.description}>{data?.description}</p>
        </a>
      </li>
    )
  } else if (data?.status === 'current') {
    return (
      <div className={`${styles.project} ${styles.current}`}>
        <img className={styles.image} src={data?.imageUrl} alt={data?.title} />
        <h4 className={styles.title}>{data?.title}</h4>
        <p className={styles?.description}>{data?.description}</p>
        <button className={styles.button}>Подробнее</button>
      </div>
    )
  }
}

export default Project
