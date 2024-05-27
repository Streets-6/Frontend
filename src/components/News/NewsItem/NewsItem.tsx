import { INewsType } from 'src/api/apiTypes'
import styles from './NewsItem.module.scss'
import { Link } from 'react-router-dom'

type TNewsItemProps = {
  data: INewsType
}

const NewsItem = (props: TNewsItemProps) => {
  const { data } = props
  return (
    <div className={styles.newsItem}>
      <img className={styles.image} src={data?.imageUrl} alt={data?.title} />
      <h4 className={styles.title}>{data?.title}</h4>
      <Link
        to="#"
        className={styles.button}
        aria-label="Перейти к новости"
        title="Перейти к новости"
      >
        Подробнее
      </Link>
    </div>
  )
}

export default NewsItem
