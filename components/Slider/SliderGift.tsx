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
  // let  swiper : any;
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal0, setShowModal0] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  // SwiperCore.use([Autoplay]);

  console.log('activeIndex', swiper?.activeIndex)

  return (
    <div className="">

      {swiper != null && <div className="text-green-800 w-full h-full col-span-2 md:col-span-1 row-span-2 text-left">
        <p
          onClick={e => { swiper.slideTo(0); setActiveIndex(0) }}
          className={`text-xl mb-2 hover:underline ${activeIndex == 0 && "font-semibold"}`}>{locale == "en" ? "For Dad/ Grandpa" : "Dành Tặng Bố/ Ông"}</p>
        <p
          onClick={e => { swiper.slideTo(1); setActiveIndex(1) }}
          className={`text-xl mb-2 hover:underline ${activeIndex == 1 && "font-semibold"}`}>{locale == "en" ? "For Mom/ Grandma" : "Dành Tặng Mẹ/ Bà"}</p>
        <p
          onClick={e => { swiper.slideTo(2); setActiveIndex(2) }}
          className={`text-xl mb-2 hover:underline ${activeIndex == 2 && "font-semibold"}`}>{locale == "en" ? "For Siblings/ Relatives" : "Dành Tặng Anh, Chị, Em / Họ Hàng"}</p>
        <p
          onClick={e => { swiper.slideTo(3); setActiveIndex(3) }}
          className={`text-xl mb-2 hover:underline ${activeIndex == 3 && "font-semibold"}`}>{locale == "en" ? "For Corporate/ Employees" : "Dành Tặng Doanh Nghiệp/ Nhân Viên"}</p>
        <p
          onClick={e => { swiper.slideTo(4); setActiveIndex(4) }}
          className={`text-xl mb-2 hover:underline ${activeIndex == 4 && "font-semibold"}`}>{locale == "en" ? "For Membership" : "Dành Tặng Thành Viên"}</p>
      </div>
      }
      {/* <div className="w-full h-full col-span-2 md:col-span-1 row-span-2"> */}

      <div id="gallery" className="w-full mx-auto">
        <div className="relative flex justify-center h-[350px] md:h-[450px]">
          <Swiper className="mySwiper" onSwiper={(swiper) => setSwiper(swiper)}>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_10_56244bd5cc.jpg?updated_at=2023-01-07T04:11:28.422Z"} className="w-full absolute darkened-image" />
              <button
                style={{
                  zIndex: 50,
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "40px",
                  fontWeight: 600,
                }}
                onClick={e => setShowModal0(true)}
              >Tìm hiểu thêm</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_8_9f3bbfdf76.jpg?updated_at=2023-01-07T04:12:19.085Z"} className="w-full absolute darkened-image" />
              <button
                style={{
                  zIndex: 50,
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "40px",
                  fontWeight: 600,
                }}
                onClick={e => setShowModal1(true)}
              >Tìm hiểu thêm</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_9_4fc1bfc2be.jpg?updated_at=2023-01-07T04:12:51.809Z"} className="w-full absolute  darkened-image" />
              <button
                style={{
                  zIndex: 50,
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "40px",
                  fontWeight: 600,
                }}
                onClick={e => setShowModal2(true)}
              >Tìm hiểu thêm</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_11_0a48d0d9f7.jpg?updated_at=2023-01-07T04:13:21.680Z"} className="w-full absolute  darkened-image" />
              <button
                style={{
                  zIndex: 50,
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "40px",
                  fontWeight: 600,
                }}
                onClick={e => setShowModal3(true)}
              >Tìm hiểu thêm</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"https://api.echomedi.me/uploads/Untitled_design_7_24962e0c2a.jpg?updated_at=2023-01-07T04:13:45.086Z"} className="w-full absolute  darkened-image" />
              <button
                style={{
                  zIndex: 50,
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "40px",
                  fontWeight: 600,
                }}
                onClick={e => setShowModal4(true)}
              >Tìm hiểu thêm</button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {activeIndex == 0 && showModal0 && <div>
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-4 py-3 text-right">
                  <button onClick={e => setShowModal0(false)} type="button" className="absolute text-white rounded mr-2 top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
                  </button>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl mb-4 underline">Dành tặng Bố/Ông</p>
                <p>ECHO MEDI cung cấp 4 loại gói sức khoẻ trong phần Quà Tặng này, hãy chọn 1 gói cho người bạn muốn tặng. Với mỗi gói sẽ được tặng kèm thêm một gói quản lý sức khỏe. Hãy lựa chọn và tuỳ chỉnh món quà để dành tặng những người thân yêu của mình.</p>

                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4 underline">Gói Khám</p>
                <div className="grid grid-rows-none p-4 gap-4">
                  <ul className="list-disc	">
                    <li>Gói khám sức khoẻ tổng quát</li>
                    <li>Gói quản lý ngoại trú bệnh tăng huyết áp</li>
                    <li>Gói khám sức khoẻ tổng quát dành cho nam giới</li>
                    <li>Gói quản lý ngoại trú bệnh đái tháo đường</li>
                  </ul>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4 underline">Gói Khám Bổ Sung</p>
                <div className="grid grid-rows-none p-4 gap-4">

                  <ul className="list-disc	">
                    <li>Chương Trình Cai Thuốc Lá</li>
                    <li>Quản Lý Cân Nặng</li>
                    <li>Chương Trình Sức Khỏe Tim Mạch</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div></div>}
      {activeIndex == 1 && showModal1 && <div>
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-4 py-3 text-right">
                  <button onClick={e => setShowModal1(false)} type="button" className="absolute text-white rounded mr-2 top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
                  </button>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl mb-4">Dành tặng Mẹ/Bà</p>
                <p>ECHO MEDI cung cấp 4 loại gói sức khoẻ trong phần Quà Tặng này, hãy chọn 1 gói cho người bạn muốn tặng. Với mỗi gói sẽ được tặng kèm thêm một gói quản lý sức khỏe. Hãy lựa chọn và tuỳ chỉnh món quà để dành tặng những người thân yêu của mình.</p>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám</p>
                <div className="grid grid-rows-none p-4 gap-4">
                  <ul className="list-disc	">
                    <li>Gói khám sức khoẻ tổng quát</li>
                    <li>Gói quản lý ngoại trú bệnh tăng huyết áp</li>
                    <li>Gói khám sức khoẻ tổng quát dành cho phụ nữ</li>
                    <li>Gói quản lý ngoại trú bệnh đái tháo đường</li>
                  </ul>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám Bổ Sung</p>
                <div className="grid grid-rows-none p-4 gap-4">

                  <ul className="list-disc	">
                    <li>Sức khoẻ tinh thần</li>
                    <li>Quản Lý Cân Nặng</li>
                    <li>Sức khoẻ nội tiết tố</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div></div>}
      {activeIndex == 2 && showModal2 && <div>
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-4 py-3 text-right">
                  <button onClick={e => setShowModal2(false)} type="button" className="absolute text-white rounded mr-2 top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
                  </button>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl mb-4">Dành tặng Mẹ/Bà</p>
                <p>ECHO MEDI cung cấp 4 loại gói sức khoẻ trong phần Quà Tặng này, hãy chọn 1 gói cho người bạn muốn tặng. Với mỗi gói sẽ được tặng kèm thêm một gói quản lý sức khỏe. Hãy lựa chọn và tuỳ chỉnh món quà để dành tặng những người thân yêu của mình.</p>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám</p>
                <div className="grid grid-rows-none p-4 gap-4">
                  <ul className="list-disc	">
                    <li>Gói khám sức khoẻ tổng quát</li>
                    <li>Gói quản lý ngoại trú bệnh tăng huyết áp</li>
                    <li>Gói khám sức khoẻ tổng quát dành cho phụ nữ</li>
                    <li>Gói quản lý ngoại trú bệnh đái tháo đường</li>
                  </ul>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám Bổ Sung</p>
                <div className="grid grid-rows-none p-4 gap-4">

                  <ul className="list-disc	">
                    <li>Sức khoẻ tinh thần</li>
                    <li>Quản Lý Cân Nặng</li>
                    <li>Sức khoẻ nội tiết tố</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div></div>}
      {activeIndex == 3 && showModal3 && <div>
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-4 py-3 text-right">
                  <button onClick={e => setShowModal3(false)} type="button" className="absolute text-white rounded mr-2 top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
                  </button>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl mb-4">Dành Tặng Doanh Nghiệp/ Nhân Viên</p>
                <p>ECHO MEDI cung cấp 3 loại gói sức khoẻ trong phần Quà Tặng này, hãy chọn 1 gói cho người bạn muốn tặng. Với mỗi gói sẽ được tặng kèm thêm một gói quản lý sức khỏe. Hãy lựa chọn và tuỳ chỉnh món quà để dành tặng những người thân yêu của mình.</p>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám</p>
                <div className="grid grid-rows-none p-4 gap-4">
                  <ul className="list-disc	">
                    <li>Gói khám sức khoẻ tổng quát</li>
                    <li>Gói khám sức khoẻ hậu COVID-19</li>
                    <li>Tầm soát bệnh lý cơ xương khớp</li>
                  </ul>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám Bổ Sung</p>
                <div className="grid grid-rows-none p-4 gap-4">

                  <ul className="list-disc	">
                    <li>Sức khoẻ tinh thần</li>
                    <li>Chương trình cai thuốc lá</li>
                    <li>Quản lý cân nặng</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div></div>}
      {activeIndex == 4 && showModal4 && <div>
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-4 py-3 text-right">
                  <button onClick={e => setShowModal4(false)} type="button" className="absolute text-white rounded mr-2 top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
                  </button>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl mb-4">Dành Tặng Doanh Nghiệp/ Nhân Viên</p>
                <p>ECHO MEDI cung cấp 3 loại gói sức khoẻ trong phần Quà Tặng này, hãy chọn 1 gói cho người bạn muốn tặng. Với mỗi gói sẽ được tặng kèm thêm một gói quản lý sức khỏe. Hãy lựa chọn và tuỳ chỉnh món quà để dành tặng những người thân yêu của mình.</p>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám</p>
                <div className="grid grid-rows-none p-4 gap-4">
                  <ul className="list-disc	">
                    <li>Gói khám sức khoẻ tổng quát</li>
                    <li>Gói khám sức khoẻ hậu COVID-19</li>
                    <li>Tầm soát bệnh lý cơ xương khớp</li>
                  </ul>
                </div>
                <p style={{ backgroundColor: "rgb(220 252 231" }} className="text-center text-2xl my-4">Gói Khám Bổ Sung</p>
                <div className="grid grid-rows-none p-4 gap-4">

                  <ul className="list-disc	">
                    <li>Sức khoẻ tinh thần</li>
                    <li>Chương trình cai thuốc lá</li>
                    <li>Quản lý cân nặng</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div></div>}
    </div>

  );
};

export default Slider;
