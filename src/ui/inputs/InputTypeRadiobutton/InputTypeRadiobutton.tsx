import { FC } from 'react';
import styles from './InputTypeRadiobutton.module.scss';

interface IInputTypeRadiobutton extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  count?: number;
  countVisible: boolean;
}

const InputTypeRadiobutton: FC<IInputTypeRadiobutton> = ({
  label = '',
  count,
  countVisible = false,
  ...InputHTMLAttributes
}) => {
  return (
    <label htmlFor={InputHTMLAttributes.id} className={styles.label_container}>
      <input type="radio" className={styles.original_input} {...InputHTMLAttributes} />
      <div className={styles.visible_input}>
        {label} {countVisible && <div className={styles.count}>{count}</div>}
      </div>
    </label>
  );
};

export default InputTypeRadiobutton;
