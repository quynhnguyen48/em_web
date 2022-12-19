import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from 'next/router';
import IgImg3 from "../../assets/uk.png";
import IgImg4 from "../../assets/vietnam.png";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const NavBar = () => {
  const router = useRouter();
  let { locale } = useRouter();
  locale = locale ?? "";
  const [nav, setNav] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logged, setLogged] = useState(false);
  const [numOfItem, setNumOfItem] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setLogged(true);
      axios.get('http://54.91.167.122:1337/api/product/getCart',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
          setNumOfItem(response.data.user.cart_lines?.length);
        })
        .catch(function (error) {
          console.log(error);
          // toast.error("Đăng ký thất bại")
        });
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNav1 = () => {
    setNav1(!nav1);
  };

  const handleNav2 = () => {
    setNav2(!nav2);
  };

  const handleNav3 = () => {
    setNav3(!nav3);
  };

  const tranlsate = (term: string, locale: string) => {
    if (locale === "en") {
      switch (term) {
        case "in_clinic_service":
          return "In-Clinic Services";
        case "preventive_care":
          return "Preventive care";
        case "primary_care":
          return "Primary Care";
        case "on_going_care":
          return "On-Going Care";
        case "wellness":
          return "Wellness";
        case "home_service":
          return "Home Service";
        case "home_visits":
          return "Home Visits";
        case "telemedicine":
          return "Telemedicine";
        case "services":
          return "Services";
        case "health_plans":
          return "Health Plans";
        case "preventive_care_packages":
          return "Preventive Care Packages";
        case "primary_care_packages":
          return "Primary Care Packages";
        case "on_going_care_packages":
          return "On-Going Care Packages";
        case "wellness_packages":
          return "Wellness Packages";
        case "gene_examination_packages":
          return "Gene Examination Packages";
        case "pharmacy":
          return "Pharmacy";
        case "monthly_packages":
          return "Monthly Packages";
        case "elderly":
          return "Elderly (60+)"
        case "middle_aged_man":
          return "Middle-aged Man (45+)";
        case "middle_aged_woman":
          return "Middle-aged Woman (45+)";
        case "adult":
          return "Adult (18-45)";
        case "teenager":
          return "Teenager (13-19)";
        case "child":
          return "Child (6 - 12)";
        case "health_concern":
          return "Health Concern";
        case "sleep":
          return "Sleep";
        case "smoking_cessation":
          return "Smoking Cessation";
        case "weight_loss":
          return "Weight Loss";
        case "skin_care_anti_aging":
          return "Skin Care & Anti-aging";
        case "hair_nails_treatment":
          return "Hair & Nails Treatment";
        case "pregnancy_care":
          return "Pregnancy Care";
        case "men_sexual_health":
          return "Men Sexual Health";
        case "women_sexual_health":
          return "Women Sexual Health";
        case "heart_blood_circulation":
          return "Heart & Blood Circulation";
        case "digestive_system":
          return "Digestive System";
        case "bone_joint_health":
          return "Bone & Joint Health";
        case "immune_system":
          return "Immune System";
        case "brain_health":
          return "Brain Health";
      }
    } else {
      switch (term) {
        case "in_clinic_service":
          return "Dịch Vụ Tại Phòng Khám";
        case "preventive_care":
          return "Chăm Sóc Phòng Ngừa";
        case "primary_care":
          return "Điều Trị Ban Đầu";
        case "on_going_care":
          return "Quản Lý Bệnh Mạn Tính";
        case "wellness":
          return "Sức Khoẻ Toàn Diện";
        case "home_service":
          return "Dịch Vụ Tại Nhà";
        case "home_visits":
          return "Chăm Sóc Tại Nhà";
        case "telemedicine":
          return "Chăm Sóc Từ Xa";
        case "services":
          return "Các Dịch Vụ";
        case "health_plans":
          return "Gói chăm sóc";
        case "preventive_care_packages":
          return "Gói Chăm Sóc Phòng Ngừa";
        case "primary_care_packages":
          return "Gói Điều Trị Ban Đầu";
        case "on_going_care_packages":
          return "Gói Quản Lý Bệnh Mạn Tính";
        case "wellness_packages":
          return "Gói Sức Khoẻ Toàn Diện";
        case "gene_examination_packages":
          return "Gói Xét Nghiệm Di Truyền";
        case "pharmacy":
          return "Nhà thuốc";
        case "monthly_packages":
          return "Gói Chăm Sóc Tháng";
        case "elderly":
          return "Người Lớn Tuổi (Trên 60 Tuổi)"
        case "middle_aged_man":
          return "Nam Trung Niên (Trên 45 tuổi)";
        case "middle_aged_woman":
          return "Nữ Trung Niên (Trên 45 Tuổi)";
        case "adult":
          return "Người Trưởng Thành (18 - 45 Tuổi)";
        case "teenager":
          return "Thanh Thiếu Niên (13 - 19 Tuổi)";
        case "child":
          return "Trẻ Em (6 - 12 Tuổi)";
        case "health_concern":
          return "Vấn Đề Sức Khoẻ";
        case "sleep":
          return "Ngủ ngon";
        case "smoking_cessation":
          return "Cai thuốc lá";
        case "weight_loss":
          return "Giảm cân";
        case "skin_care_anti_aging":
          return "Chăm Sóc Da";
        case "hair_nails_treatment":
          return "Chăm Sóc Tóc & Móng";
        case "pregnancy_care":
          return "Mang Thai";
        case "men_sexual_health":
          return "Sinh Lý Nam";
        case "women_sexual_health":
          return "Sinh Lý Nữ";
        case "heart_blood_circulation":
          return "Tim Mạch";
        case "digestive_system":
          return "Tiêu Hóa";
        case "bone_joint_health":
          return "Xương Khớp";
        case "immune_system":
          return "Đề Kháng Và Miễn Dịch";
        case "brain_health":
          return "Tinh Thần & Trí Não";
      }
    }
    return term;
  }

  useEffect(() => {
    setColor("#ffffff");
    setTextColor("#000000");
    // const changeColor = () => {
    //   setColor("#ffffff");
    //     setTextColor("#000000");
    //   // if (window.scrollY >= 90) {
    //   //   setColor("#ffffff");
    //   //   setTextColor("#000000");
    //   // } else {
    //   //   setColor("transparent");
    //   //   setTextColor("#ffffff");
    //   // }
    // };
    // window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 text-white">
        <Link href="/">
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            EC<span style={{ color: "#77b17d" }}>HO ME</span>DI
          </h1> */}
          <img className="w-32 sm:28" src="https://echomedi.com/wp-content/uploads/2022/08/cropped-LOGO-ECHOMEDI-01.png" />
          {/* <img style={{width: "200px"}} src="https://echomedi.com/wp-content/uploads/2022/08/cropped-LOGO-ECHOMEDI-01.png" /> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ml-20">
          <li className="p-4 flex">
            <div className="m-auto text-sm font-semibold">
              <Link href="/about">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"}</Link>
            </div>
          </li>
          <li className="py-4">
            {/* <Link href="#services">{locale ==="en" ? "Services" :"Các Dịch Vụ"}</Link> */}
            <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group ">
                <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
                  <span className="mr-2 text-sm">{tranlsate("services", locale)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen" style={{ width: "500px" }}>
                  <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg text-black bg-white border border-black">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-5 text-base">
                      <div>
                        <p className="text-sm underline font-semibold underline-offset-8 mb-4">
                          {tranlsate("in_clinic_service", locale ? locale : "")}
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-phong-ngua"}>
                            {tranlsate("preventive_care", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/dieu-tri-ban-dau"}>
                            {tranlsate("primary_care", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/quan-ly-benh-man-tinh"}>
                            {tranlsate("on_going_care", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/suc-khoe-toan-dien"}>
                            {tranlsate("wellness", locale)}
                          </Link>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg underline font-semibold underline-offset-8 mb-4 text-sm">
                          {tranlsate("home_service", locale)}
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-tai-nha"}>
                            {tranlsate("home_visits", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-tu-xa"}>
                            {tranlsate("telemedicine", locale)}
                          </Link>
                        </div>
                        {/* <p>
                          {tranlsate("vn_resident", locale)}
                        </p>
                        <p>
                          {tranlsate("non_vn_resident", locale)}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4 flex">
            <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group ">
                <button className="hover:bg-green-100	 text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
                  <span className="mr-2 text-sm">{tranlsate("health_plans", locale)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen" style={{ width: "300px" }}>
                  <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg  text-black bg-white border border-black">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 p-5 text-base">
                      <div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold block" href={"/packages/cham-soc-phong-ngua"}>
                            {tranlsate("preventive_care_packages", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold block" href={"/packages/dieu-tri-ban-dau"}>
                            {tranlsate("primary_care_packages", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold block" href={"/packages/quan-ly-benh-man-tinh"}>
                            {tranlsate("on_going_care_packages", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/suc-khoe-toan-dien"}>
                            {tranlsate("wellness_packages", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/goi-xet-nghiem-di-truyen"}>
                            {tranlsate("gene_examination_packages", locale)}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4 flex">
            {/* <div className="m-auto font-semibold">
              <Link href="/#contact">{locale ==="en" ? "Pharmacy" :"Nhà thuốc"}</Link>
            </div> */}
            <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group ">
                <button className="hover:bg-green-100	 text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
                  <span className="mr-2 text-sm">{tranlsate("pharmacy", locale)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen" style={{ width: "800px", marginLeft: "-200px" }}>
                  <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg  text-black bg-white border border-black">
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-3 p-5 text-base">
                      <div>
                        <p className="text-lg underline font-semibold underline-offset-8 mb-4 text-sm">
                          {tranlsate("monthly_packages", locale ? locale : "")}
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold block" href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-lon-tuoi-tuoi-60"}>
                            {tranlsate("elderly", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold block" href={"/products/goi-cham-soc-suc-khoe-cho-nam-gioi-do-tuoi-trung-nien-tuoi-45"}>
                            {tranlsate("middle_aged_man", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/products/goi-cham-soc-suc-khoe-cho-nu-gioi-do-tuoi-trung-nien-tuoi-45"}>
                            {tranlsate("middle_aged_woman", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-truong-thanh-tuoi-18-45"}>
                            {tranlsate("adult", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19"}>
                            {tranlsate("teenager", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/products/goi-cham-soc-suc-khoe-cho-tre-em-tuoi-6-12"}>
                            {tranlsate("child", locale)}
                          </Link>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl underline font-semibold underline-offset-8 mb-4 text-sm">
                          {tranlsate("health_concern", locale)}
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-ho-tro-giac-ngu"}>
                            {tranlsate("sleep", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-ho-tro-cai-thuoc-la"}>
                            {tranlsate("smoking_cessation", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-ho-tro-giam-can"}>
                            {tranlsate("weight_loss", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa"}>
                            {tranlsate("skin_care_anti_aging", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-cham-soc-va-phuc-hoi-toc-mong"}>
                            {tranlsate("hair_nails_treatment", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-cham-soc-suc-khoe-cho-phu-nu-mang-thai"}>
                            {tranlsate("pregnancy_care", locale)}
                          </Link>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl underline font-semibold underline-offset-8 mb-4 text-sm">
                          ___________________________
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-suc-khoe-sinh-ly-nam"}>
                            {tranlsate("men_sexual_health", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-suc-khoe-sinh-ly-nu"}>
                            {tranlsate("women_sexual_health", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-ho-tro-suc-khoe-tim-mach"}>
                            {tranlsate("heart_blood_circulation", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-ho-tro-tieu-hoa"}>
                            {tranlsate("digestive_system", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-phong-ngua-benh-xuong-khop"}>
                            {tranlsate("bone_joint_health", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-tang-suc-de-khoang-va-mien-dich"}>
                            {tranlsate("immune_system", locale)}
                          </Link>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 hover:underline font-semibold" href={"/products/goi-cai-thien-tri-nao"}>
                            {tranlsate("brain_health", locale)}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="p-4 flex">
            <div className="m-auto font-semibold text-sm">
              <Link href="/packages/thanh-vien">{locale === "en" ? "Member" : "Thành viên"}</Link>
            </div>
          </li>
          {!logged && <li className="p-4 flex">
            <div className="m-auto font-semibold text-sm">
              <Link href="/login">{locale === "en" ? "Member login" : "Tài khoản"}</Link>
            </div>
          </li>}
        </ul>
        <div className="flex space-x-2 justify-center">
          <a href={(locale === "en" ? "/en" : "") + "/contact"} type="button" className="font-semibold ml-5 sm:ml-2 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bg-green-700">
            {locale === "en" ? "Contact" : "Liên hệ"}
          </a>
        </div>
        {!logged && <div className="flex space-x-2 justify-center">
          <a href={(locale === "en" ? "/en" : "") + "/cart"} type="button" className="flex text-green-800 ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="ml-2" id="num-of-item">{numOfItem}</span>
          </a>
        </div>}
        <div className="m-auto">
          <div className="relative group hidden sm:block">
            <button className="text-black h-full flex flex-row items-center w-full text-base font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
              {locale === "en" ? <div
                className="flex"><Image
                  src={IgImg3}
                  alt="/"
                  width={25}
                  height={25}
                /><span className="ml-2">EN</span></div> :
                <div
                  className="flex"><Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  /><span className="ml-2">VI</span></div>
              }
            </button>
            <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen">
              <div className="bg-regal-blue text-black bg-white font-semibold" style={{ width: "100px" }}>
                <div className="flex">

                  <button onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: locale === "en" ? "vi" : "en" });
                  }}>
                    {locale === "en" ? <div
                      className="flex"><Image
                        src={IgImg4}
                        alt="/"
                        width={25}
                        height={25}
                      /><span className="ml-2">VI</span></div> :
                      <div
                        className="flex"><Image
                          src={IgImg3}
                          alt="/"
                          width={25}
                          height={25}
                        /><span className="ml-2">EN</span></div>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"}</Link>
            </li>
            <li
              onClick={() => {
                handleNav();
                handleNav1();
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">{locale === "en" ? "Services" : "Các Dịch Vụ"}</Link>
            </li>
            <li
              onClick={() => {
                handleNav();
                handleNav2();
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#packages">{locale === "en" ? "Health Plans" : "Gói chăm sóc"}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#portfolio">{locale === "en" ? "Pharmacy" : "Nhà thuốc"}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">{locale === "en" ? "Member" : "Thành viên"}</Link>
            </li>
            <div className="m-auto">
              <div>
              </div>
              <ul className="flex">
                <li className="inline mr-2 cursor-pointer relative" onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: "en" });
                }}>          <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  />
                </li>
                <li className="inline cursor-pointer" onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: "vi" })
                }}>
                  <Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  />
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div
          className={
            nav1
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <p className="text-2xl">{tranlsate("in_clinic_service", locale)}</p>
            <div className="mb-2">
              <Link onClick={handleNav1} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/cham-soc-phong-ngua"}>
                {tranlsate("preventive_care", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav1} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/dieu-tri-ban-dau"}>
                {tranlsate("primary_care", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav1} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold" href={"/packages/quan-ly-benh-man-tinh"}>
                {tranlsate("on_going_care", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav1} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold" href={"/packages/suc-khoe-toan-dien"}>
                {tranlsate("wellness", locale)}
              </Link>
            </div>
            <p className="text-2xl mt-10">{tranlsate("home_service", locale)}</p>
            <div className="mb-2">
              <Link onClick={handleNav1} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/cham-soc-tai-nha"}>
                {tranlsate("home_visits", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav1} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/cham-soc-tu-xa"}>
                {tranlsate("telemedicine", locale)}
              </Link>
            </div>
            <div className="m-auto">
              <div>
              </div>
              <ul className="flex">
                <li className="inline mr-2 cursor-pointer relative" onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: "en" });
                }}>          <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  />
                </li>
                <li className="inline cursor-pointer" onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: "vi" })
                }}>
                  <Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  />
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div
          className={
            nav2
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <div className="mb-2">
              <Link onClick={handleNav2} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/cham-soc-phong-ngua"}>
                {tranlsate("preventive_care_packages", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav2} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/dieu-tri-ban-dau"}>
                {tranlsate("primary_care_packages", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav2} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold" href={"/packages/quan-ly-benh-man-tinh"}>
                {tranlsate("on_going_care_packages", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav2} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold" href={"/packages/suc-khoe-toan-dien"}>
                {tranlsate("wellness_packages", locale)}
              </Link>
            </div>
            <div className="mb-2">
              <Link onClick={handleNav2} legacyBehavior={false} className="p-2 text-white hover:text-slate-200 font-semibold block" href={"/packages/goi-xet-nghiem-di-truyen"}>
                {tranlsate("gene_examination_packages", locale)}
              </Link>
            </div>
            <div className="m-auto">
              <div>
              </div>
              <ul className="flex">
                <li className="inline mr-2 cursor-pointer relative" onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: "en" });
                }}>          <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  />
                </li>
                <li className="inline cursor-pointer" onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: "vi" })
                }}>
                  <Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  />
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <Toaster
        position="bottom-center"
      />
    </div>
  );
};

export default NavBar;
