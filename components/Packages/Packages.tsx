import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const Packages = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <div id="packages" className="max-w-[1240px] mx-auto text-center">
      <h1 className="font-bold text-5xl p-4 underline">{locale === "en" ? "Health Plans" : "Gói chăm sóc"}</h1>
      <div className="grid grid-rows-none md:grid-cols-1 p-4 gap-4">
        <div className="w-full h-full col-span-1 md:col-span-1 row-span-2">
          {/* <h1 className="font-bold text-xl p-4 text-emgreen underline">Dịch Vụ Tại Phòng Khám</h1> */}
          <ul>
          <li className="p-2"><Link href="/packages/goi-cham-soc-phong-ngua" className="text-lg">{locale === "en" ? "Preventive Care Packages" : "Gói chăm Sóc Phòng Ngừa"}</Link></li>
          <li className="p-2"><Link href="/packages/goi-dieu-tri-ban-dau" className="text-lg">{locale === "en" ? "Primary Care Packages" : "Gói Điều Trị Ban Đầu"}</Link></li>
          <li className="p-2"><Link href="/packages/goi-quan-ly-benh-man-tinh" className="text-lg">{locale === "en" ? "On-Going Care Packages" : "Gói Quản Lý Bệnh Mạn Tính"}</Link></li>
          <li className="p-2"><Link href="/packages/goi-suc-khoe-toan-dien" className="text-lg">{locale === "en" ? "Wellness Packages" : "Gói Sức Khoẻ Toàn Diện"}</Link></li>
          <li className="p-2"><Link href="/packages/goi-xet-nghiem-di-truyen" className="text-lg">{locale === "en" ? "Gene Examination Packages" : "Gói Xét Nghiệm Di Truyền"}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packages;
