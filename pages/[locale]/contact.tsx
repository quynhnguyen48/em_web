import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import { SliderData } from "../../components/Slider/SliderData";
import Instagram from "../../components/InstagramGallery/Instagram";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Packages from "../../components/Packages/Packages";
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SmallHero from "../../components/Hero/SmallHero";
import { makeStaticProps } from '../../lib/getStatic';
const notify = () => {
  toast.success('Thành công');
}

const getStaticProps = makeStaticProps(['common', 'footer'])
const getStaticPaths = () => ({
  fallback: false,
  paths: [{
    params: {
      locale: 'en',
      slug: "test",
      label: "test2",
    }
  },
  {
    params: {
      locale: 'vi',
      slug: "test",
      label: "test2",
    }
  }],
})
export { getStaticPaths, getStaticProps }

const tranlsate = (term: string, locale: string) => {
  if (locale === "en") {
    switch (term) {
      case "contact_info":
        return "Contact Information";
      case "become_a_member":
        return "Become a member";
      case "gifting":
        return "Gifting";
    }
  } else {
    switch (term) {
      case "contact_info":
        return "Thông Tin Liên Hệ";
      case "become_a_member":
        return "Trở Thành Thành Viên";
      case "gifting":
        return "Quà tặng";
    }
  }
}

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  const contact = () => {
    axios.post('https://api.echomedi.me' + '/api/packages/contact', {
      "name": name,
      "email": email,
      "phone_number": phone_number,
      "message": message
  })
    .then(function (response) {
      toast.success('Thành công');
    })
    .catch(function (error) {
    });
  }

  return (
    <>
      <Head>
        <title>ECHO MEDI</title>
        <meta
          name="ECHO MEDI"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon1.png" />
      </Head>

      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      <SmallHero heading={locale === "en" ? "Contact" : "Liên hệ"} message={""} sub_message={[]} 
      image_url={"https://api.echomedi.me/uploads/contact_5df089b37b.jpg?updated_at=2023-01-08T05:53:39.539Z"}/>
      <div className="max-w-[1048px] mx-auto p-4 text-left">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-2xl font-semibold mb-4">{tranlsate("contact_info", locale)}</p>
            <p className="mb-4">{locale === "en" ? "You can contact ECHO MEDI in the following ways:" : "Bạn có thể liên hệ ECHO MEDI qua những hình thức sau:"}</p>
            <p><span className="font-semibold">Email:</span> contact@echomedi.com</p>
            <p><span className="font-semibold">{locale === "en" ? "Telephone:" : "Gọi Điện:"} </span> 1900 638 408</p>
            <p><span className="font-semibold">{locale === "en" ? "Virtual visit" : "Thăm Khám Trực Tuyến: Liên hệ để đăng ký"}</span></p>
            <p><span className="font-semibold">{locale === "en" ? "In home visit:" : "Thăm Khám Tại Nhà: Liên hệ để đăng ký"}</span></p>
            <p><span className="font-semibold">{locale === "en" ? "In person visit" : "Tại Phòng Khám"}: </span> 1026 Đường Nguyễn Văn Linh, Căn S15-1 Toà Nhà Sky Garden 1, Quận 7, Tp Hồ Chí Minh.</p>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
            <div className="flex justify-center">
              <div className="mb-3 w-full">
                <input
                  type="text"
                  className="
                    form-control
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
                  placeholder={locale === "en" ? "Your name" : "Tên của bạn"}
                  onChange={(e) => {setName(e.target.value)}}
                />
                <input
                  type="text"
                  className="
                    form-control
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
                  placeholder="Email"
                  onChange={(e) => {setEmail(e.target.value)}}
                />
                <input
                  type="text"
                  className="
                    form-control
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
                  placeholder={locale === "en" ? "Phone number" : "Số điện thoại"}
                  onChange={(e) => {setPhoneNumber(e.target.value)}}
                />
                <textarea
                  className="
                    form-control
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
                  onChange={(e) => {setMessage(e.target.value)}}
                  placeholder={locale === "en" ? "Message" : "Lời nhắn"}
                />
                <div className="flex space-x-2 justify-center">
                  <button 
                    onClick={contact}
                    style={{
                      backgroundColor: "#416045",
                      color: "white",
                    }}
                  type="button" className="inline-block px-6 py-2.5 text-white text-sm leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out bg-green-200 text-black rounded-full">
                    {locale === "en" ? "Send" : "Gửi"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
      <Toaster 
        position="bottom-center"
      />
    </>
  );
};

export default Home;
