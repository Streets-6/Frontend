import { useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import styles from './InputTypeSelectOption.module.scss';

type Option = {
  title: string;
  value: string;
};
type TInputTypeSelectOptionProps = {
  option: Option;
  onClick: (value: Option['value']) => void;
};
const InputTypeSelectOption = (props: TInputTypeSelectOptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterKeyDown);
    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [value, onClick]);

  return (
    <li
      className={styles.option}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      ref={optionRef}
    >
      {title}
    </li>
  );
};

export default InputTypeSelectOption;
