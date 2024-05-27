import styles from './Promo.module.scss'
import promoPoster from '../../assets/images/mock/photos/promoPoster.jpg'

const Promo = () => {
  return (
    <section className={styles.promo}>
      <h2 className={styles.title}>Развивая себя Создавай для своих</h2>
      <video className={styles.video} poster={promoPoster} autoPlay muted loop>
        <source src="https://streetrussia.ru/uploads/2/bAML0XNJhLt1MCvs7yovRkJTgOsllAib.mp4" />
      </video>
    </section>
  )
}

export default Promo
