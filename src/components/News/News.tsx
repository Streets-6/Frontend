import { useAppSelector } from 'src/service/hooks'
import styles from './News.module.scss'
import NewsItem from './NewsItem/NewsItem'
import { getNews } from 'src/service/slices/newsSlice'

const News = () => {
  const newsArray = useAppSelector(getNews)
  console.log(newsArray)

  return (
    <section className={styles.news}>
      <h2 className={styles.title}>Новости</h2>
    </section>
  )
}

export default News
