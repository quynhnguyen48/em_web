import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import LinkComponent from "../Link";

const Portfolio = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <div id="services" className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-5xl p-4 underline">{locale === "en" ? "Services" : "Các dịch vụ"}</h1>
      <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
          <h1 className="font-bold text-xl p-4 text-emgreen underline">{locale === "en" ? "In-Clinic Services" : "Dịch Vụ Tại Phòng Khám"}</h1>
          <ul>
            <li className="p-2"><LinkComponent href="/packages/cham-soc-phong-ngua" skipLocaleHandling={false} locale={""}>{locale === "en" ? "Preventive Care" : "Chăm Sóc Phòng Ngừa"}</LinkComponent></li>
            <li className="p-2"><LinkComponent href="/packages/dieu-tri-ban-dau" skipLocaleHandling={false} locale={""}>{locale === "en" ? "Primary Care" : "Điều Trị Ban Đầu"}</LinkComponent></li>
            <li className="p-2"><LinkComponent href="/packages/quan-ly-benh-man-tinh" skipLocaleHandling={false} locale={""}>{locale === "en" ? "On-Going Care" : "Quản Lý Bệnh Mạn Tính"}</LinkComponent></li>
            <li className="p-2"><LinkComponent href="/packages/suc-khoe-toan-dien" skipLocaleHandling={false} locale={""}>{locale === "en" ? "Wellness" : "Sức Khoẻ Toàn Diện"}</LinkComponent></li>
          </ul>
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
        <h1 className="font-bold text-xl p-4 text-emgreen underline">{locale === "en" ? "Home Services" : "Dịch Vụ Tại Phòng Khám"}</h1>
          <ul>
          <li><LinkComponent href="/packages/cham-soc-tai-nha" skipLocaleHandling={false} locale={""}>{locale === "en" ? "Home Visits" : "Chăm sóc tại nhà"}</LinkComponent></li>

          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
