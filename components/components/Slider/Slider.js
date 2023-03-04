import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import Icon from "components/Icon"
import "swiper/css"
import "./Slider.scss"

const Slider = ({
  title,
  spaceBetween = 16,
  slidesPerView = "auto",
  navigation = true,
  items,
  slideItemClassName = "",
}) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold">{title}</p>
        <div className="space-x-4">
          <button ref={prevRef}>
            <Icon name="arrows/left-circle" />
          </button>
          <button ref={nextRef}>
            <Icon name="arrows/right-circle" />
          </button>
        </div>
      </div>
      <Swiper
        className="mt-4"
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onBeforeInit={(swiper) => {
          if (swiper?.params?.navigation) {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide className={slideItemClassName} key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
