import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Packages from "../components/Packages/Packages";
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => {
  toast.success('Thành công');
}

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
  let { locale } = useRouter();
  locale = locale ?? "";

  const contact = () => {
    axios.post('http://54.91.167.122:1337' + '/api/packages/contact', {
      "name": name,
      "email": email,
      "phone_number": phone_number,
      "message": message
  })
    .then(function (response) {
      console.log('success');
      toast.success('Thành công');
    })
    .catch(function (error) {
      console.log('failed');
      console.log(error);
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
      <Hero heading={locale === "en" ? "Contact" : "Liên hệ"} message={""} sub_message={[]} />
      <div className="max-w-[1240px] mx-auto p-4 text-left">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-3xl font-bold mb-4">{tranlsate("contact_info", locale)}</p>
            <p className="mb-4">{locale === "en" ? "You can contact ECHO MEDI in the following ways:" : "Bạn có thể liên hệ ECHO MEDI qua những hình thức sau:"}</p>
            <p><span className="font-bold">Email:</span> contact@echomedi.com</p>
            <p className="font-bold">{locale === "en" ? "Text message:" : "Nhắn Tin:"}</p>
            <p><span className="font-bold">{locale === "en" ? "Telephone:" : "Gọi Điện:"} </span> 1900 638 408</p>
            <p><span className="font-bold">{locale === "en" ? "Virtual visit" : "Thăm Khám Trực Tuyến:"}</span></p>
            <p><span className="font-bold">{locale === "en" ? "In home visit:" : "Thăm Khám Tại Nhà:"}</span></p>
            <p><span className="font-bold">{locale === "en" ? "In person visit" : "Tại Phòng Khám"}: </span> 1026 Đường Nguyễn Văn Linh, Căn S15-1 Toà Nhà Sky Garden 1, Quận 7, Tp Hồ Chí Minh.</p>
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
                  type="button" className="inline-block px-6 py-2.5 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bg-green-700">
                    {locale === "en" ? "SEND" : "Gởi"}</button>
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
