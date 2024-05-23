import { FC, ReactElement } from 'react';
import styles from './InputTypeRadiobuttonIcon.module.scss';

interface IInputTypeRadiobutton extends React.InputHTMLAttributes<HTMLInputElement> {
  children: ReactElement;
}

const InputTypeRadiobuttonIcon: FC<IInputTypeRadiobutton> = ({
  children,
  ...InputHTMLAttributes
}) => {
  return (
    <label htmlFor={InputHTMLAttributes.id} className={styles.label_container}>
      <input type="radio" className={styles.original_input} {...InputHTMLAttributes} />
      <div className={styles.visible_input}>{children}</div>
    </label>
  );
};

export default InputTypeRadiobuttonIcon;
