import { useState, useEffect, useRef } from 'react'
import type { MouseEventHandler } from 'react'

import ArrowDown from '../../../assets/images/icons/arrow_down.svg'
import styles from './InputTypeSelect.module.scss'
import InputTypeSelectOption from './InputTypeSelectOption/InputTypeSelectOption'

type Option = {
  title: string
  value: string
}

type TInputTypeSelectProps = {
  selected: Option | null
  options: Option[]
  placeholder?: string
  mode?: 'rows' | 'cells'
  status?: 'default' | 'invalid'
  onChange?: (selected: Option['value']) => void
  onClose?: () => void
}

const InputTypeSelect = (props: TInputTypeSelectProps) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    status = 'default',
    selected,
    onChange,
    onClose,
  } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
    // disable eslint because we need update only if onClose function change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose])

  useEffect(() => {
    const placeholderEl = placeholderRef.current
    if (!placeholderEl) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen(prev => !prev)
      }
    }
    placeholderEl.addEventListener('keydown', handleEnterKeyDown)

    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [])

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false)
    onChange?.(value)
  }
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div
      className={styles.selectWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
    >
      <div className={styles.arrow}>
        <img className={styles.arrowImage} src={ArrowDown} alt="" />
      </div>
      <div
        className={styles.placeholder}
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className={styles.select}>
          {options.map(option => (
            <InputTypeSelectOption
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default InputTypeSelect
