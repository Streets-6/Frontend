import { FC } from 'react'
import { useRouteError, Link } from 'react-router-dom'
import style from './ErrorPage.module.scss'

const ErrorPage: FC = () => {
  const error = useRouteError()
  const errorMessage =
    typeof error === 'string' || error instanceof Error
      ? error.toString()
      : 'An unexpected error occurred'

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <h1 className={style.codeText}>503</h1>
        <p className={style.messageText}>Что-то пошло не так</p>
        <p className={style.messageText}>{errorMessage}</p>
        <Link to="/" className={style.link}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
