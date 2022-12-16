import React from "react";
import { useRouter } from 'next/router';

const contact = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <div className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 bg-emgreen text-white p-10">
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
        <p>{locale === "en" ? "Download Apps" : "Tải Ứng Dụng Ngay"}</p>
        <img width={150} height={100} src="https://echomedi.com/wp-content/uploads/2022/07/google-play-store-icon-download-28.png"/>
      </div>
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
      <p className="font-bold">{locale === "en" ? "ECHO MEDI'S LOCATIONS" : "HỆ THỐNG ECHO MEDI"}</p>
        <p className="font-bold">{locale === "en" ? "Ho Chi Minh City" : "Hồ Chí Minh"}</p>
        <p>{locale === "en" ? " - District 7" : "– Quận 7"}</p>
        <p>{locale === "en" ? " + 1026 Nguyen Van Linh, Tan Phong Ward, District 7." : "+ 1026 Nguyễn Văn Linh, P. Tân Phong, Quận 7."}</p>
        <p>{locale === "en" ? " - District 2" : "– Quận 2"}</p>
        <p>{locale === "en" ? " + 46 Nguyen Thi Dinh, An Phu Ward, District 2." : "+ 46 Nguyễn Thị Định, P. An Phú, Quận 2."}</p>

        <p className="font-bold">{locale === "en" ? "Binh Duong" : "Bình Dương"}</p>
        <p>{locale === "en" ? " + Canary Plaza, 5 Binh Duong Highway, Thuan Giao, Thuan An City." : "+ Canary Plaza, số 5 Đại lộ Bình Dương, Thuận Giao, Tp. Thuận An."}</p>
      </div>
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
        <p className="font-bold">{locale === "en" ? "POLICY" : "CHÍNH SÁCH"}</p>
        <p>{locale === "en" ? "Privacy Policy" : "Chính Sách Bảo Mật"}</p>
        <p className="font-bold">{locale === "en" ? "CONTACT" : "LIÊN HỆ"}</p>
        <p>{locale === "en" ? "Hotline: 1900 638 408" : "Hotline: 1900 638 408"}</p>
        <p>Email: contact@echomedi.com</p>
        <p className="font-bold">{locale === "en" ? "CLINIC HOURS" : "THỜI GIAN HOẠT ĐỘNG"}</p>

        <p>{locale === "en" ? "Monday - Saturday: 7:00 – 21:00" : "Thứ 2-  Thứ 7: 7:00 – 21:00"}</p>
        <p>{locale === "en" ? "Sunday: 7:00 – 15:00" : "Chủ Nhật: 7:00 – 15:00"}</p>
      </div>

    </div>
  );
};

export default contact;
