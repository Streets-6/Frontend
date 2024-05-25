import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ItemSlider.scss'
import Slider from 'react-slick'
import { ReactNode } from 'react'
import SliderArrow from './SliderArrow/SliderArrow'

type TSliderProps = {
  children: ReactNode
}

const ItemSlider = (props: TSliderProps) => {
  const { children } = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: <SliderArrow direction="next" />,
    prevArrow: <SliderArrow direction="prev" />,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

export default ItemSlider
