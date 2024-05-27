import { setSelectedRegion } from 'src/service/slices/regionsSlice'
import { useAppDispatch, useAppSelector } from '../../../../service/hooks'
import {
  getIsMapDefaultView,
  setIsMarkerPopupOpen,
  setIsOfficePopupOpen,
} from '../../../../service/slices/mapSlice'
import InputTypeButtonClose from '../../../../ui/buttons/InputTypeButtonClose/InputTypeButtonClose'
import styles from './BasePopup.module.scss'
import { defaultSelectedRegion } from 'src/utils/constDefaultSelectedRegion'

function BasePopup(props) {
  const dispatch = useAppDispatch()
  const isMapDefaultView = useAppSelector(getIsMapDefaultView)
  const onCloseClick = () => {
    if (isMapDefaultView) {
      dispatch(setSelectedRegion(defaultSelectedRegion))
    }
    dispatch(setIsMarkerPopupOpen(false))
    dispatch(setIsOfficePopupOpen(false))
  }
  return (
    <div className={styles.basePopup}>
      <div className={styles.basePopup__container}>
        {props.children}
        <div className={styles.basePopup__closeButton}>
          <InputTypeButtonClose
            onClick={onCloseClick}
            aria-label="Закрыть"
            title="Закрыть"
          />
        </div>
      </div>
    </div>
  )
}

export default BasePopup
