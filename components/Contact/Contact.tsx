import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const contact = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <div className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 bg-emgreen text-white p-10">
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col items-center">
        <p className="font-semibold mb-4">{locale === "en" ? "Download Apps" : "Tải Ứng Dụng Ngay"}</p>
        <img width={150} height={100} src="https://echomedi.com/wp-content/uploads/2022/07/google-play-store-icon-download-28.png"/>
        <div className="mt-8 flex flex-row w-40 grid grid-rows-none md:grid-cols-3 bg-emgreen text-white">
          <a target={"_blank"} href="https://www.facebook.com/ECHO-MEDI-104159875780641?gidzl=VhMH36yZUJrohfK8RJvuENoibGDxQYauCFp53YbcVMXXeP0FV6SkRM6bobTyD25jO_N5MZ4fezq3PY9vE0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg></a>
          <a target={"_blank"} href="https://www.youtube.com/channel/UCJ7phE7dq0lbhdOzu5R0_nw/featured"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40px" height="40px"><path fill="#f78f8f" d="M37.625,28.838c-0.378,1.96-1.985,3.453-3.97,3.733c-3.119,0.467-7.817,0.928-13.677,0.928 c-5.765,0-10.558-0.533-13.772-1c-1.985-0.28-3.592-1.773-3.97-3.733c-0.378-2.147-0.732-4.82-0.732-8.74s0.397-6.718,0.775-8.865 c0.378-1.96,1.985-3.453,3.97-3.733c3.119-0.467,7.912-1.053,13.772-1.053S30.485,7.033,33.699,7.5 c1.985,0.28,3.592,1.773,3.97,3.733c0.378,2.147,0.832,4.945,0.832,8.865C38.405,24.018,38.003,26.692,37.625,28.838z"/><path fill="#c74343" d="M20.003,7c5.815,0,10.841,0.553,14.037,1.017c1.575,0.222,2.832,1.401,3.124,2.917 C37.523,12.97,38,16.126,38,19.976c-0.106,4.38-0.569,7.576-0.833,9.075c-0.295,1.532-1.552,2.71-3.136,2.934 C31.991,32.29,26.538,33,20.003,33c-6.121,0-11.42-0.637-14.037-1.017c-1.575-0.222-2.832-1.401-3.124-2.917 C2.503,27.147,2.1,24.016,2.1,20s0.403-7.147,0.738-9.051c0.295-1.532,1.552-2.71,3.136-2.934C8.015,7.71,13.467,7,20.003,7 M20.003,6C14.143,6,8.945,6.56,5.826,7.027C3.841,7.307,2.234,8.8,1.856,10.76C1.478,12.907,1.1,16.08,1.1,20 s0.378,7.093,0.756,9.24c0.378,1.96,1.985,3.453,3.97,3.733C9.039,33.44,14.237,34,20.003,34c5.86,0,11.058-0.56,14.177-1.027 c1.985-0.28,3.592-1.773,3.97-3.733C38.527,27.093,38.905,23.92,39,20c0-3.92-0.473-7.093-0.851-9.24 c-0.378-1.96-1.985-3.453-3.97-3.733C30.966,6.56,25.863,6,20.003,6L20.003,6z"/><polygon fill="#fff" points="16,26 16,14 27,20"/></svg></a>
          <a target={"_blank"} href="https://www.tiktok.com/@echomedi"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#212121" fill-rule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clip-rule="evenodd"/><path fill="#ec407a" fill-rule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clip-rule="evenodd"/><path fill="#81d4fa" fill-rule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z" clip-rule="evenodd"/></svg></a>
        </div>
      </div>
      <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
      <p className="font-bold">{locale === "en" ? "ECHO MEDI'S LOCATIONS" : "HỆ THỐNG ECHO MEDI"}</p>
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
        <Link href="/services/chinh-sach-bao-mat">{locale === "en" ? "Privacy Policy" : "Chính Sách Bảo Mật"}</Link>
        <p className="font-bold mt-4">{locale === "en" ? "CONTACT" : "LIÊN HỆ"}</p>
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
