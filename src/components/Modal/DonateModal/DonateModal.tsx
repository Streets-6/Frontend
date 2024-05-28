import { useAppDispatch } from 'src/service/hooks'
import Modal from '../Modal'
import styles from './DonateModal.module.scss'
import { setIsDonateModalOpen } from 'src/service/slices/modalsSlice'
import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const donateSchema = yup.object({
  moneyAmount: yup
    .number()
    .typeError('Сумма должна быть больше 0')
    .required('Введите сумму')
    .positive('Cумма должна быть положительной')
    .integer('Сумма должна быть целым числом')
    .min(1, 'Сумма должна быть больше 0'),
  email: yup
    .string()
    .email('Введен некорректный E-mail адрес')
    .required('Введите E-mail'),
  phoneNumber: yup
    .string()
    .required('Введите номер телефона')
    .length(10, 'Номер телефона должен состоять из 10 цифр')
    .matches(/^\d+$/, 'Номер телефона может содержать только цифры'),
})

const DonateModal = () => {
  const dispatch = useAppDispatch()
  const onCloseClick = () => {
    dispatch(setIsDonateModalOpen(false))
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(donateSchema),
    defaultValues: {
      moneyAmount: 0,
      email: '',
      phoneNumber: '',
    },
  })
  const onSubmit = () => {
    dispatch(setIsDonateModalOpen(false))
    alert('Благодарим за поддержку')
  }

  return (
    <Modal title="Поддержать" onClose={onCloseClick}>
      <div className={styles.donate}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <fieldset className={styles.inputs}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputTypeText
                  placeholder="Введите сумму"
                  aria-invalid={errors.moneyAmount ? 'true' : 'false'}
                  type="number"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  required
                />
              )}
              name="moneyAmount"
            />
            <div className={styles.inputGroup}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputTypeText
                    placeholder="E-mail"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    type="email"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    required
                  />
                )}
                name="email"
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputTypeText
                    placeholder="Телефон"
                    aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                    type="tel"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    required
                  />
                )}
                name="phoneNumber"
              />
            </div>
          </fieldset>
          <p className={`${styles.text} ${styles.error}`}>
            {errors.moneyAmount?.message ||
              errors.email?.message ||
              errors.phoneNumber?.message}
          </p>

          <input
            type="submit"
            className={` ${styles.button} ${styles.submit}`}
            value={'Поддержать организацию'}
          />
        </form>
      </div>
    </Modal>
  )
}

export default DonateModal
