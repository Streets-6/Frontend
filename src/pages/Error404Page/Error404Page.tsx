import { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './Error404Page.module.scss'

const Error404Page: FC = () => {
  const errorMessage = 'Данной страницы не существует'

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <h1 className={style.codeText}>{404}</h1>
        <p className={style.messageText}>{errorMessage}</p>
        <Link to="/" className={style.link}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default Error404Page
