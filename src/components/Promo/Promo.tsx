import styles from './Promo.module.scss'
import promoVideo from '../../assets/video/mock/promo.mp4'
import promoPoster from '../../assets/images/mock/photos/promoPoster.jpg'

const Promo = () => {
  return (
    <section className={styles.promo}>
      <h2 className={styles.title}>Развивая себя Создавай для своих</h2>
      <video className={styles.video} poster={promoPoster} autoPlay muted loop>
        <source src={promoVideo} />
      </video>
    </section>
  )
}

export default Promo
