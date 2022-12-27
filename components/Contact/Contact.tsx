import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import LinkComponent from "../Link";

const contact = () => {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
  return (
    <div 
    style={{
      backgroundColor: "#9EA99A"
    }}
    className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 text-white p-10">

      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col items-left max-w-[200px]">
        <div className="max-w-[500px] h-full col-span-2 md:col-span-1 row-span-2">
          <div className="flex justify-left">
            <div className="mb-3 w-full">
              <p>{locale === "en" ? "Newsletter" : "Đăng Ký Nhận Thông Tin"}</p>
              <input
                type="text"
                className="
                w-64
                    form-control
                    mt-3
                    mb-3
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                id="exampleFormControlInput1"
                placeholder={locale === "en" ? "Your Email" : "Email của bạn"}
              />
            </div></div></div>
            <div 
              style={{
                backgroundColor: "#416045",
                color: "white",
              }}
            className="w-48 text-center mb-4 inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out  text-black rounded">
          <LinkComponent href={"/insight"} locale="" skipLocaleHandling={false}>
            {locale == "en" ? "Subscribe" : "Đăng ký"}</LinkComponent>
        </div>
        <div 
          style={{
            backgroundColor: "#416045",
            color: "white",
          }}
        className="w-48 text-center mb-4 inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out  text-black rounded">
          <LinkComponent href={"/insight"} locale="" skipLocaleHandling={false}>
            {locale == "en" ? "Insight" : "Tổng quan"}</LinkComponent>
        </div>
        <p className="font-semibold mb-4 text-lg">{locale === "en" ? "Download Apps" : "Tải Ứng Dụng Ngay"}</p>
        <img width={150} height={100} src="https://echomedi.com/wp-content/uploads/2022/07/google-play-store-icon-download-28.png" />
        <div className="mt-8 flex flex-row w-40 grid grid-cols-3 md:grid-cols-3  text-white">
          <a target={"_blank"} href="https://www.facebook.com/ECHO-MEDI-104159875780641?gidzl=VhMH36yZUJrohfK8RJvuENoibGDxQYauCFp53YbcVMXXeP0FV6SkRM6bobTyD25jO_N5MZ4fezq3PY9vE0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </a>
          <a target={"_blank"} href="https://www.youtube.com/channel/UCJ7phE7dq0lbhdOzu5R0_nw/featured">
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
          <a target={"_blank"} href="https://www.tiktok.com/@echomedi">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 512 512" id="icons"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>
          </a>
        </div>
      </div>
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
        <p className="font-bold">{locale === "en" ? "ECHO MEDI CLINIC + PHARMACY" : "PHÒNG KHÁM + NHÀ THUỐC ECHO MEDI"}</p>
        <p className="font-bold mt-4">{locale === "en" ? "Ho Chi Minh City" : "Hồ Chí Minh"}</p>
        <p>{locale === "en" ? " - District 7" : "– Quận 7"}</p>
        <p>{locale === "en" ? " + 1026 Nguyen Van Linh, Tan Phong Ward, District 7." : "+ 1026 Nguyễn Văn Linh, P. Tân Phong, Quận 7."}</p>
        <p>{locale === "en" ? " - District 2" : "– Quận 2"}</p>
        <p>{locale === "en" ? " + 46 Nguyen Thi Dinh, An Phu Ward, District 2." : "+ 46 Nguyễn Thị Định, P. An Phú, Quận 2."}</p>

        <p className="font-bold mt-4">{locale === "en" ? "Binh Duong" : "Bình Dương"}</p>
        <p>{locale === "en" ? " + Canary Plaza, 5 Binh Duong Highway, Thuan Giao, Thuan An City." : "+ Canary Plaza, số 5 Đại lộ Bình Dương, Thuận Giao, Tp. Thuận An."}</p>
      </div>
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
        <p className="font-bold">{locale === "en" ? "POLICY" : "CHÍNH SÁCH"}</p>
        <p><LinkComponent locale={""} skipLocaleHandling={false} href="/services/chinh-sach-bao-mat">{locale === "en" ? "Privacy Policy" : "Chính Sách Bảo Mật"}</LinkComponent></p>
        <p className="font-bold mt-4"><LinkComponent locale={""} skipLocaleHandling={false} href="/contact">{locale === "en" ? "CONTACT" : "LIÊN HỆ"}</LinkComponent></p>
        <p>{locale === "en" ? "Hotline: 1900 638 408" : "Hotline: 1900 638 408"}</p>
        <p>Email: contact@echomedi.com</p>
        <p className="font-bold mt-4">{locale === "en" ? "CLINIC HOURS" : "THỜI GIAN HOẠT ĐỘNG"}</p>

        <p>{locale === "en" ? "Monday - Saturday: 7:00 – 21:00" : "Thứ 2-  Thứ 7: 7:00 – 21:00"}</p>
        <p>{locale === "en" ? "Sunday: 7:00 – 15:00" : "Chủ Nhật: 7:00 – 15:00"}</p>
      </div>

    </div>
  );
};

export default contact;
