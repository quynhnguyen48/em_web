import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { useRouter } from 'next/router';

interface Props {
  slides: any;
}

const Slider = ({ slides }: Props) => {
  let { locale } = useRouter();
  locale = locale ?? "";
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  SwiperCore.use([Autoplay]);

  return (
    <div id="gallery" className="w-full mx-auto">
      <div className="relative flex justify-center h-[350px] md:h-[750px]">
        <Swiper className="mySwiper" autoplay={true}>
          <SwiperSlide>
            <p className="font-semibold z-10 text-white text-[30px] md:text-[50px]">
              {locale === "en" ? "LIVE A FULL LIFE" : "CHO CUỘC SỐNG TRỌN VẸN"}</p>
            <img src={"https://echomedi.com/wp-content/uploads/2022/07/98ade86315dfd6818fce.jpg"} className="w-full absolute darkened-image" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-10">
            <p className="font-semibold z-10 text-white text-[50px]">
            {locale === "en" ? "ENTRUST YOUR WELLBEING TO US" : "TRAO GỬI NIỀM TIN"}</p>
            <p className="font-semibold z-10 text-white text-[50px]">{locale === "en" ? "HEALTHCARE EVOLVED" : "CHO MỘT SỨC KHOẺ TOÀN DIỆN"}</p>
            </div>
            <img src={"https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-2022-07-17T073820.899.jpg"} className="w-full absolute darkened-image" />
          </SwiperSlide>
          <SwiperSlide>
          <p className="font-semibold z-10 text-white text-[50px]">NÂNG TẦM SỨC KHOẺ</p>
            <img src={"https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-2022-07-17T073935.707.jpg"} className="w-full absolute  darkened-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
