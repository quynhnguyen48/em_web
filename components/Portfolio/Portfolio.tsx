import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

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
            <li className="p-2"><Link href="/packages/cham-soc-phong-ngua" className="text-lg">{locale === "en" ? "Preventive Care" : "Chăm Sóc Phòng Ngừa"}</Link></li>
            <li className="p-2"><Link href="/packages/dieu-tri-ban-dau" className="text-lg">{locale === "en" ? "Primary Care" : "Điều Trị Ban Đầu"}</Link></li>
            <li className="p-2"><Link href="/packages/quan-ly-benh-man-tinh" className="text-lg">{locale === "en" ? "On-Going Care" : "Quản Lý Bệnh Mạn Tính"}</Link></li>
            <li className="p-2"><Link href="/packages/suc-khoe-toan-dien" className="text-lg">{locale === "en" ? "Wellness" : "Sức Khoẻ Toàn Diện"}</Link></li>
          </ul>
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
        <h1 className="font-bold text-xl p-4 text-emgreen underline">{locale === "en" ? "Home Services" : "Dịch Vụ Tại Phòng Khám"}</h1>
          <ul>
          <li><Link href="/packages/cham-soc-tai-nha" className="text-lg">{locale === "en" ? "Home Visits" : "Chăm sóc tại nhà"}</Link></li>

          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
