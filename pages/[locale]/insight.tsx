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
import Accordion from "../../components/Accordion";
import LinkComponent from "../../components/Link";
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
  const [active, setActive] = useState(-1);
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

  const sendEmailSubscription = () => {
    axios.post('https://api.echomedi.me' + '/api/packages/subscribeInfo', {
      "email": email,
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
      <SmallHero heading={locale === "en" ? "Insight" : "Tổng quan"} message={""} sub_message={[]} image_url={"https://echomedi.com/wp-content/uploads/2022/07/pexels-antoni-shkraba-5214952-2.jpg"} />
      <div className="max-w-[1240px] mx-auto p-4 text-center">
        <div className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 pt-12">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className='text-center text-2xl font-medium mb-4'>{locale === "en" ? "ECHO MEDI News" : "Tin tức ECHO MEDI"}</p>
            {/* <p>{locale === "en" ? "ECHO MEDI offers a variety of memberships designed to fit the unique requirements of our members. Our team works hand-in-hand with you to identify the optimal membership for your health needs." : "ECHO MEDI cung cấp những gói thành viên khác nhau, được tạo ra nhằm đáp ứng nhu cầu đặc biệt của mỗi cá nhân. Đội ngũ của chúng tôi sẽ sát cánh với bạn trong việc chọn lựa gói thành viên thích hợp với tình trạng sức khỏe."}</p> */}
            <img src="https://echomedi.com/wp-content/uploads/2022/07/pexels-rodnae-productions-8401909-1024x683.jpg" />
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className='text-center text-2xl font-medium mb-4'>{locale === "en" ? "Video" : "Video"}</p>
            <img src="https://echomedi.com/wp-content/uploads/2022/07/pexels-pixabay-219932-1024x685.jpg" />

          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className='text-center text-2xl font-medium mb-4'>{locale === "en" ? "Knowledge" : "Kiến thức y khoa"}</p>
            <img src="https://echomedi.com/wp-content/uploads/2022/07/pexels-lisa-1662145-1024x683.jpg" />

          </div>
        </div>
        <div className="max-w-[500px] h-full col-span-2 md:col-span-1 row-span-2 pt-10 m-auto">
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <p>{locale === "en" ? "Newsletter" : "Đăng Ký Nhận Thông Tin"}</p>
              <input
                type="text"
                className="
                    form-control
                    mt-3
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
                placeholder={locale === "en" ? "Your Email" : "Email của bạn"}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <button onClick={sendEmailSubscription}>
                <div className="mb-4 inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-emgreen hover:shadow-lg focus:bg-emgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emgreen active:shadow-lg transition duration-150 ease-in-out bg-emgreen text-white rounded-full">
                  {locale == "en" ? "Subscribe" : "Đăng ký"}
                </div>
              </button>
            </div></div></div>
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
