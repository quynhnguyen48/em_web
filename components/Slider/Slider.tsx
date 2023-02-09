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
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
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
      <div className="relative flex justify-center h-[350px] md:h-[450px]">
        <Swiper className="mySwiper" autoplay={true}>
          <SwiperSlide>
            <p className="z-10 text-white text-[30px] md:text-[50px]">
              {locale === "en" ? "LIVE A FULL LIFE" : "CHO CUỘC SỐNG TRỌN VẸN"}</p>
            <img src={"https://api.echomedi.com/uploads/How_can_you_experience_Fiji_like_a_true_local_736_6068845_0_14117386_1000_1000x500_44c52fa2c1.jpg?updated_at=2023-01-07T01:55:12.953Z"} className="w-full absolute darkened-image" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-10">
            <p className=" z-10 text-white text-[30px] md:text-[50px]">{locale === "en" ? "ENTRUST YOUR WELLBEING TO US" : "CHO MỘT SỨC KHOẺ TOÀN DIỆN"}</p>
            </div>
            <img src={"https://api.echomedi.com/uploads/Copia_de_Copia_de_Blog_con_texto_45_a3a10a0ce1.jpg?updated_at=2023-01-07T01:53:51.796Z"} className="w-full absolute darkened-image" />
          </SwiperSlide>
          <SwiperSlide>
          <p className=" z-10 text-white text-[30px] md:text-[50px]">{locale === "en" ? "HEALTHCARE EVOLVED" : "NÂNG TẦM SỨC KHOẺ"}</p>
            <img src={"https://api.echomedi.com/uploads/xx_tac_dung_tuyet_voi_cua_chay_bo_doi_voi_suc_khoe_13_166260158933863732191_0_0_463_741_crop_1662601594362118297828_aad03ffce9.webp?updated_at=2023-01-07T01:56:00.148Z"} className="w-full absolute  darkened-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
