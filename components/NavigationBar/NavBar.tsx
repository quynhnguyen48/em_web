import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import IgImg3 from "../../assets/uk.png";
import IgImg4 from "../../assets/vietnam.png";
// import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import LinkComponent from "../Link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({ email: "" });
  const [numOfItem, setNumOfItem] = useState(0);

  const router = useRouter();
  const locale = (router.query.locale as string) || "en";

  const Icon = () => (
    <svg
      className="w-3 h-3 inline"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      height="10px"
      width="10px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330.002 330.002"
      xmlSpace="preserve"
    >
      <path
        id="XMLID_23_"
        d="M329.155,100.036c-2.108-6.011-7.784-10.035-14.154-10.035h-300c-6.371,0-12.046,4.024-14.154,10.035  c-2.109,6.011-0.19,12.699,4.784,16.678l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287  l149.996-120C329.346,112.734,331.264,106.047,329.155,100.036z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      setLogged(true);
      fetch("https://api.echomedi.com/api/product/getCart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(function (response) {
          setNumOfItem(response.user?.cart_lines?.length);
          setUserData(response?.user.users_permissions_user);
        })
        .catch(function (error) {
          toast.error("????ng k?? th???t b???i");
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
          return "Elderly (60+)";
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
          return "D???ch V??? T???i Ph??ng Kh??m";
        case "preventive_care":
          return "Ch??m S??c Ph??ng Ng???a";
        case "primary_care":
          return "??i???u Tr??? Ban ?????u";
        case "on_going_care":
          return "Qu???n L?? B???nh M???n T??nh";
        case "wellness":
          return "S???c Kho??? To??n Di???n";
        case "home_service":
          return "D???ch V??? T???i Nh??";
        case "home_visits":
          return "Ch??m S??c T???i Nh??";
        case "telemedicine":
          return "Ch??m S??c T??? Xa";
        case "services":
          return "C??c D???ch V???";
        case "health_plans":
          return "G??i Ch??m S??c";
        case "preventive_care_packages":
          return "G??i Ch??m S??c Ph??ng Ng???a";
        case "primary_care_packages":
          return "G??i ??i???u Tr??? Ban ?????u";
        case "on_going_care_packages":
          return "G??i Qu???n L?? B???nh M???n T??nh";
        case "wellness_packages":
          return "G??i S???c Kho??? To??n Di???n";
        case "gene_examination_packages":
          return "G??i X??t Nghi???m Di Truy???n";
        case "pharmacy":
          return "Nh?? thu???c";
        case "monthly_packages":
          return "G??i Ch??m S??c Th??ng";
        case "elderly":
          return "Ng?????i L???n Tu???i (Tr??n 60 Tu???i)";
        case "middle_aged_man":
          return "Nam Trung Ni??n (Tr??n 45 tu???i)";
        case "middle_aged_woman":
          return "N??? Trung Ni??n (Tr??n 45 Tu???i)";
        case "adult":
          return "Ng?????i Tr?????ng Th??nh (18 - 45 Tu???i)";
        case "teenager":
          return "Thanh Thi???u Ni??n (13 - 19 Tu???i)";
        case "child":
          return "Tr??? Em (6 - 12 Tu???i)";
        case "health_concern":
          return "V???n ????? S???c Kho???";
        case "sleep":
          return "Ng??? Ngon";
        case "smoking_cessation":
          return "Cai Thu???c l??";
        case "weight_loss":
          return "Gi???m C??n";
        case "skin_care_anti_aging":
          return "Ch??m S??c Da";
        case "hair_nails_treatment":
          return "Ch??m S??c T??c & M??ng";
        case "pregnancy_care":
          return "Mang Thai";
        case "men_sexual_health":
          return "Sinh L?? Nam";
        case "women_sexual_health":
          return "Sinh L?? N???";
        case "heart_blood_circulation":
          return "Tim M???ch";
        case "digestive_system":
          return "Ti??u H??a";
        case "bone_joint_health":
          return "X????ng Kh???p";
        case "immune_system":
          return "????? Kh??ng V?? Mi???n D???ch";
        case "brain_health":
          return "Tinh Th???n & Tr?? N??o";
      }
    }
    return term;
  };

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
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 99,
        background: "white",
      }}
      className="nav flex flex-wrap items-center justify-between px-4">

      <div className="flex flex-no-shrink items-center mr-6 text-grey-darkest">
        <LinkComponent href={"/"} locale={""} skipLocaleHandling={false}>
          <img
            className="w-[200px] sm:28"
            src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z"
          />
        </LinkComponent>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer hidden md:block px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul
        style={{ color: `${textColor}` }}
        className="hidden md:flex sm:ml-20 ml-0"
      >
        <li className="py-4 flex">
          <LinkComponent locale={""} skipLocaleHandling={false} href="/about">
            <div className="h-full flex items-center m-auto text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
              {locale === "en" ? "About ECHO MEDI" : "V??? ECHO MEDI"}
            </div>
          </LinkComponent>
        </li>
        <li className="py-4 flex">
          {/* <Link href="#services">{locale ==="en" ? "Services" :"C??c D???ch V???"}</Link> */}
          <div className="m-auto text-sm hover:bg-green-100 hover:cursor-pointer rounded">
            {/* <li className="p-5 text-black" key={0}>C??c d???ch v???</li> */}
            <div className="relative group ">
              <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-5 py-3  mt-2 text-base  text-left bg-transparent rounded md:w-auto md:inline md:mt-0 focus:outline-none">
                <span className="mr-2 text-sm">
                  {tranlsate("services", locale)}
                </span>
                <Icon />
              </button>
              <div
                className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen"
                style={{ width: "500px", marginLeft: "-150px" }}
              >
                <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg text-black bg-white border border-black">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-5 text-base">
                    <div>
                      <p className="text-sm underline underline-offset-8 mb-4 px-2">
                        {tranlsate("in_clinic_service", locale ? locale : "")}
                      </p>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={"/packages/cham-soc-phong-ngua"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("preventive_care", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={"/packages/dieu-tri-ban-dau"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("primary_care", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={"/packages/quan-ly-benh-man-tinh"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("on_going_care", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={"/packages/suc-khoe-toan-dien"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("wellness", locale)}
                        </LinkComponent>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm underline  underline-offset-8 mb-4 text-sm px-2">
                        {tranlsate("home_service", locale)}
                      </p>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={"/packages/cham-soc-tai-nha"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("home_visits", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm rounded px-2 py-1 px-2 py-1">
                        {tranlsate("telemedicine", locale)}
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={
                            "/services/kham-benh-tu-xa-khach-hang-tai-viet-nam"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          *{" "}
                          {locale == "en"
                            ? "For Residents in Vietnam"
                            : "Kh??ch H??ng T???i Vi???t Nam"}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                        <LinkComponent
                          href={
                            "/services/kham-benh-tu-xa-viet-kieu-o-nuoc-ngoai"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          *{" "}
                          {locale == "en"
                            ? " For Non-Residents (Overseas Vietnamese)"
                            : "Vi???t Ki???u ??? N?????c Ngo??i"}
                        </LinkComponent>
                      </div>
                      {/* <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
                           <Link className="p-5 text-white hover:text-slate-200 " href={"/packages/cham-soc-tu-xa"}>
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
            <div className="relative group ">
              <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-5 py-3  mt-2 text-base  text-left bg-transparent rounded md:w-auto md:inline md:mt-0 focus:outline-none">
                <span className="mr-2 text-sm">
                  {tranlsate("health_plans", locale)}
                </span>
                <Icon />
              </button>
              <div
                className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen"
                style={{ width: "280px", marginLeft: "-70px" }}
              >
                <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg  text-black bg-white border border-black">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1 p-5 text-base">
                    <div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/packages/goi-cham-soc-phong-ngua"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("preventive_care_packages", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/packages/goi-dieu-tri-ban-dau"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("primary_care_packages", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/packages/goi-quan-ly-benh-man-tinh"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("on_going_care_packages", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/packages/goi-suc-khoe-toan-dien"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("wellness_packages", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/packages/goi-xet-nghiem-di-truyen"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
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
          {/* <div className="m-auto ">
               <Link href="/#contact">{locale ==="en" ? "Pharmacy" :"Nh?? thu???c"}</Link>
             </div> */}
          <div className="m-auto text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
            {/* <li className="p-5 text-black" key={0}>C??c d???ch v???</li> */}
            <div className="relative group ">
              <LinkComponent
                href={"/store"}
                locale={""}
                skipLocaleHandling={false}
              >
                <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full p-0 mt-2 text-base  text-left bg-transparent rounded md:w-auto md:inline md:mt-0 focus:outline-none">
                  <span className="mr-2 text-sm">
                    {tranlsate("pharmacy", locale)}
                  </span>
                  <Icon />
                </button>
              </LinkComponent>
              <div
                className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen"
                style={{ width: "800px", marginLeft: "-500px" }}
              >
                <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg  text-black bg-white border border-black">
                  <div className="p-5 text-base flex">
                    <div className="col-span-1">
                      <p className="pl-2 text-sm underline  underline-offset-8 mb-4 text-sm">
                        {tranlsate("monthly_packages", locale ? locale : "")}
                      </p>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-nguoi-lon-tuoi-tuoi-60"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("elderly", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-nam-gioi-do-tuoi-trung-nien-tuoi-45"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("middle_aged_man", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-nu-gioi-do-tuoi-trung-nien-tuoi-45"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("middle_aged_woman", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-nguoi-truong-thanh-tuoi-18-45"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("adult", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("teenager", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-tre-em-tuoi-6-12"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("child", locale)}
                        </LinkComponent>
                      </div>
                    </div>
                    <div>
                      <p className="pl-2 text-sm underline  underline-offset-8 mb-4 text-sm">
                        {tranlsate("health_concern", locale)}
                      </p>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-ho-tro-giac-ngu"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("sleep", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-ho-tro-cai-thuoc-la"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("smoking_cessation", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-ho-tro-giam-can"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("weight_loss", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("skin_care_anti_aging", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-cham-soc-va-phuc-hoi-toc-mong"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("hair_nails_treatment", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={
                            "/products/goi-cham-soc-suc-khoe-cho-phu-nu-mang-thai"
                          }
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("pregnancy_care", locale)}
                        </LinkComponent>
                      </div>
                    </div>
                    <div>
                      <div className="mt-9 mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-suc-khoe-sinh-ly-nam"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("men_sexual_health", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-suc-khoe-sinh-ly-nu"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("women_sexual_health", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-ho-tro-suc-khoe-tim-mach"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("heart_blood_circulation", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-ho-tro-tieu-hoa"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("digestive_system", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-phong-ngua-benh-xuong-khop"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("bone_joint_health", locale)}
                        </LinkComponent>
                      </div>
                      <div className="mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-tang-suc-de-khoang-va-mien-dich"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
                          {tranlsate("immune_system", locale)}
                        </LinkComponent>
                      </div>

                    </div>
                    <div>
                      <div className="mt-9 mb-4 text-sm hover:bg-green-100 rounded px-2 py-1">
                        <LinkComponent
                          href={"/products/goi-cai-thien-tri-nao"}
                          locale={""}
                          skipLocaleHandling={false}
                        >
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
          <div className="m-auto text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
            <LinkComponent
              href="/membership"
              locale={""}
              skipLocaleHandling={false}
            >
              {locale === "en" ? "Membership" : "Th??nh Vi??n"}
            </LinkComponent>
          </div>
        </li>
        {/* <li className="py-4 flex">
          <div className="m-auto  text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
            <LinkComponent
              href="/booking"
              locale={""}
              skipLocaleHandling={false}
            >
              {locale === "en" ? "Booking" : "?????t l???ch kh??m"}
            </LinkComponent>
          </div>
        </li> */}
        {!logged && (
          <li className="py-4 flex">
            <div className="m-auto  text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
              <LinkComponent
                href="/login"
                locale={""}
                skipLocaleHandling={false}
              >
                {locale === "en" ? "Member login" : "????ng Nh???p"}
              </LinkComponent>
            </div>
          </li>
        )}

        {logged && (
          <li className="py-4 flex">
            <div className="m-auto  text-sm hover:bg-green-100 px-3 py-3 hover:cursor-pointer rounded">
              <LinkComponent
                href="/profile"
                locale={""}
                skipLocaleHandling={false}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height={"30px"} viewBox="0 0 1024 1024" version="1.1"><path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" /></svg>
              </LinkComponent>
            </div>
          </li>
        )}
        <li className="py-4 flex">
          <LinkComponent href="/contact" skipLocaleHandling={false} locale={""}>
            <span
              onClick={handleNav}
              style={{
                backgroundColor: "#416045",
                color: "white",
                marginTop: "9px",
              }}
              className="mt-1 flex px-6 py-2.5 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200"
            >
              {locale === "en" ? "Contact" : "Li??n h???"}
            </span>
          </LinkComponent>
        </li>
        <div className="z-10 bg-transparent group-hover:block bg-transparent flex ml-2">
          <div className="text-black bg-transparent m-auto">
            <div className="flex">
              {/* <button
                onClick={() => {
                  let href = router.asPath;
                  let pName = router.pathname;
                  Object.keys(router.query).forEach((k) => {
                    if (k === "locale") {
                      pName = pName.replace(
                        `[${k}]`,
                        locale == "en" ? "vi" : "en"
                      );
                      return;
                    }
                    pName = pName.replace(`[${k}]`, router.query[k] as string);
                  });

                  location.href = pName;
                }}
              >
                {locale === "en" ? (
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 7410 3900">
                      <rect width="7410" height="3900" fill="#b22234" />
                      <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300" />
                      <rect width="2964" height="2100" fill="#3c3b6e" />
                      <g fill="#fff">
                        <g id="s17">
                          <g id="s9">
                            <g id="s8">
                              <path id="s" d="M202,130 L272.53423,347.08204 L87.873218,212.917961 L316.126782,212.917961 L131.46577,347.08204z" />
                              <use xlinkHref="#s" x="320" />
                              <use xlinkHref="#s" x="640" />
                              <use xlinkHref="#s" x="960" />
                              <use xlinkHref="#s" x="1280" />
                              <use xlinkHref="#s" x="1600" />
                              <use xlinkHref="#s" x="1920" />
                              <use xlinkHref="#s" x="2240" />
                            </g>
                            <use xlinkHref="#s" x="2560" />
                          </g>
                          <use xlinkHref="#s8" x="150" y="320" />
                        </g>
                        <use xlinkHref="#s17" y="640" />
                        <use xlinkHref="#s17" y="1280" />
                      </g>
                    </svg>
                  </div>
                ) : (
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 20"
                      version="1.1"
                    >
                      <rect width="30" height="20" fill="#da251d" />
                      <polygon
                        points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
                        fill="#ff0"
                      />
                    </svg>
                  </div>
                )}
              </button> */}
              <div className="mt-2">
                <div className="group inline-block relative">
                  <button
                    className="font-semibold rounded inline-flex items-center"
                  >
                    {locale == "vi" ? <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 20"
                      version="1.1"
                    >
                      <rect width="30" height="20" fill="#da251d" />
                      <polygon
                        points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
                        fill="#ff0"
                      />
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 7410 3900">
                    <rect width="7410" height="3900" fill="#b22234" />
                    <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300" />
                    <rect width="2964" height="2100" fill="#3c3b6e" />
                    <g fill="#fff">
                      <g id="s17">
                        <g id="s9">
                          <g id="s8">
                            <path id="s" d="M202,130 L272.53423,347.08204 L87.873218,212.917961 L316.126782,212.917961 L131.46577,347.08204z" />
                            <use xlinkHref="#s" x="320" />
                            <use xlinkHref="#s" x="640" />
                            <use xlinkHref="#s" x="960" />
                            <use xlinkHref="#s" x="1280" />
                            <use xlinkHref="#s" x="1600" />
                            <use xlinkHref="#s" x="1920" />
                            <use xlinkHref="#s" x="2240" />
                          </g>
                          <use xlinkHref="#s" x="2560" />
                        </g>
                        <use xlinkHref="#s8" x="150" y="320" />
                      </g>
                      <use xlinkHref="#s17" y="640" />
                      <use xlinkHref="#s17" y="1280" />
                    </g>
                  </svg>
                    }
                  </button>
                  <ul className="absolute hidden text-gray-700 group-hover:block -mt-4">
                    <li className="">
                      <button onClick={() => {
                        let href = router.asPath;
                        let pName = router.pathname;
                        Object.keys(router.query).forEach((k) => {
                          if (k === "locale") {
                            pName = pName.replace(
                              `[${k}]`,
                              locale == "en" ? "vi" : "en"
                            );
                            return;
                          }
                          pName = pName.replace(`[${k}]`, router.query[k] as string);
                        });
      
                        location.href = pName;
                      }}>
                      {locale == "vi" ? <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 7410 3900">
                        <rect width="7410" height="3900" fill="#b22234" />
                        <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300" />
                        <rect width="2964" height="2100" fill="#3c3b6e" />
                        <g fill="#fff">
                          <g id="s17">
                            <g id="s9">
                              <g id="s8">
                                <path id="s" d="M202,130 L272.53423,347.08204 L87.873218,212.917961 L316.126782,212.917961 L131.46577,347.08204z" />
                                <use xlinkHref="#s" x="320" />
                                <use xlinkHref="#s" x="640" />
                                <use xlinkHref="#s" x="960" />
                                <use xlinkHref="#s" x="1280" />
                                <use xlinkHref="#s" x="1600" />
                                <use xlinkHref="#s" x="1920" />
                                <use xlinkHref="#s" x="2240" />
                              </g>
                              <use xlinkHref="#s" x="2560" />
                            </g>
                            <use xlinkHref="#s8" x="150" y="320" />
                          </g>
                          <use xlinkHref="#s17" y="640" />
                          <use xlinkHref="#s17" y="1280" />
                        </g>
                      </svg> : <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 20"
                      version="1.1"
                    >
                      <rect width="30" height="20" fill="#da251d" />
                      <polygon
                        points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
                        fill="#ff0"
                      />
                    </svg>}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>

      {/* Mobile Button */}
      <div onClick={handleNav} className="block sm:hidden z-10 text-black">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        style={{
          background: "white",
          zIndex: 999,
          position: "fixed",
          height: "100%",
          textAlign: "left",
        }}
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
        }
      >
        <button
          style={{
            right: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={handleNav}
        >
          <AiOutlineClose size={20} />{" "}
        </button>
        <ul className="h-full p-5">
          <img
            className=""
            src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z"
          />
          <div className="text-black bg-transparent m-auto ml-5">
            <div className="flex">
              <button
                onClick={() => {
                  let href = router.asPath;
                  let pName = router.pathname;
                  Object.keys(router.query).forEach((k) => {
                    if (k === "locale") {
                      pName = pName.replace(
                        `[${k}]`,
                        locale == "en" ? "vi" : "en"
                      );
                      return;
                    }
                    pName = pName.replace(`[${k}]`, router.query[k] as string);
                  });

                  location.href = pName;
                }}
              >
                {locale === "en" ? (
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 7410 3900">
                      <rect width="7410" height="3900" fill="#b22234" />
                      <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300" />
                      <rect width="2964" height="2100" fill="#3c3b6e" />
                      <g fill="#fff">
                        <g id="s17">
                          <g id="s9">
                            <g id="s8">
                              <path id="s" d="M202,130 L272.53423,347.08204 L87.873218,212.917961 L316.126782,212.917961 L131.46577,347.08204z" />
                              <use xlinkHref="#s" x="320" />
                              <use xlinkHref="#s" x="640" />
                              <use xlinkHref="#s" x="960" />
                              <use xlinkHref="#s" x="1280" />
                              <use xlinkHref="#s" x="1600" />
                              <use xlinkHref="#s" x="1920" />
                              <use xlinkHref="#s" x="2240" />
                            </g>
                            <use xlinkHref="#s" x="2560" />
                          </g>
                          <use xlinkHref="#s8" x="150" y="320" />
                        </g>
                        <use xlinkHref="#s17" y="640" />
                        <use xlinkHref="#s17" y="1280" />
                      </g>
                    </svg>
                  </div>
                ) : (
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 20"
                      version="1.1"
                    >
                      <rect width="30" height="20" fill="#da251d" />
                      <polygon
                        points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
                        fill="#ff0"
                      />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
          <li onClick={handleNav} className="p-4 text-xl hover:text-gray-500">
            <LinkComponent locale="" skipLocaleHandling={false} href="/about">
              {locale === "en" ? "About ECHO MEDI" : "V??? ECHO MEDI"}
            </LinkComponent>
          </li>
          <li
            onClick={() => {
              handleNav();
              handleNav1();
            }}
            className="p-4 text-xl hover:text-gray-500 flex"
          >
            <button>{locale === "en" ? "Services" : "C??c D???ch V???"}</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 svg-icon ml-2"
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path d="M64.704 455.808h682.368L426.496 142.656l78.592-77.568 452.928 446.656-453.824 446.976-77.184-76.864 319.872-317.76H64.704V455.808z" />
            </svg>
          </li>
          <li
            onClick={() => {
              handleNav();
              handleNav2();
            }}
            className="p-4 text-xl hover:text-gray-500 flex"
          >
            <button>{locale === "en" ? "Health Plans" : "G??i Ch??m S??c"}</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 svg-icon ml-2"
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path d="M64.704 455.808h682.368L426.496 142.656l78.592-77.568 452.928 446.656-453.824 446.976-77.184-76.864 319.872-317.76H64.704V455.808z" />
            </svg>
          </li>
          <li
            onClick={() => {
              handleNav();
              handleNav3();
            }}
            className="p-4 text-xl hover:text-gray-500 flex"
          >
            <button>{locale === "en" ? "Pharmacy" : "Nh?? Thu???c"}</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 svg-icon ml-2"
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path d="M64.704 455.808h682.368L426.496 142.656l78.592-77.568 452.928 446.656-453.824 446.976-77.184-76.864 319.872-317.76H64.704V455.808z" />
            </svg>
          </li>
          <li onClick={handleNav} className="p-4 text-xl hover:text-gray-500">
            <LinkComponent
              href={"/membership"}
              locale=""
              skipLocaleHandling={false}
            >
              {locale === "en" ? "Membership" : "Th??nh vi??n"}
            </LinkComponent>
          </li>
          <li onClick={handleNav} className="p-4 text-xl hover:text-gray-500">
            <LinkComponent
              href={"/booking"}
              locale=""
              skipLocaleHandling={false}
            >
              {locale === "en" ? "Booking" : "?????t l???ch kh??m"}
            </LinkComponent>
          </li>
          <div className="w-full z-10 bg-transparent group-hover:block bg-transparent flex absolute bottom-4 right-4 left-0">
            <div className="flex space-x-2 justify-center m-auto">
              <LinkComponent
                href="/login"
                skipLocaleHandling={false}
                locale={""}
              >
                <div
                  onClick={handleNav}
                  style={{
                    backgroundColor: "#416045",
                    color: "white",
                  }}
                  className="inline-block px-6 py-2.5 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200"
                >
                  {locale === "en" ? "Member Login" : "T??i kho???n"}
                </div>
              </LinkComponent>
            </div>
            <div className="flex space-x-2 justify-center m-auto">
              <LinkComponent
                href="/contact"
                skipLocaleHandling={false}
                locale={""}
              >
                <div
                  onClick={handleNav}
                  style={{
                    backgroundColor: "#416045",
                    color: "white",
                  }}
                  className="inline-block px-6 py-2.5 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200"
                >
                  {locale === "en" ? "Contact" : "Li??n h???"}
                </div>
              </LinkComponent>
            </div>
          </div>
        </ul>
      </div>
      <div
        style={{
          background: "white",
          zIndex: 999,
          position: "fixed",
          height: "100%",
          textAlign: "left",
        }}
        className={
          nav1
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
        }
      >
        <button
          style={{
            right: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={handleNav1}
        >
          <AiOutlineClose size={20} />{" "}
        </button>
        <button
          style={{
            left: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={() => {
            handleNav1();
            handleNav();
          }}
        >
          <AiOutlineArrowLeft size={20} />{" "}
        </button>
        <ul className="h-full p-5">
          <img
            className=""
            src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z"
          />

          <p className="text-xl underline mb-5">
            {tranlsate("in_clinic_service", locale)}
          </p>
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              href={"/packages/cham-soc-phong-ngua"}
              skipLocaleHandling={false}
            >
              {tranlsate("preventive_care", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              skipLocaleHandling={false}
              href={"/packages/goi-dieu-tri-ban-dau"}
            >
              {tranlsate("primary_care", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              skipLocaleHandling={false}
              href={"/packages/goi-quan-ly-benh-man-tinh"}
            >
              {tranlsate("on_going_care", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              skipLocaleHandling={false}
              href={"/packages/goi-suc-khoe-toan-dien"}
            >
              {tranlsate("wellness", locale)}
            </LinkComponent>
          </div>
          <p className="text-lg underline mt-10 mb-5">
            {tranlsate("home_service", locale)}
          </p>
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              skipLocaleHandling={false}
              href={"/packages/cham-soc-tai-nha"}
            >
              {tranlsate("home_visits", locale)}
            </LinkComponent>
          </div>
          {/* <div className="mb-4 text-lg" onClick={handleNav1}>
              <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/cham-soc-tu-xa"}>
                {tranlsate("telemedicine", locale)}
              </LinkComponent>
            </div> */}
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              skipLocaleHandling={false}
              href={"/services/kham-benh-tu-xa-khach-hang-tai-viet-nam/"}
            >
              {locale == "en"
                ? "For Residents in Vietnam"
                : "Kh??ch H??ng T???i Vi???t Nam"}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav1}>
            <LinkComponent
              locale=""
              skipLocaleHandling={false}
              href={"/services/kham-benh-tu-xa-viet-kieu-o-nuoc-ngoai/"}
            >
              {locale == "en"
                ? " For Non-Residents (Overseas Vietnamese)"
                : "Vi???t Ki???u ??? N?????c Ngo??i"}
            </LinkComponent>
          </div>
          <div className="m-auto">
            <div></div>
            <ul className="flex">
              <li
                className="inline mr-2 cursor-pointer relative"
                onClick={() => {
                  const router = useRouter();

                  let href = router.asPath;
                  let pName = router.pathname;
                }}
              >
                {/* <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
              </li>
              <li
                className="inline cursor-pointer"
                onClick={() => {
                  const router = useRouter();

                  let href = router.asPath;
                  let pName = router.pathname;
                }}
              >
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
        style={{
          background: "white",
          zIndex: 999,
          position: "fixed",
          height: "100%",
          textAlign: "left",
        }}
        className={
          nav2
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
        }
      >
        <button
          style={{
            right: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={handleNav2}
        >
          <AiOutlineClose size={20} />{" "}
        </button>
        <button
          style={{
            left: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={() => {
            handleNav2();
            handleNav();
          }}
        >
          <AiOutlineArrowLeft size={20} />{" "}
        </button>
        <ul className="h-full p-5">
          <img
            className=""
            src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z"
          />

          <div className="mb-4 text-lg" onClick={handleNav2}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/packages/goi-cham-soc-phong-ngua"}
            >
              {tranlsate("preventive_care_packages", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav2}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/packages/goi-dieu-tri-ban-dau"}
            >
              {tranlsate("primary_care_packages", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav2}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/packages/goi-quan-ly-benh-man-tinh"}
            >
              {tranlsate("on_going_care_packages", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav2}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/packages/goi-suc-khoe-toan-dien"}
            >
              {tranlsate("wellness_packages", locale)}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav2}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/packages/goi-xet-nghiem-di-truyen"}
            >
              {tranlsate("gene_examination_packages", locale)}
            </LinkComponent>
          </div>
          <div className="m-auto">
            <div></div>
            <ul className="flex">
              <li
                className="inline mr-2 cursor-pointer relative"
                onClick={() => {
                  const router = useRouter();

                  let href = router.asPath;
                  let pName = router.pathname;
                }}
              >
                {/* <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
              </li>
              <li
                className="inline cursor-pointer"
                onClick={() => {
                  const router = useRouter();

                  let href = router.asPath;
                  let pName = router.pathname;
                }}
              >
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
        style={{
          background: "white",
          zIndex: 999,
          position: "fixed",
          textAlign: "left",
          height: "100%",
        }}
        className={
          nav3
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
        }
      >
        <button
          style={{
            right: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={handleNav3}
        >
          <AiOutlineClose size={20} />{" "}
        </button>
        <button
          style={{
            left: "20px",
            top: "20px",
            position: "absolute",
          }}
          onClick={() => {
            handleNav3();
            handleNav();
          }}
        >
          <AiOutlineArrowLeft size={20} />{" "}
        </button>
        <ul className="h-full p-5 overflow-auto">
          <img
            className=""
            src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z"
          />

          <p className="underline text-xl my-5">
            {tranlsate("monthly_packages", locale ? locale : "")}
          </p>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={
                "/products/goi-cham-soc-suc-khoe-cho-nguoi-lon-tuoi-tuoi-60/"
              }
            >
              {tranlsate("elderly", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={
                "/products/goi-cham-soc-suc-khoe-cho-nam-gioi-do-tuoi-trung-nien-tuoi-45"
              }
            >
              {tranlsate("middle_aged_man", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={
                "/products/goi-cham-soc-suc-khoe-cho-nu-gioi-do-tuoi-trung-nien-tuoi-45/"
              }
            >
              {tranlsate("middle_aged_woman", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={
                "/products/goi-cham-soc-suc-khoe-cho-nguoi-truong-thanh-tuoi-18-45/"
              }
            >
              {tranlsate("adult", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={
                "/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19/"
              }
            >
              {tranlsate("teenager", locale ? locale : "")}
            </LinkComponent>
          </div>
          <p className="underline text-xl my-5">
            {tranlsate("health_concern", locale ? locale : "")}
          </p>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-ho-tro-giac-ngu/"}
            >
              {tranlsate("sleep", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-ho-tro-cai-thuoc-la/"}
            >
              {tranlsate("smoking_cessation", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-ho-tro-giam-can/"}
            >
              {tranlsate("weight_loss", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa/"}
            >
              {tranlsate("skin_care_anti_aging", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-cham-soc-va-phuc-hoi-toc-mong/"}
            >
              {tranlsate("hair_nails_treatment", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-cham-soc-suc-khoe-cho-phu-nu-mang-thai/"}
            >
              {tranlsate("pregnancy_care", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-suc-khoe-sinh-ly-nam/"}
            >
              {tranlsate("men_sexual_health", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-suc-khoe-sinh-ly-nu/"}
            >
              {tranlsate("women_sexual_health", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-ho-tro-suc-khoe-tim-mach/"}
            >
              {tranlsate("heart_blood_circulation", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-ho-tro-tieu-hoa/"}
            >
              {tranlsate("digestive_system", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-phong-ngua-benh-xuong-khop/"}
            >
              {tranlsate("bone_joint_health", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-tang-suc-de-khoang-va-mien-dich/"}
            >
              {tranlsate("immune_system", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="mb-4 text-lg" onClick={handleNav3}>
            <LinkComponent
              skipLocaleHandling={false}
              locale=""
              href={"/products/goi-cai-thien-tri-nao/"}
            >
              {tranlsate("brain_health", locale ? locale : "")}
            </LinkComponent>
          </div>
          <div className="absolute z-10 hidden bg-transparent group-hover:block bg-transparent">
            <div
              className="text-black bg-transparent "
              style={{ width: "100px" }}
            >
              <div className="flex">
                <button
                  onClick={() => {
                    let href = router.asPath;
                    let pName = router.pathname;
                    Object.keys(router.query).forEach((k) => {
                      if (k === "locale") {
                        pName = pName.replace(
                          `[${k}]`,
                          locale == "en" ? "vi" : "en"
                        );
                        return;
                      }
                      pName = pName.replace(
                        `[${k}]`,
                        router.query[k] as string
                      );
                    });

                    location.href = pName;
                  }}
                >
                  {locale === "vi" ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 60 30"
                        width="40"
                        height="40"
                      >
                        <clipPath id="s">
                          <path d="M0,0 v30 h60 v-30 z" />
                        </clipPath>
                        <clipPath id="t">
                          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                        </clipPath>
                        <g clip-path="url(#s)">
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                          <path
                            d="M0,0 L60,30 M60,0 L0,30"
                            stroke="#fff"
                            stroke-width="6"
                          />
                          <path
                            d="M0,0 L60,30 M60,0 L0,30"
                            clip-path="url(#t)"
                            stroke="#C8102E"
                            stroke-width="4"
                          />
                          <path
                            d="M30,0 v30 M0,15 h60"
                            stroke="#fff"
                            stroke-width="10"
                          />
                          <path
                            d="M30,0 v30 M0,15 h60"
                            stroke="#C8102E"
                            stroke-width="6"
                          />
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 30 20"
                        version="1.1"
                      >
                        <rect width="30" height="20" fill="#da251d" />
                        <polygon
                          points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
                          fill="#ff0"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <div></div>
            <ul className="flex">
              <li
                className="inline mr-2 cursor-pointer relative"
                onClick={() => {
                  const router = useRouter();

                  let href = router.asPath;
                  let pName = router.pathname;
                }}
              >
                {/* <Image
                    src={IgImg3}
                    alt="/"
                    width={25}
                    height={25}
                  /> */}
              </li>
              <li
                className="inline cursor-pointer"
                onClick={() => {
                  const router = useRouter();

                  let href = router.asPath;
                  let pName = router.pathname;
                }}
              >
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
      {logged && numOfItem > 0 && (
        <div
          className="cart"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            background: "rgb(158 169 154)",
            borderRadius: "50%",
            zIndex: 123,
            margin: "auto",
            padding: "10px",
          }}
        >
          <LinkComponent href={"/cart"} skipLocaleHandling={false} locale={""}>
            <div className="flex text-green-800 m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="white"
                version="1.1"
                id="Capa_1"
                width="30px"
                height="30px"
                viewBox="0 0 902.86 902.86"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z" />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
          </LinkComponent>
        </div>
      )}
    </nav>
    //     <div
    //       style={{ backgroundColor: `${color}` }}
    //       className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    //     >
    //       <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 text-white">
    //         {<div className=""><LinkComponent href={"/"} locale={""} skipLocaleHandling={false}>
    //           {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
    //             EC<span style={{ color: "#77b17d" }}>HO ME</span>DI
    //           </h1> */}
    //           <img className="w-32 sm:28" src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z" />
    //           {/* <img style={{width: "200px"}} src="https://api.echomedi.com/uploads/download_009f376226.png?updated_at=2023-01-07T02:04:58.128Z" /> */}
    //         </LinkComponent></div>}
    //         <ul style={{ color: `${textColor}` }} className="hidden md:flex sm:ml-20 ml-0">
    //           <li className="py-4 flex">
    //             <div className="m-auto text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
    //               <LinkComponent locale={""} skipLocaleHandling={false} href="/about">{locale === "en" ? "About ECHO MEDI" : "V??? ECHO MEDI"}</LinkComponent>
    //             </div>
    //           </li>
    //           <li className="py-4">
    //             {/* <Link href="#services">{locale ==="en" ? "Services" :"C??c D???ch V???"}</Link> */}
    //             <div className="flex">
    //               {/* <li className="p-5 text-black" key={0}>C??c d???ch v???</li> */}
    //               <div className="relative group ">
    //                 <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base  text-left bg-transparent rounded md:w-auto md:inline md:mt-0 focus:outline-none">
    //                   <span className="mr-2 text-sm">{tranlsate("services", locale)}</span>
    //                   <Icon />
    //                 </button>
    //                 <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen" style={{ width: "500px" }}>
    //                   <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg text-black bg-white border border-black">
    //                     <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-5 text-base">
    //                       <div>
    //                         <p className="text-sm underline  underline-offset-8 mb-4">
    //                           {tranlsate("in_clinic_service", locale ? locale : "")}
    //                         </p>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/cham-soc-phong-ngua"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("preventive_care", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/dieu-tri-ban-dau"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("primary_care", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/quan-ly-benh-man-tinh"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("on_going_care", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/suc-khoe-toan-dien"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("wellness", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                       </div>
    //                       <div>
    //                         <p className="text-sm underline  underline-offset-8 mb-4 text-sm">
    //                           {tranlsate("home_service", locale)}
    //                         </p>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/cham-soc-tai-nha"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("home_visits", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/cham-soc-tai-nha"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("telemedicine", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/cham-soc-tai-nha"} locale={""} skipLocaleHandling={false}>
    //                             {/* {tranlsate("telemedicine", locale)} */}

    // For Residents in Vietnam

    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <LinkComponent href={"/packages/cham-soc-tai-nha"} locale={""} skipLocaleHandling={false}>
    //                             {/* {tranlsate("telemedicine", locale)} */}

    // For Non-Residents (Overseas Vietnamese)

    //                           </LinkComponent>
    //                         </div>
    //                         {/* <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1 px-2 py-1">
    //                           <Link className="p-5 text-white hover:text-slate-200 " href={"/packages/cham-soc-tu-xa"}>
    //                             {tranlsate("telemedicine", locale)}
    //                           </Link>
    //                         </div> */}
    //                         {/* <p>
    //                           {tranlsate("vn_resident", locale)}
    //                         </p>
    //                         <p>
    //                           {tranlsate("non_vn_resident", locale)}
    //                         </p> */}
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li className="py-4 flex">
    //             <div className="flex">
    //               {/* <li className="p-5 text-black" key={0}>C??c d???ch v???</li> */}
    //               <div className="relative group ">
    //                 <button className="hover:bg-green-100	 text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base  text-left bg-transparent rounded md:w-auto md:inline md:mt-0 focus:outline-none">
    //                   <span className="mr-2 text-sm">{tranlsate("health_plans", locale)}</span>
    //                   <Icon />
    //                 </button>
    //                 <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen" style={{ width: "300px" }}>
    //                   <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg  text-black bg-white border border-black">
    //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-1 p-5 text-base">
    //                       <div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/packages/goi-cham-soc-phong-ngua"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("preventive_care_packages", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/packages/goi-dieu-tri-ban-dau"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("primary_care_packages", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/packages/goi-quan-ly-benh-man-tinh"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("on_going_care_packages", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/packages/goi-suc-khoe-toan-dien"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("wellness_packages", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/packages/goi-xet-nghiem-di-truyen"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("gene_examination_packages", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li className="py-4 flex">
    //             {/* <div className="m-auto ">
    //               <Link href="/#contact">{locale ==="en" ? "Pharmacy" :"Nh?? thu???c"}</Link>
    //             </div> */}
    //             <div className="flex">
    //               {/* <li className="p-5 text-black" key={0}>C??c d???ch v???</li> */}
    //               <div className="relative group ">
    //                 <button className="hover:bg-green-100	text-black h-full flex flex-row items-center w-full px-4 py-2 mt-2 text-base  text-left bg-transparent rounded md:w-auto md:inline md:mt-0 focus:outline-none">
    //                   <span className="mr-2 text-sm">{tranlsate("pharmacy", locale)}</span>
    //                   <Icon />
    //                 </button>
    //                 <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-emgreen" style={{ width: "800px", marginLeft: "-200px" }}>
    //                   <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg  text-black bg-white border border-black">
    //                     <div className="grid grid-cols-3 gap-4 md:grid-cols-3 p-5 text-base">
    //                       <div>
    //                         <p className="text-sm underline  underline-offset-8 mb-4 text-sm">
    //                           {tranlsate("monthly_packages", locale ? locale : "")}
    //                         </p>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-lon-tuoi-tuoi-60"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("elderly", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nam-gioi-do-tuoi-trung-nien-tuoi-45"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("middle_aged_man", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nu-gioi-do-tuoi-trung-nien-tuoi-45"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("middle_aged_woman", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-truong-thanh-tuoi-18-45"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("adult", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("teenager", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-tre-em-tuoi-6-12"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("child", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                       </div>
    //                       <div>
    //                         <p className="text-sm underline  underline-offset-8 mb-4 text-sm">
    //                           {tranlsate("health_concern", locale)}
    //                         </p>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-ho-tro-giac-ngu"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("sleep", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-ho-tro-cai-thuoc-la"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("smoking_cessation", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-ho-tro-giam-can"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("weight_loss", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("skin_care_anti_aging", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-va-phuc-hoi-toc-mong"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("hair_nails_treatment", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cham-soc-suc-khoe-cho-phu-nu-mang-thai"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("pregnancy_care", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                       </div>
    //                       <div>
    //                         <p className="text-xl underline  underline-offset-8 mb-4 text-sm">

    //                         </p>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-suc-khoe-sinh-ly-nam"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("men_sexual_health", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-suc-khoe-sinh-ly-nu"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("women_sexual_health", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-ho-tro-suc-khoe-tim-mach"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("heart_blood_circulation", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-ho-tro-tieu-hoa"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("digestive_system", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-phong-ngua-benh-xuong-khop"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("bone_joint_health", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-tang-suc-de-khoang-va-mien-dich"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("immune_system", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                         <div className="mb-2 text-sm hover:bg-green-100 rounded px-2 py-1">
    //                           <LinkComponent href={"/products/goi-cai-thien-tri-nao"} locale={""} skipLocaleHandling={false}>
    //                             {tranlsate("brain_health", locale)}
    //                           </LinkComponent>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li className="py-4 flex">
    //             <div className="m-auto  text-sm hover:bg-green-100 px-5 py-3 hover:cursor-pointer rounded">
    //               <LinkComponent href="/membership" locale={""} skipLocaleHandling={false}>{locale === "en" ? "Member" : "Th??nh vi??n"}</LinkComponent>
    //             </div>
    //           </li>
    //           {!logged && <li className="p-4 flex">
    //             <div className="m-auto  text-sm">
    //               <LinkComponent href="/login" locale={""} skipLocaleHandling={false}>{locale === "en" ? "Member login" : "T??i kho???n"}</LinkComponent>
    //             </div>
    //           </li>}
    //         </ul>
    //         {/* {logged && <div className="flex space-x-2 justify-center">
    //           <LinkComponent href={"/cart"} skipLocaleHandling={false} locale={""}>
    //             <div className="flex text-green-800 ml-5 mt-5">
    //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    //               </svg>
    //             </div>
    //             <span className="ml-2 font-bold" id="num-of-item">{numOfItem == 0 ? '' : numOfItem}</span>
    //           </LinkComponent>
    //         </div>} */}
    //         <div className="flex space-x-2 justify-center m-auto">
    //           <LinkComponent href="/contact" skipLocaleHandling={false} locale={""}>
    //             <div
    //               style={{
    //                 backgroundColor: "#416045",
    //                 color: "white",
    //               }}
    //             className=" ml-5 inline-block px-6 py-2.5 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200">
    //               {locale === "en" ? "Contact" : "Li??n h???"}
    //             </div>
    //           </LinkComponent>
    //         </div>
    //         <div className="m-auto">
    //           <div className="relative group hidden md:block">
    //             <button className="text-black h-full flex flex-row items-center w-full text-base  text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none">
    //               {locale === "vi" ? <div
    //                 className="flex">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 20" version="1.1">
    //                   <rect width="30" height="20" fill="#da251d" />
    //                   <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" />
    //                 </svg>
    //               </div> :
    //                 <div
    //                   className="flex">
    //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="40" height="40">
    //                     <clipPath id="s">
    //                       <path d="M0,0 v30 h60 v-30 z" />
    //                     </clipPath>
    //                     <clipPath id="t">
    //                       <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    //                     </clipPath>
    //                     <g clip-path="url(#s)">
    //                       <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    //                       <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
    //                       <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
    //                       <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
    //                       <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
    //                     </g>
    //                   </svg>
    //                 </div>
    //               }
    //             </button>

    //         {/* Mobile Button */}
    //         <div onClick={handleNav} className="block sm:hidden z-10 text-black">
    //           {nav ? (
    //             <AiOutlineClose size={20}/>
    //           ) : (
    //             <AiOutlineMenu size={20}/>
    //           )}

    //         </div>
    //         {/* Mobile Menu */}
    //         <div
    //           className={
    //             nav
    //               ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
    //               : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
    //           }
    //         >

    //           <ul>
    //             <li
    //               onClick={handleNav}
    //               className="p-4 text-4xl hover:text-gray-500"
    //             >
    //               <LinkComponent locale="" skipLocaleHandling={false} href="/about">{locale === "en" ? "About ECHO MEDI" : "V??? ECHO MEDI"}</LinkComponent>
    //             </li>
    //             <li
    //               onClick={() => {
    //                 handleNav();
    //                 handleNav1();
    //               }}
    //               className="p-4 text-4xl hover:text-gray-500"
    //             >
    //               <button>{locale === "en" ? "Services" : "C??c D???ch V???"}</button>
    //             </li>
    //             <li
    //               onClick={() => {
    //                 handleNav();
    //                 handleNav2();
    //               }}
    //               className="p-4 text-4xl hover:text-gray-500"
    //             >
    //               <button>{locale === "en" ? "Health Plans" : "G??i ch??m s??c"}</button>
    //             </li>
    //             <li
    //               onClick={handleNav}
    //               className="p-4 text-4xl hover:text-gray-500"
    //             >
    //               <button>{locale === "en" ? "Pharmacy" : "Nh?? thu???c"}</button>
    //             </li>
    //             <li
    //               onClick={handleNav}
    //               className="p-4 text-4xl hover:text-gray-500"
    //             >
    //               <LinkComponent href={"/membership"} locale="" skipLocaleHandling={false}>{locale === "en" ? "Member" : "Th??nh vi??n"}</LinkComponent>
    //             </li>
    //             <div className="m-auto">
    //               <div>
    //               </div>
    //               <ul className="flex">
    //                 <li className="inline mr-2 cursor-pointer relative" onClick={() => {
    //                   const router = useRouter()

    //                   let href = router.asPath
    //                   let pName = router.pathname

    //                 }}>
    //                   {/* <Image
    //                     src={IgImg3}
    //                     alt="/"
    //                     width={25}
    //                     height={25}
    //                   /> */}
    //                 </li>
    //                 <li className="inline cursor-pointer" onClick={() => {
    //                   const router = useRouter()

    //                   let href = router.asPath
    //                   let pName = router.pathname

    //                 }}>
    //                   {/* <Image
    //                     src={IgImg4}
    //                     alt="/"
    //                     width={25}
    //                     height={25}
    //                   /> */}
    //                 </li>
    //               </ul>
    //             </div>
    //             <button onClick={() => {
    //                     let href = router.asPath;
    //                     let pName = router.pathname;
    //                     Object.keys(router.query).forEach((k) => {
    //                       if (k === 'locale') {
    //                         pName = pName.replace(`[${k}]`, locale == "en" ? "vi" : "en")
    //                         return
    //                       }
    //                       pName = pName.replace(`[${k}]`, router.query[k] as string);
    //                     })

    //                     location.href = pName;
    //                   }}>
    //                     {locale === "vi" ? <div
    //                       className="flex">
    //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="20">
    //                         <clipPath id="s">
    //                           <path d="M0,0 v30 h60 v-30 z" />
    //                         </clipPath>
    //                         <clipPath id="t">
    //                           <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    //                         </clipPath>
    //                         <g clip-path="url(#s)">
    //                           <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    //                           <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
    //                           <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
    //                           <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
    //                           <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
    //                         </g>
    //                       </svg>
    //                     </div> :
    //                       <div
    //                         className="flex">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" version="1.1">
    //                           <rect width="30" height="20" fill="#da251d" />
    //                           <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" />
    //                         </svg>
    //                       </div>}
    //                   </button>
    //           </ul>
    //         </div>
    //         <div
    //           className={
    //             nav1
    //               ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
    //               : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
    //           }
    //         >
    //           <ul>
    //             <p className="text-2xl">{tranlsate("in_clinic_service", locale)}</p>
    //             <div className="mb-2" onClick={handleNav1}>
    //               <LinkComponent locale="" href={"/packages/cham-soc-phong-ngua"} skipLocaleHandling={false}>
    //                 {tranlsate("preventive_care", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav1}>
    //               <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/dieu-tri-ban-dau"}>
    //                 {tranlsate("primary_care", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav1}>
    //               <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/quan-ly-benh-man-tinh"}>
    //                 {tranlsate("on_going_care", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav1}>
    //               <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/suc-khoe-toan-dien"}>
    //                 {tranlsate("wellness", locale)}
    //               </LinkComponent>
    //             </div>
    //             <p className="text-2xl mt-10">{tranlsate("home_service", locale)}</p>
    //             <div className="mb-2" onClick={handleNav1}>
    //               <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/cham-soc-tai-nha"}>
    //                 {tranlsate("home_visits", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav1}>
    //               <LinkComponent locale="" skipLocaleHandling={false} href={"/packages/cham-soc-tu-xa"}>
    //                 {tranlsate("telemedicine", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="m-auto">
    //               <div>
    //               </div>
    //               <ul className="flex">
    //                 <li className="inline mr-2 cursor-pointer relative" onClick={() => {
    //                   const router = useRouter()

    //                   let href = router.asPath
    //                   let pName = router.pathname

    //                 }}>
    //                   {/* <Image
    //                     src={IgImg3}
    //                     alt="/"
    //                     width={25}
    //                     height={25}
    //                   /> */}
    //                 </li>
    //                 <li className="inline cursor-pointer" onClick={() => {
    //                   const router = useRouter()

    //                   let href = router.asPath
    //                   let pName = router.pathname

    //                 }}>
    //                   {/* <Image
    //                     src={IgImg4}
    //                     alt="/"
    //                     width={25}
    //                     height={25}
    //                   /> */}
    //                 </li>
    //               </ul>
    //             </div>
    //           </ul>
    //         </div>
    //         <div
    //           className={
    //             nav2
    //               ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
    //               : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
    //           }
    //         >
    //           <ul>
    //             <div className="mb-2" onClick={handleNav2} >
    //               <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/cham-soc-phong-ngua"}>
    //                 {tranlsate("preventive_care_packages", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav2} >
    //               <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/dieu-tri-ban-dau"}>
    //                 {tranlsate("primary_care_packages", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav2} >
    //               <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/quan-ly-benh-man-tinh"}>
    //                 {tranlsate("on_going_care_packages", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav2} >
    //               <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/suc-khoe-toan-dien"}>
    //                 {tranlsate("wellness_packages", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="mb-2" onClick={handleNav2} >
    //               <LinkComponent skipLocaleHandling={false} locale="" href={"/packages/goi-xet-nghiem-di-truyen"}>
    //                 {tranlsate("gene_examination_packages", locale)}
    //               </LinkComponent>
    //             </div>
    //             <div className="m-auto">
    //               <div>
    //               </div>
    //               <ul className="flex">
    //                 <li className="inline mr-2 cursor-pointer relative" onClick={() => {
    //                   const router = useRouter()

    //                   let href = router.asPath
    //                   let pName = router.pathname

    //                 }}>
    //                   {/* <Image
    //                     src={IgImg3}
    //                     alt="/"
    //                     width={25}
    //                     height={25}
    //                   /> */}
    //                 </li>
    //                 <li className="inline cursor-pointer" onClick={() => {
    //                   const router = useRouter()

    //                   let href = router.asPath
    //                   let pName = router.pathname

    //                 }}>
    //                   {/* <Image
    //                     src={IgImg4}
    //                     alt="/"
    //                     width={25}
    //                     height={25}
    //                   /> */}
    //                 </li>
    //               </ul>
    //             </div>
    //           </ul>
    //         </div>
    //       </div>
    //       {logged && numOfItem > 0 && <div
    //         className="cart"
    //         style={{
    //           position: "fixed",
    //           right: "20px",
    //           bottom: "20px",
    //           background: "rgb(158 169 154)",
    //           borderRadius: "50%",
    //           zIndex: 123,
    //           margin: 'auto',
    //           padding: '10px',
    //         }}
    //       >
    //         <LinkComponent href={"/cart"} skipLocaleHandling={false} locale={""}>
    //             <div className="flex text-green-800 m-auto">
    //             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" id="Capa_1" width="30px" height="30px" viewBox="0 0 902.86 902.86" xmlSpace="preserve">
    //             <g>
    // 	<g>
    // 		<path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
    // 		<path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z"/>
    // 	</g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // <g>
    // </g>
    // </svg>
    //             </div>
    //           </LinkComponent>
    //       </div>}
    //       <Toaster
    //         position="bottom-center"
    //       />
    //     </div>
  );
};

export default NavBar;
