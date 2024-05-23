import styles from './Registration.module.scss'
import participants_stack from '../../../../../assets/images/mock/participants_stack.png'

function Registration({ data }) {
  return (
    <div className={styles.registration}>
      <p className={styles.registration__description}>
        {data.info.description}
      </p>
      <button className={styles.registration__button}>
        Зарегистрироваться
      </button>
      <div className={styles.registration__participants}>
        <img
          className={styles.registration__participantsStack}
          src={participants_stack}
        />
        <p className={styles.registration__participantsCount}>
          10 человек уже идут на это мерпориятие
        </p>
      </div>
    </div>
  )
}

export default Registration
