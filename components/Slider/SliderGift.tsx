import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { useRouter } from 'next/router';

interface Props {
  slides: any;
}

const Slider = ({ slides }: Props) => {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let  swiper:SwiperCore;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  // SwiperCore.use([Autoplay]);

  return (
    <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4 pt-12">
      
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 text-left">
        <p
          onClick={e => swiper.slideTo(0)}
          className="text-xl mb-2 hover:underline">{locale == "en" ? "For Dad/ Grandpa" : "Dành Tặng Bố/ Ông"}</p>
        <p
          onClick={e => swiper.slideTo(1)}
          className="text-xl mb-2 hover:underline">{locale == "en" ? "For Mom/ Grandma" : "Dành Tặng Mẹ/ Bà"}</p>
        <p 
          onClick={e => swiper.slideTo(2)}
          className="text-xl mb-2 hover:underline">{locale == "en" ? "For Siblings/ Relatives" : "Dành Tặng Anh, Chị, Em / Họ Hàng"}</p>
        <p 
          onClick={e => swiper.slideTo(3)}
          className="text-xl mb-2 hover:underline">{locale == "en" ? "For Corporate/ Employees" : "Dành Tặng Doanh Nghiệp/ Nhân Viên"}</p>
        <p 
          onClick={e => swiper.slideTo(4)}
          className="text-xl mb-2 hover:underline">{locale == "en" ? "For Membership" : "Dành Tặng Thành Viên"}</p>
      </div>
      {/* <div className="w-full h-full col-span-2 md:col-span-1 row-span-2"> */}

      <div id="gallery" className="w-full mx-auto">
        <div className="relative flex justify-center h-[350px] md:h-[450px]">
        <Swiper className="mySwiper" onSwiper={(s) => swiper = s}>
            <SwiperSlide>
              <img src={"https://echomedi.com/wp-content/uploads/2022/09/Untitled-design-10.jpg"} className="w-full absolute darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://echomedi.com/wp-content/uploads/2022/09/Untitled-design-8.jpg"} className="w-full absolute darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://echomedi.com/wp-content/uploads/2022/09/Untitled-design-9.jpg"} className="w-full absolute  darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://echomedi.com/wp-content/uploads/2022/09/Untitled-design-11.jpg"} className="w-full absolute  darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://echomedi.com/wp-content/uploads/2022/09/Untitled-design-7.jpg"} className="w-full absolute  darkened-image" />
            </SwiperSlide>
            </Swiper>
        </div>
      </div>
      {/* </div> */}
    </div>


  );
};

export default Slider;
