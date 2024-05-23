import { useAppDispatch } from '../../../../service/hooks'
import {
  setIsMarkerPopupOpen,
  setIsOfficePopupOpen,
} from '../../../../service/slices/mapSlice'
import InputTypeButtonClose from '../../../../ui/buttons/InputTypeButtonClose/InputTypeButtonClose'
import styles from './BasePopup.module.scss'

function BasePopup(props) {
  const dispatch = useAppDispatch()
  const onCloseClick = () => {
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
