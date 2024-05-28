import { useAppDispatch, useAppSelector } from 'src/service/hooks'
import Modal from '../Modal'
import styles from './AuthModal.module.scss'
import {
  getAuthModalType,
  setAuthModalType,
  setIsAuthModalOpen,
} from 'src/service/slices/modalsSlice'
import { useEffect, useState } from 'react'
import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type AuthByType = 'email' | 'phone'

interface IRegistrationByEmail {
  firstName: string
  lastName: string
  email: string
  phoneNumber?: string
  password: string
}

interface IRegistrationByPhone {
  firstName: string
  lastName: string
  email?: string
  phoneNumber: string
  password: string
}

interface ILoginByEmail {
  firstName?: string
  lastName?: string
  email: string
  phoneNumber?: string
  password: string
}

interface ILoginByPhone {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber: string
  password: string
}

const registrationByEmailSchema: yup.ObjectSchema<IRegistrationByEmail> =
  yup.object({
    firstName: yup.string().required('Введите имя'),
    lastName: yup.string().required('Введите фамилию'),
    email: yup
      .string()
      .email('Введен некорректный email адрес')
      .required('Введите email'),
    phoneNumber: yup.string(),
    password: yup
      .string()
      .required('Введите пароль')
      .min(8, 'Пароль должен содержать минимум 8 символов'),
  })

const registrationByPhoneSchema: yup.ObjectSchema<IRegistrationByPhone> =
  yup.object({
    firstName: yup.string().required('Введите имя'),
    lastName: yup.string().required('Введите фамилию'),
    email: yup.string(),
    phoneNumber: yup
      .string()
      .required('Введите номер телефона')
      .length(10, 'Номер телефона должен состоять из 10 цифр')
      .matches(/^\d+$/, 'Номер телефона может содержать только цифры'),
    password: yup
      .string()
      .required('Введите пароль')
      .min(8, 'Пароль должен содержать минимум 8 символов'),
  })

const loginByEmailSchema: yup.ObjectSchema<ILoginByEmail> = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup
    .string()
    .email('Введен некорректный email адрес')
    .required('Введите email'),
  phoneNumber: yup.string(),
  password: yup
    .string()
    .required('Введите пароль')
    .min(8, 'Пароль должен содержать минимум 8 символов'),
})

const loginByPhoneSchema: yup.ObjectSchema<ILoginByPhone> = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  phoneNumber: yup
    .string()
    .required('Введите номер телефона')
    .length(10, 'Номер телефона должен состоять из 10 цифр')
    .matches(/^\d+$/, 'Номер телефона может содержать только цифры'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(8, 'Пароль должен содержать минимум 8 символов'),
})

const AuthModal = () => {
  const dispatch = useAppDispatch()
  const onCloseClick = () => {
    dispatch(setIsAuthModalOpen(false))
  }
  const [authBy, setAuthBy] = useState<AuthByType>('email')
  const authModalType = useAppSelector(getAuthModalType)
  const [validationSchema, setValidationSchema] = useState<
    yup.ObjectSchema<
      | IRegistrationByEmail
      | IRegistrationByPhone
      | ILoginByEmail
      | ILoginByPhone
    >
  >(registrationByEmailSchema)

  const switchToLogin = () => {
    dispatch(setAuthModalType('login'))
  }

  const switchToRegistration = () => {
    dispatch(setAuthModalType('registration'))
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
  })
  const onSubmit = () => {
    dispatch(setIsAuthModalOpen(false))
    alert(
      authModalType === 'login'
        ? 'Вы зашли в свой профиль'
        : 'Вы зарегистрированы'
    )
  }

  useEffect(() => {
    if (authModalType === 'login') {
      if (authBy === 'email') {
        setValidationSchema(loginByEmailSchema)
      } else {
        setValidationSchema(loginByPhoneSchema)
      }
    } else {
      if (authBy === 'email') {
        setValidationSchema(registrationByEmailSchema)
      } else {
        setValidationSchema(registrationByPhoneSchema)
      }
    }
  }, [authBy, authModalType])
  return (
    <Modal
      title={authModalType === 'login' ? 'Войти' : 'Зарегистрироваться'}
      onClose={onCloseClick}
    >
      <div className={styles.auth}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <fieldset className={styles.inputs}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <div
                  className={`${
                    authModalType === 'login' ? styles.hideInput : ''
                  }`}
                >
                  <InputTypeText
                    placeholder="Имя"
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    type="text"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    required
                  />
                </div>
              )}
              name="firstName"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <div
                  className={`${
                    authModalType === 'login' ? styles.hideInput : ''
                  }`}
                >
                  <InputTypeText
                    placeholder="Фамилия"
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    type="text"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    required
                  />
                </div>
              )}
              name="lastName"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <div
                  className={`${authBy === 'phone' ? styles.hideInput : ''}`}
                >
                  <InputTypeText
                    placeholder="Почта"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    type="email"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    required
                  />
                </div>
              )}
              name="email"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <div
                  className={`${authBy === 'email' ? styles.hideInput : ''}`}
                >
                  <InputTypeText
                    placeholder="Телефон"
                    aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                    type="tel"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    required
                  />
                </div>
              )}
              name="phoneNumber"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputTypeText
                  placeholder="Пароль"
                  aria-invalid={errors.password ? 'true' : 'false'}
                  type="password"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  required
                />
              )}
              name="password"
            />
          </fieldset>
          <p className={`${styles.text} ${styles.error}`}>
            {errors.firstName?.message ||
              errors.lastName?.message ||
              (authBy === 'email' && errors.email?.message) ||
              (authBy === 'phone' && errors.phoneNumber?.message) ||
              errors.password?.message}
          </p>

          <input
            type="submit"
            className={` ${styles.button} ${styles.submit}`}
            value={authModalType === 'login' ? 'Войти' : 'Зарегистрироваться'}
          />
        </form>
        <p className={`${styles.text} ${styles.anotherMethods}`}>
          {authModalType === 'login'
            ? 'Или войдите с помощью'
            : 'Или зарегистрируйтесь с помощью'}
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
          {authModalType === 'login'
            ? 'Еще нет аккаунта?'
            : 'Уже есть аккаунт?'}{' '}
          <button
            className={`${styles.button} ${styles.text} ${styles.switchToLogin}`}
            onClick={
              authModalType === 'login' ? switchToRegistration : switchToLogin
            }
          >
            {authModalType === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </p>
      </div>
    </Modal>
  )
}

export default AuthModal
