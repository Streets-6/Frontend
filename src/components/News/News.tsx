import { useAppSelector } from 'src/service/hooks'
import styles from './News.module.scss'
import NewsItem from './NewsItem/NewsItem'
import { getNews } from 'src/service/slices/newsSlice'
import ItemSlider from '../ItemSlider/ItemSlider'
import { Link } from 'react-router-dom'

const News = () => {
  const newsArray = useAppSelector(getNews)

  return (
    <section className={styles.news} id="news">
      <h2 className={styles.title}>Новости</h2>
      <ItemSlider>
        {newsArray.map(item => (
          <NewsItem data={item} key={item.id} />
        ))}
      </ItemSlider>
      <Link
        to="#"
        className={styles.button}
        aria-label="Показать все новости"
        title="Показать все новости"
      >
        Все новости
      </Link>
    </section>
  )
}

export default News
