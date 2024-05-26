import BasePopup from '../BasePopup/BasePopup'
import styles from './EventPopup.module.scss'

function EventPopup({ onClose, data }) {
  return (
    <BasePopup onClose={onClose}>
      <div className={styles.eventPopup}>
        <h3 className={styles.eventPopup__title}>{data.title}</h3>
      </div>
    </BasePopup>
  )
}

export default EventPopup
