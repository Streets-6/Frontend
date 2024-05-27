import React, { FC, InputHTMLAttributes } from 'react'
import styles from './InputTypeText.module.scss'

interface IInputTypeTextProps extends InputHTMLAttributes<HTMLInputElement> {}

type Ref = HTMLInputElement

const InputTypeText: FC<IInputTypeTextProps> = React.forwardRef<
  Ref,
  IInputTypeTextProps
>((props, ref) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} ref={ref} />
      <div className={styles.rectangle} />
    </div>
  )
})

export default InputTypeText
