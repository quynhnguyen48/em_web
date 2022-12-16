import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from 'next/router';
import IgImg3 from "../../assets/uk.png";
import IgImg4 from "../../assets/vietnam.png";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  let { locale } = useRouter();
  locale = locale ?? "";
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
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
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            EC<span style={{ color: "#77b17d" }}>HO ME</span>DI
          </h1> */}
          <img width={200} src="https://echomedi.com/wp-content/uploads/2022/08/cropped-LOGO-ECHOMEDI-01.png" />
          {/* <img style={{width: "200px"}} src="https://echomedi.com/wp-content/uploads/2022/08/cropped-LOGO-ECHOMEDI-01.png" /> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI" }</Link>
          </li>
          <li className="p-4">
            <Link href="#services">{locale ==="en" ? "Services" :"Các Dịch Vụ"}</Link>
          </li>
          <li className="p-4">
            <Link href="#packages">{locale ==="en" ? "Health Plans" :"Gói chăm sóc"}</Link>
          </li>
          <li className="p-4">
            <Link href="/#contact">{locale ==="en" ? "Pharmacy" :"Nhà thuốc"}</Link>
          </li>
          <li className="p-4">
            <Link href="/#contact">{locale ==="en" ? "Member" :"Thành viên"}</Link>
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
              <Link href="/">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI" }</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">{locale ==="en" ? "Services" :"Các Dịch Vụ"}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#packages">{locale ==="en" ? "Health Plans" :"Gói chăm sóc"}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#portfolio">{locale ==="en" ? "Pharmacy" :"Nhà thuốc"}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">{locale ==="en" ? "Member" :"Thành viên"}</Link>
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
      </div>
    </div>
  );
};

export default NavBar;
