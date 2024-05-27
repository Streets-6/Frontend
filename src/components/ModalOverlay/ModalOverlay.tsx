import { FC } from 'react'
import styles from './ModalOverlay.module.scss'

type ModalOverlayProps = {
  onClose: () => void
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose}></div>
}

export default ModalOverlay
