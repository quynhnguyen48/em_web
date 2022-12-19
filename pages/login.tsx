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
import SmallHero from "../components/Hero/SmallHero";
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
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [lines, setCartLines] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  let { locale } = useRouter();
  locale = locale ?? "";

  const register = () => {
    if (email == "") {
      toast.error("Thông tin không phù hợp")
    } else
    if (password != confirmPassword) {
      toast.error("Mật khẩu và xác nhận mật khẩu không trùng nhau")
    } else {
      axios.post('http://54.91.167.122:1337/api/auth/local/register', {
        "username": email,
        "email": email,
        "password": password,
      })
        .then(function (response) {
          console.log('success');
          toast.success('Đăng ký thành công');
        })
        .catch(function (error) {
          console.log('failed');
          console.log(error);
          toast.error("Đăng ký thất bại")
        });
    }
  }

  const login = () => {
    if (email == "" || password == "") {
      toast.error("Thông tin không phù hợp")
    } else {
      const toastId = toast.loading('Loading...');
      axios
        .post('http://54.91.167.122:1337/api/auth/local', {
          identifier: email,
          password: password,
        })
        .then(response => {
          // Handle success.
          toast.success('Đăng nhập thành công');
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          localStorage.setItem('token', response.data.jwt);
          router.push("/", "/", { locale });
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
          toast.error("Không thể đăng nhập. Vui lòng kiểm tra lại tên đăng nhập, mật khẩu")
        })
        .finally(() => {
          toast.dismiss(toastId);
        });;
      }
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
      {/* <Hero heading={locale === "en" ? "Login" : "Liên hệ"} message={""} sub_message={[]} image_url={"https://echomedi.com/wp-content/uploads/2022/07/pexels-antoni-shkraba-5214952-2.jpg"}/> */}
      <SmallHero heading={locale === "en" ? "Login" : "Đăng nhập"} message={""} sub_message={[]} image_url={"https://echomedi.com/wp-content/uploads/2022/07/pexels-antoni-shkraba-5214952-2.jpg"} />
      <div className="max-w-[1240px] mx-auto p-4 text-left mt-4">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-2xl font-bold mb-4">{locale == "vi" ? "Đăng nhập" : "Login"}</p>
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
                  placeholder={locale === "en" ? "Email" : "Email"}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
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
                  type="password"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  onChange={(e) => { setPassword(e.target.value) }}
                />
                <div className="flex space-x-2 justify-center mt-8">
                  <button
                    onClick={login}
                    type="button" className="inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bg-green-700">
                    {locale === "en" ? "Login" : "Đăng nhập"}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-2xl font-bold mb-4">{locale === "en" ? "Register" : "Đăng ký"}</p>
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
                  placeholder={locale === "en" ? "Email" : "Email"}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
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
                  type="password"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  onChange={(e) => { setPassword(e.target.value) }}
                />
                <input
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
                  type="password"
                  id="exampleFormControlInput1"
                  placeholder={locale === "en" ? "Confirm password" : "Confirm password"}
                  onChange={(e) => { setConfirmPassword(e.target.value) }}
                />
                <p>{
                  locale === "en" ?
                    "Your personal information will be used to enhance your experience of using the website, to manage access to your account, and for other specific purposes described in our privacy policy." :
                    "Thông tin cá nhân của bạn sẽ được sử dụng để tăng cường trải nghiệm sử dụng website, để quản lý truy cập vào tài khoản của bạn, và cho các mục đích cụ thể khác được mô tả trong privacy policy của chúng tôi."}
                </p>
                <div className="flex space-x-2 justify-center mt-8">
                  <button
                    onClick={register}
                    type="button" className="inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bg-green-700">
                    {locale === "en" ? "REGISTER" : "Đăng ký"}</button>
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
