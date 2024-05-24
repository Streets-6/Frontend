import { getEventDates } from '../../../../utils/utils'
import BasePopup from '../BasePopup/BasePopup'
import WebCamera from './WebCamera/WebCamera'
import styles from './MarkerPopup.module.scss'
import Registration from './Registration/Registration'

function MarkerPopup({ onClose, data }) {
  console.log(data)
  return (
    <BasePopup onClose={onClose}>
      <div className={styles.markerPopup}>
        <div className={styles.markerPopup__about}>
          <div className={styles.markerPopup__header}>
            <h2
              className={`${styles.markerPopup__title} ${
                data.type === 'event'
                  ? styles.markerPopup__title_type_event
                  : styles.markerPopup__title_type_infrastructure
              }`}
            >
              {data.info.title}
            </h2>
            <ul className={styles.markerPopup__actions}>
              <li className={styles.markerPopup__actionsItem}>
                <button
                  className={`${styles.markerPopup__iconButton} ${styles.markerPopup__iconButton_type_save}`}
                  aria-label="Добавить в избранное"
                  title="Добавить в избранное"
                />
              </li>
              <li className={styles.markerPopup__actionsItem}>
                <button
                  className={`${styles.markerPopup__iconButton} ${styles.markerPopup__iconButton_type_share}`}
                  aria-label="Поделиться"
                  title="Поделиться"
                />
              </li>
            </ul>
          </div>
          <ul
            className={`${styles.markerPopup__info} ${
              data.type === 'event' ? styles.markerPopup__info_type_event : ''
            }`}
          >
            {data.type === 'event' && (
              <li
                className={`${styles.markerPopup__infoItem} ${styles.markerPopup__infoItem_type_dates}`}
              >
                {getEventDates(data.info.startDate, data.info.endDate)}
              </li>
            )}
            <li
              className={`${styles.markerPopup__infoItem} ${styles.markerPopup__infoItem_type_address}`}
            >
              {`${data.info.city}, ${data.info.address}`}
            </li>
            {data.type === 'event' && (
              <li className={`${styles.markerPopup__infoItemGroup}`}>
                <p
                  className={`${styles.markerPopup__infoItem} ${styles.markerPopup__infoItem_type_price}`}
                >
                  Бесплатно
                </p>
                <p
                  className={`${styles.markerPopup__infoItem} ${styles.markerPopup__infoItem_type_registration}`}
                >
                  Нужна регистрация
                </p>
              </li>
            )}
            <li className={`${styles.markerPopup__infoItem}`}>
              <a
                className={styles.markerPopup__link}
                href={data.info.vk}
                target="_blank"
                rel="noreferrer"
              >
                Вконтакте
              </a>
            </li>
          </ul>
          {data.type === 'event' ? <Registration data={data} /> : <WebCamera />}
        </div>
        <div className={styles.markerPopup__media}>
          <div className={styles.markerPopup__videoWrapper}>
            <iframe
              className={`${styles.markerPopup__video} ${
                data.info.video.type === 'vertical'
                  ? styles.markerPopup__video_type_vertical
                  : styles.markerPopup__video_type_horizontal
              }`}
              src={data.info.video.url}
              allow="encrypted-media; fullscreen; screen-wake-lock;"
            />
          </div>
          <ul className={styles.markerPopup__photoList}>
            {data.info.photo.map(photo => {
              return (
                <li className={styles.markerPopup__photoListItem} key={photo}>
                  <img className={styles.markerPopup__photo} src={photo} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </BasePopup>
  )
}

export default MarkerPopup
