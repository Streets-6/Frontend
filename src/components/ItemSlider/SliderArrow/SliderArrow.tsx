import './SliderArrow.scss'

interface ISliderArrowProps {
  onClick?: React.MouseEventHandler | undefined
  direction: 'prev' | 'next'
}

const SliderArrow = (props: ISliderArrowProps) => {
  const { onClick, direction } = props

  return (
    <button
      className={`sliderArrow ${direction}`}
      onClick={onClick}
      aria-label={
        direction === 'next' ? 'Прокрутить далее' : 'Прокрутить назад'
      }
      title={direction === 'next' ? 'Прокрутить далее' : 'Прокрутить назад'}
    />
  )
}

export default SliderArrow
