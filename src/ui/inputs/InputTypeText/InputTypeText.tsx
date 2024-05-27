import { FC, InputHTMLAttributes } from 'react'
import styles from './InputTypeText.module.scss'

interface IInputTypeTextProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputTypeText: FC<IInputTypeTextProps> = props => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} />
      <div className={styles.rectangle} />
    </div>
  )
}

export default InputTypeText
