import { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
// import CloseIcon from 'src/assets/images/icons/close.svg'
import styles from './Modal.module.scss'

type ModalProps = {
  title: string
  children: ReactNode
  onClose: () => void
}

const modalElement = document.getElementById('modal') as HTMLElement

const Modal: FC<ModalProps> = ({ title, children, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      event.key === 'Escape' && onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.headline}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.close} type="button" onClick={onClose} />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalElement
  )
}

export default Modal
