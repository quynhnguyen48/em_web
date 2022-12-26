import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from 'next/router';
import IgImg3 from "../../assets/uk.png";
import IgImg4 from "../../assets/vietnam.png";
// import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import LinkComponent from "../Link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logged, setLogged] = useState(false);
  const [numOfItem, setNumOfItem] = useState(0);

  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setLogged(true);
      fetch('http://3.89.245.84:1337/api/product/getCart',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => response.json())
        .then(function (response) {
          console.log('response', response)
          setNumOfItem(response.user?.cart_lines?.length);
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
        <LinkComponent href={"/"} locale={""} skipLocaleHandling={false}>
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            EC<span style={{ color: "#77b17d" }}>HO ME</span>DI
          </h1> */}
          <img className="w-32 sm:28" src="https://echomedi.com/wp-content/uploads/2022/08/cropped-LOGO-ECHOMEDI-01.png" />
          {/* <img style={{width: "200px"}} src="https://echomedi.com/wp-content/uploads/2022/08/cropped-LOGO-ECHOMEDI-01.png" /> */}
        </LinkComponent>
        <ul style={{ color: `${textColor}` }} className="hidden md:flex ml-20">
          <li className="py-4 flex">
            <div className="m-auto font-semibold text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded-full">
              <LinkComponent locale={""} skipLocaleHandling={false} href="/about">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"}</LinkComponent>
            </div>
          </li>
          <li className="py-4">
            {/* <Link href="#services">{locale ==="en" ? "Services" :"Các Dịch Vụ"}</Link> */}
            <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group ">
                <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left bg-transparent rounded-full md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
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
                          <LinkComponent href={"/packages/cham-soc-phong-ngua"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("preventive_care", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <LinkComponent href={"/packages/dieu-tri-ban-dau"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("primary_care", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <LinkComponent href={"/packages/quan-ly-benh-man-tinh"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("on_going_care", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <LinkComponent href={"/packages/suc-khoe-toan-dien"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("wellness", locale)}
                          </LinkComponent>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm underline font-semibold underline-offset-8 mb-4 text-sm">
                          {tranlsate("home_service", locale)}
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <LinkComponent href={"/packages/cham-soc-tai-nha"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("home_visits", locale)}
                          </LinkComponent>
                        </div>
                        {/* <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1 px-2 py-1">
                          <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-tu-xa"}>
                            {tranlsate("telemedicine", locale)}
                          </Link>
                        </div> */}
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
                <button className="hover:bg-green-100	 text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left bg-transparent rounded-full md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
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
                          <LinkComponent href={"/packages/goi-cham-soc-phong-ngua"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("preventive_care_packages", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/packages/goi-dieu-tri-ban-dau"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("primary_care_packages", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/packages/goi-quan-ly-benh-man-tinh"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("on_going_care_packages", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/packages/goi-suc-khoe-toan-dien"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("wellness_packages", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/packages/goi-xet-nghiem-di-truyen"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("gene_examination_packages", locale)}
                          </LinkComponent>
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
                <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left bg-transparent rounded-full md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
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
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-lon-tuoi-tuoi-60"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("elderly", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nam-gioi-do-tuoi-trung-nien-tuoi-45"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("middle_aged_man", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nu-gioi-do-tuoi-trung-nien-tuoi-45"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("middle_aged_woman", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-truong-thanh-tuoi-18-45"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("adult", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("teenager", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-tre-em-tuoi-6-12"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("child", locale)}
                          </LinkComponent>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl underline font-semibold underline-offset-8 mb-4 text-sm">
                          {tranlsate("health_concern", locale)}
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-ho-tro-giac-ngu"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("sleep", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-ho-tro-cai-thuoc-la"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("smoking_cessation", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-ho-tro-giam-can"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("weight_loss", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("skin_care_anti_aging", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-va-phuc-hoi-toc-mong"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("hair_nails_treatment", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-phu-nu-mang-thai"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("pregnancy_care", locale)}
                          </LinkComponent>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl underline font-semibold underline-offset-8 mb-4 text-sm">
                          _________________
                        </p>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-suc-khoe-sinh-ly-nam"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("men_sexual_health", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-suc-khoe-sinh-ly-nu"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("women_sexual_health", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-ho-tro-suc-khoe-tim-mach"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("heart_blood_circulation", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-ho-tro-tieu-hoa"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("digestive_system", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-phong-ngua-benh-xuong-khop"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("bone_joint_health", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-tang-suc-de-khoang-va-mien-dich"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("immune_system", locale)}
                          </LinkComponent>
                        </div>
                        <div className="mb-2 text-sm hover:bg-green-100 hover:underline rounded-full px-2 py-1">
                          <LinkComponent href={"/products/goi-cai-thien-tri-nao"} locale={""} skipLocaleHandling={false}>
                            {tranlsate("brain_health", locale)}
                          </LinkComponent>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4 flex">
            <div className="m-auto font-semibold text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded-full">
              <LinkComponent href="/membership" locale={""} skipLocaleHandling={false}>{locale === "en" ? "Member" : "Thành viên"}</LinkComponent>
            </div>
          </li>
          {!logged && <li className="p-4 flex">
            <div className="m-auto font-semibold text-sm">
              <LinkComponent href="/login" locale={""} skipLocaleHandling={false}>{locale === "en" ? "Member login" : "Tài khoản"}</LinkComponent>
            </div>
          </li>}
        </ul>
        {logged && <div className="flex space-x-2 justify-center">
          <LinkComponent href={"/cart"} skipLocaleHandling={false} locale={""}>
            <div className="flex text-green-800 ml-5 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <span className="ml-2 font-bold" id="num-of-item">{numOfItem == 0 ? '' : numOfItem}</span>
          </LinkComponent>
        </div>}
        <div className="flex space-x-2 justify-center font-bold">
          <LinkComponent href="/contact" skipLocaleHandling={false} locale={""}>
            <div className="font-bold ml-5 inline-block px-6 py-2.5 text-black font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200">
              {locale === "en" ? "Contact" : "Liên hệ"}
            </div>
          </LinkComponent>
        </div>
        <div className="m-auto">
          <div className="relative group hidden md:block">
            <button className="text-black h-full flex flex-row items-center w-full text-base font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-montserrat">
              {locale === "vi" ? <div
                className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" version="1.1">
                  <rect width="30" height="20" fill="#da251d" />
                  <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" />
                </svg>
              </div> :
                <div
                  className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="20">
                    <clipPath id="s">
                      <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id="t">
                      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                    </clipPath>
                    <g clip-path="url(#s)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
                      <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
                    </g>
                  </svg>
                </div>
              }
            </button>
            <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen">
              <div className="bg-regal-blue text-black bg-white font-semibold" style={{ width: "100px" }}>
                <div className="flex">

                  <button onClick={() => {
                    let href = router.asPath;
                    let pName = router.pathname;
                    Object.keys(router.query).forEach((k) => {
                      if (k === 'locale') {
                        pName = pName.replace(`[${k}]`, locale == "en" ? "vi" : "en")
                        console.log('pName ', pName)
                        return
                      }
                      pName = pName.replace(`[${k}]`, router.query[k] as string);
                      console.log('pName ', pName)
                    })

                    location.href = pName;
                  }}>
                    {locale === "vi" ? <div
                      className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="20">
                        <clipPath id="s">
                          <path d="M0,0 v30 h60 v-30 z" />
                        </clipPath>
                        <clipPath id="t">
                          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                        </clipPath>
                        <g clip-path="url(#s)">
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
                          <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
                        </g>
                      </svg>
                    </div> :
                      <div
                        className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" version="1.1">
                          <rect width="30" height="20" fill="#da251d" />
                          <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" />
                        </svg>
                      </div>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 text-black">
          {nav ? (
            <AiOutlineClose size={20}/>
          ) : (
            <AiOutlineMenu size={20}/>
          )}
          
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
          }
        >
          
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <LinkComponent locale="" skipLocaleHandling={false} href="/about">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"}</LinkComponent>
            </li>
            <li
              onClick={() => {
                handleNav();
                handleNav1();
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <button>{locale === "en" ? "Services" : "Các Dịch Vụ"}</button>
            </li>
            <li
              onClick={() => {
                handleNav();
                handleNav2();
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <button>{locale === "en" ? "Health Plans" : "Gói chăm sóc"}</button>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <button>{locale === "en" ? "Pharmacy" : "Nhà thuốc"}</button>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <LinkComponent href={"/membership"} locale="" skipLocaleHandling={false}>{locale === "en" ? "Member" : "Thành viên"}</LinkComponent>
            </li>
            <div className="m-auto">
              <div>
              </div>
              <ul className="flex">
                <li className="inline mr-2 cursor-pointer relative" onClick={() => {
                  const router = useRouter()

                  let href = router.asPath
                  let pName = router.pathname

                  console.log('href pName', href, pName)
                }}>
                  {/* <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
                </li>
                <li className="inline cursor-pointer" onClick={() => {
                  const router = useRouter()

                  let href = router.asPath
                  let pName = router.pathname

                  console.log('href pName', href, pName)
                }}>
                  {/* <Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
                </li>
              </ul>
            </div>
            <button onClick={() => {
                    let href = router.asPath;
                    let pName = router.pathname;
                    Object.keys(router.query).forEach((k) => {
                      if (k === 'locale') {
                        pName = pName.replace(`[${k}]`, locale == "en" ? "vi" : "en")
                        console.log('pName ', pName)
                        return
                      }
                      pName = pName.replace(`[${k}]`, router.query[k] as string);
                      console.log('pName ', pName)
                    })

                    location.href = pName;
                  }}>
                    {locale === "vi" ? <div
                      className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="20">
                        <clipPath id="s">
                          <path d="M0,0 v30 h60 v-30 z" />
                        </clipPath>
                        <clipPath id="t">
                          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                        </clipPath>
                        <g clip-path="url(#s)">
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
                          <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
                        </g>
                      </svg>
                    </div> :
                      <div
                        className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" version="1.1">
                          <rect width="30" height="20" fill="#da251d" />
                          <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" />
                        </svg>
                      </div>}
                  </button>
          </ul>
        </div>
        <div
          className={
            nav1
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
          }
        >
          <ul>
            <p className="text-2xl">{tranlsate("in_clinic_service", locale)}</p>
            <div className="mb-2" onClick={handleNav1}>
              <LinkComponent locale="" href={"/packages/cham-soc-phong-ngua"} skipLocaleHandling={false}>
                {tranlsate("preventive_care", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav1}>
              <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/dieu-tri-ban-dau"}>
                {tranlsate("primary_care", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav1}>
              <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/quan-ly-benh-man-tinh"}>
                {tranlsate("on_going_care", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav1}>
              <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/suc-khoe-toan-dien"}>
                {tranlsate("wellness", locale)}
              </LinkComponent>
            </div>
            <p className="text-2xl mt-10">{tranlsate("home_service", locale)}</p>
            <div className="mb-2" onClick={handleNav1}>
              <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/cham-soc-tai-nha"}>
                {tranlsate("home_visits", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav1}>
              <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/cham-soc-tu-xa"}>
                {tranlsate("telemedicine", locale)}
              </LinkComponent>
            </div>
            <div className="m-auto">
              <div>
              </div>
              <ul className="flex">
                <li className="inline mr-2 cursor-pointer relative" onClick={() => {
                  const router = useRouter()

                  let href = router.asPath
                  let pName = router.pathname

                  console.log('href pName', href, pName)
                }}>
                  {/* <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
                </li>
                <li className="inline cursor-pointer" onClick={() => {
                  const router = useRouter()

                  let href = router.asPath
                  let pName = router.pathname

                  console.log('href pName', href, pName)
                }}>
                  {/* <Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div
          className={
            nav2
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
          }
        >
          <ul>
            <div className="mb-2" onClick={handleNav2} >
              <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/cham-soc-phong-ngua"}>
                {tranlsate("preventive_care_packages", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav2} >
              <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/dieu-tri-ban-dau"}>
                {tranlsate("primary_care_packages", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav2} >
              <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/quan-ly-benh-man-tinh"}>
                {tranlsate("on_going_care_packages", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav2} >
              <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/suc-khoe-toan-dien"}>
                {tranlsate("wellness_packages", locale)}
              </LinkComponent>
            </div>
            <div className="mb-2" onClick={handleNav2} >
              <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/goi-xet-nghiem-di-truyen"}>
                {tranlsate("gene_examination_packages", locale)}
              </LinkComponent>
            </div>
            <div className="m-auto">
              <div>
              </div>
              <ul className="flex">
                <li className="inline mr-2 cursor-pointer relative" onClick={() => {
                  const router = useRouter()

                  let href = router.asPath
                  let pName = router.pathname

                  console.log('href pName', href, pName)
                }}>
                  {/* <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
                </li>
                <li className="inline cursor-pointer" onClick={() => {
                  const router = useRouter()

                  let href = router.asPath
                  let pName = router.pathname

                  console.log('href pName', href, pName)
                }}>
                  {/* <Image
                    src={IgImg4}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
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
