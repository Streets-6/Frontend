import './SliderArrow.scss'

interface ISliderArrowProps {
  onClick?: React.MouseEventHandler | undefined
  direction: 'prev' | 'next'
}

const SliderArrow = (props: ISliderArrowProps) => {
  const { onClick, direction } = props

  return <div className={`sliderArrow ${direction}`} onClick={onClick} />
}

export default SliderArrow
