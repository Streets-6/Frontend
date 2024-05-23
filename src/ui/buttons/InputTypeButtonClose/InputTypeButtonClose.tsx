import { ComponentPropsWithRef } from 'react';
import styles from './InputTypeButtonClose.module.scss';

const InputTypeButtonClose = (props: ComponentPropsWithRef<'button'>) => {
  return <button className={styles.close} {...props} />;
};

export default InputTypeButtonClose;
