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

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [lines, setCartLines] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  const register = () => {
    if (email == "") {
      toast.error("Thông tin không phù hợp")
    } else
    if (password != confirmPassword) {
      toast.error("Mật khẩu và xác nhận mật khẩu không trùng nhau")
    } else {
      axios.post('https://api.echomedi.com/api/auth/local/register', {
        "username": email,
        "email": email,
        "password": password,
      })
        .then(function (response) {
          toast.success('Đăng ký thành công');
        })
        .catch(function (error) {
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
        .post('https://api.echomedi.com/api/auth/local', {
          identifier: email,
          password: password,
        })
        .then(response => {
          // Handle success.
          toast.success('Đăng nhập thành công');
          localStorage.setItem('token', response.data.jwt);
          location.reload();
        })
        .catch(error => {
          // Handle error.
          toast.error("Không thể đăng nhập. Vui lòng kiểm tra lại tên đăng nhập, mật khẩu")
        })
        .finally(() => {
          toast.dismiss(toastId);
          location.href = "/";
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
      {/* <Hero heading={locale === "en" ? "Login" : "Liên hệ"} message={""} sub_message={[]} image_url={"https://api.echomedi.com/uploads/pexels_antoni_shkraba_5214952_2_836c5784e8.jpg?updated_at=2023-01-07T04:15:21.739Z"}/> */}
      {/* <SmallHero heading={""} message={""} sub_message={[]} image_url={"https://api.echomedi.com/uploads/pexels_antoni_shkraba_5214952_2_836c5784e8.jpg?updated_at=2023-01-07T04:15:21.739Z"} /> */}
      <div className=""
      // style={{backgroundImage: "url(" + image_url + ")"}}
      // style={{backgroundImage: `url(${loaded ||  image_placeholder_url})`}}
    >
      <img 
                  style={{
                    height: "350px",
                    width: "100%",
                    // marginTop: "100px",
                    objectFit: "cover",
                    // objectPosition: "top"
                  }}
                src={"https://api.echomedi.com/uploads/contact_5df089b37b.jpg?updated_at=2023-01-08T05:53:39.539Z"}
                />
      
    </div>
      <div className="max-w-[1240px] mx-auto p-4 text-left mt-4">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-2xl mb-4">{locale == "vi" ? "Đăng nhập" : "Login"}</p>
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
                  // placeholder="Password"
                  placeholder={locale === "en" ? "Password" : "Mật khẩu"}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
                <div className="flex space-x-2 justify-center mt-8">
                  <button
                    onClick={login}
                    type="button" className="inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-emgreen hover:shadow-lg focus:bg-emgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emgreen active:shadow-lg transition duration-150 ease-in-out bg-emgreen">
                    {locale === "en" ? "Login" : "Đăng nhập"}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-2xl mb-4">{locale === "en" ? "Register" : "Đăng ký"}</p>
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
                  // placeholder="Password"
                  placeholder={locale === "en" ? "Password" : "Mật khẩu"}
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
                  placeholder={locale === "en" ? "Confirm password" : "Nhập lại mật khẩu"}
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
                    type="button" className="inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-emgreen hover:shadow-lg focus:bg-emgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emgreen active:shadow-lg transition duration-150 ease-in-out bg-emgreen">
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
