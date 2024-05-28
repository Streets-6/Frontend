import { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
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
    // disable eslint because we only need add event listener once when modal rendered
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.close} type="button" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    modalElement
  )
}

export default Modal
