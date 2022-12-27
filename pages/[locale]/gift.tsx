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
    axios.post('http://3.89.245.84:1337' + '/api/packages/contact', {
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
      <SmallHero heading={locale === "en" ? "Insight" : "Tổng quan"} message={""} sub_message={[]} image_url={"https://echomedi.com/wp-content/uploads/2022/07/pexels-antoni-shkraba-5214952-2.jpg"} />
      <div className="max-w-[1240px] mx-auto p-4 text-center">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4 pt-12">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className='text-center text-green-800 text-3xl font-bold mb-4'>{locale === "en" ? "Trao Yêu Thương" : "Trao Yêu Thương"}</p>
            <p className='text-center text-green-800 text-2xl font-medium mb-4'>{locale === "en" ? "Tặng Sức Khỏe" : "Tặng Sức Khỏe"}</p>
            <p className='text-center text-xl font-medium mb-4'>{locale === "en" ? "Thành viên được tiếp cận đầy đủ các dịch vụ trợ giúp y tế đặc biệt, phù hợp với yêu cầu từng cá nhân" : "Thành viên được tiếp cận đầy đủ các dịch vụ trợ giúp y tế đặc biệt, phù hợp với yêu cầu từng cá nhân"}</p>
            <div className="flex space-x-2 justify-center">
                  <button 
                    onClick={contact}
                  type="button" className="inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out bg-green-200 text-black rounded-full">
                    {locale === "en" ? "Send gift" : "Gởi quà"}</button>
                </div>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
          <img src="https://echomedi.com/wp-content/uploads/2022/08/Untitled-design-2022-08-08T073025.967-scaled.jpg" />

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
