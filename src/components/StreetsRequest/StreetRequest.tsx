import { Controller, useForm } from 'react-hook-form'
import styles from './StreetRequest.module.scss'
import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const requestSchema = yup.object({
  authorName: yup.string().required('Введите имя'),
  companyName: yup.string().required('Введите название компании'),
  email: yup
    .string()
    .email('Введен некорректный E-mail адрес')
    .required('Введите E-mail'),
  phoneNumber: yup
    .string()
    .required('Введите номер телефона')
    .length(10, 'Номер телефона должен состоять из 10 цифр')
    .matches(/^\d+$/, 'Номер телефона может содержать только цифры'),
  comment: yup.string().required('Напишите комментарий'),
})

const StreetRequest = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(requestSchema),
    defaultValues: {
      authorName: '',
      companyName: '',
      comment: '',
      email: '',
      phoneNumber: '',
    },
  })
  const onSubmit = () => {
    alert('Благодорим за заявку')
  }

  return (
    <section className={styles.streetsRequest} id="request">
      <h2 className={styles.title}>Небезразлично будущее России?</h2>
      <div className={styles.textGroup}>
        <h3 className={styles.subtitle}>стать партнером</h3>
        <p className={styles.text}>
          Оставьте заявку и мы подскажем, какие виды сотрудничества будут
          полезны для решения ваших задач
        </p>
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset className={styles.inputs}>
          <div className={styles.inputGroup}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputTypeText
                  placeholder="Имя"
                  aria-invalid={errors.authorName ? 'true' : 'false'}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  required
                />
              )}
              name="authorName"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputTypeText
                  placeholder="Название компании"
                  aria-invalid={errors.companyName ? 'true' : 'false'}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  required
                />
              )}
              name="companyName"
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
          </div>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                placeholder="Комментарий"
                aria-invalid={errors.comment ? 'true' : 'false'}
                type="text"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                required
              />
            )}
            name="comment"
          />
        </fieldset>
        <p className={`${styles.text} ${styles.error}`}>
          {errors.authorName?.message ||
            errors.companyName?.message ||
            errors.phoneNumber?.message ||
            errors.email?.message ||
            errors.phoneNumber?.message ||
            errors.comment?.message}
        </p>

        <input
          type="submit"
          className={` ${styles.button} ${styles.submit}`}
          value="Отправить"
        />
      </form>
    </section>
  )
}

export default StreetRequest
