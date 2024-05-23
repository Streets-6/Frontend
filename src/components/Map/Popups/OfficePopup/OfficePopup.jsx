import { useAppDispatch, useAppSelector } from '../../../../service/hooks'
import {
  getMap,
  setIsEventButtonClicked,
  setIsInfrastructureButtonClicked,
  setIsMapHeaderVisible,
  setIsOfficePopupOpen,
} from '../../../../service/slices/mapSlice'
import { setContentTypeFilter } from '../../../../service/slices/filterSlice'
import { getSelectedRegion } from '../../../../service/slices/regionsSlice'
import { formatPhoneNumber } from '../../../../utils/utils'
import BasePopup from '../BasePopup/BasePopup'
import styles from './OfficePopup.module.scss'

function OfficePopup() {
  const dispatch = useAppDispatch()

  const selectedRegion = useAppSelector(getSelectedRegion)
  const map = useAppSelector(getMap)

  const onInfastructureButtonClick = () => {
    dispatch(setIsMapHeaderVisible(true))
    dispatch(setIsInfrastructureButtonClicked(true))
    map.flyToBounds(selectedRegion.geoData.bounds)
    dispatch(setIsOfficePopupOpen(false))
    dispatch(setContentTypeFilter('infrastructure'))
  }

  const onEventsButtonClick = () => {
    dispatch(setIsMapHeaderVisible(true))
    dispatch(setIsEventButtonClicked(true))
    map.flyToBounds(selectedRegion.geoData.bounds)
    dispatch(setIsOfficePopupOpen(false))
    dispatch(setContentTypeFilter('events'))
  }

  return (
    <BasePopup>
      <div className={styles.officePopup}>
        <div className={styles.officePopup__header}>
          <div className={styles.officePopup__logo}></div>
          <h3 className={styles.officePopup__title}>
            {selectedRegion?.info?.title}
          </h3>
        </div>
        <div className={styles.officePopup__chairmain}>
          <img
            className={styles.officePopup__chairmainAvatar}
            src={selectedRegion?.info?.chairman.avatarUrl}
            alt="Аватар председателя"
          />
          <div className={styles.officePopup__chairmanInfo}>
            <span className={styles.officePopup__jobTitle}>Председатель</span>
            <div className={styles.officePopup__textGroup}>
              <h4
                className={styles.officePopup__name}
              >{`${selectedRegion?.info?.chairman.firstName} ${selectedRegion?.info?.chairman.lastName}`}</h4>

              <span
                className={`${styles.officePopup__contact} ${styles.officePopup__phone}`}
              >
                {formatPhoneNumber(selectedRegion?.info?.chairman.phoneNumber)}
              </span>
              <span
                className={`${styles.officePopup__contact} ${styles.officePopup__email}`}
              >
                {selectedRegion?.info?.chairman.email}
              </span>

              <a
                className={`${styles.officePopup__contact} ${styles.officePopup__link}`}
                href={selectedRegion?.info?.chairman.vk}
                target="_blank"
                rel="noreferrer"
              >
                Вконтакте
              </a>
            </div>
          </div>
        </div>
        {selectedRegion?.infrastructure &&
          selectedRegion?.infrastructure?.length > 0 && (
            <button
              className={styles.officePopup__button}
              onClick={onInfastructureButtonClick}
              aria-label="Показать объекты инфраструктуры"
              title="Показать объекты инфраструктуры"
            >
              <span
                className={`${styles.officePopup__buttonText} ${styles.officePopup__infrastructure}`}
              >
                Объекты инфраструктуры
              </span>
              <span className={styles.officePopup__markersCount}>
                {selectedRegion?.infrastructure?.length}
              </span>
            </button>
          )}
        {selectedRegion?.events && selectedRegion?.events?.length > 0 && (
          <button
            className={styles.officePopup__button}
            onClick={onEventsButtonClick}
            aria-label="Показать события"
            title="Показать события"
          >
            <span
              className={`${styles.officePopup__buttonText} ${styles.officePopup__event}`}
            >
              События
            </span>
            <span className={styles.officePopup__markersCount}>
              {selectedRegion?.events?.length}
            </span>
          </button>
        )}
      </div>
    </BasePopup>
  )
}

export default OfficePopup
