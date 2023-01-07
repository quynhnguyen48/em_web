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
              <img src={"https://api.echomedi.me/uploads/Untitled_design_10_56244bd5cc.jpg?updated_at=2023-01-07T04:11:28.422Z"} className="w-full absolute darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_8_9f3bbfdf76.jpg?updated_at=2023-01-07T04:12:19.085Z"} className="w-full absolute darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_9_4fc1bfc2be.jpg?updated_at=2023-01-07T04:12:51.809Z"} className="w-full absolute  darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://admin.echomedi.me/uploads/Untitled_design_11_0a48d0d9f7.jpg?updated_at=2023-01-07T04:13:21.680Z"} className="w-full absolute  darkened-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_7_24962e0c2a.jpg?updated_at=2023-01-07T04:13:45.086Z"} className="w-full absolute  darkened-image" />
            </SwiperSlide>
            </Swiper>
        </div>
      </div>
      {/* </div> */}
    </div>


  );
};

export default Slider;
