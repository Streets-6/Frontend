import { useAppDispatch } from 'src/service/hooks'
import Modal from '../Modal'
import styles from './AuthModal.module.scss'
import { setIsAuthModalOpen } from 'src/service/slices/modalsSlice'
import { useState } from 'react'
import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText'

type AuthByType = 'email' | 'phone'

const AuthModal = () => {
  const dispatch = useAppDispatch()
  const onCloseClick = () => {
    dispatch(setIsAuthModalOpen(false))
  }
  const [authBy, setAuthBy] = useState<AuthByType>('email')
  return (
    <Modal title="зарегистрироваться" onClose={onCloseClick}>
      <div className={styles.auth}>
        <form className={styles.form}>
          <fieldset className={styles.inputs}>
            <InputTypeText
              placeholder="Имя"
              aria-invalid={'false'}
              type="text"
            />
            <InputTypeText
              placeholder="Фамилия"
              aria-invalid={'false'}
              type="text"
            />

            {authBy === 'email' ? (
              <InputTypeText
                placeholder="Почта"
                aria-invalid={'false'}
                type="email"
              />
            ) : (
              <InputTypeText
                placeholder="Телефон"
                aria-invalid={'false'}
                type="tel"
              />
            )}
            <InputTypeText
              placeholder="Пароль"
              aria-invalid={'false'}
              type="password"
            />
          </fieldset>
          <p className={`${styles.text} ${styles.error}`}>текст ошибки</p>
          <input
            type="submit"
            className={` ${styles.button} ${styles.submit}`}
            value="зарегистрироваться"
          />
        </form>
        <p className={`${styles.text} ${styles.anotherMethods}`}>
          Или зарегистрируйтесь с помощью
        </p>
        <div className={styles.icons}>
          <button className={`${styles.button} ${styles.icon} ${styles.vk}`} />
          {authBy === 'email' ? (
            <button
              onClick={() => setAuthBy('phone')}
              className={` ${styles.button} ${styles.icon} ${styles.phone}`}
            />
          ) : (
            <button
              onClick={() => setAuthBy('email')}
              className={` ${styles.button} ${styles.icon} ${styles.email}`}
            />
          )}
        </div>
        <p className={styles.text}>
          Уже есть аккаунт?{' '}
          <button
            className={`${styles.button} ${styles.text} ${styles.switchToLogin}`}
          >
            Войти
          </button>
        </p>
      </div>
    </Modal>
  )
}

export default AuthModal
