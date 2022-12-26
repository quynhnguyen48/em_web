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
      <SmallHero heading={locale === "en" ? "Membership" : "Thành viên"} message={""} sub_message={[]} image_url={"https://echomedi.com/wp-content/uploads/2022/07/pexels-antoni-shkraba-5214952-2.jpg"} />
      <div className="max-w-[1240px] mx-auto p-4 text-center">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4 pt-12">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className='text-center text-2xl font-medium mb-4'>{locale === "en" ? "Annual Membership" : "Thành Viên Thường Niên"}</p>
            <p>{locale === "en" ? "ECHO MEDI offers a variety of memberships designed to fit the unique requirements of our members. Our team works hand-in-hand with you to identify the optimal membership for your health needs." : "ECHO MEDI cung cấp những gói thành viên khác nhau, được tạo ra nhằm đáp ứng nhu cầu đặc biệt của mỗi cá nhân. Đội ngũ của chúng tôi sẽ sát cánh với bạn trong việc chọn lựa gói thành viên thích hợp với tình trạng sức khỏe."}</p>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <Accordion active={active} setActive={setActive} id={1} title={locale == "en" ? "Silver Membership" : "Thành viên bạc"} content={
              <div>
                <p className='font-medium text-center' >{
                locale == "en" ? "Silver membership is a basic health care package for members that includes benefits such as free unlimited online consultations 24/7, free medical examinations at clinic and telemedicine once a month, and discounts while utilizing clinic services and purchasing medications. Join as a Silver member for a low, set yearly price." :
                "Gói thành viên bạc là gói chăm sóc sức khỏe cơ bản cho thành viên với các đặc quyền như: Miễn phí không giới hạn tư vấn 24/7, miễn phí khám bệnh tại phòng khám và khám bệnh từ xa mỗi tháng, và nhận được các ưu đãi khi sử dụng dịch vụ và mua thuốc tại phòng khám. Hãy trở thành thành viên bạc với mức chi phí tiết kiệm và cố định hằng năm."
                }</p>
                <div className='columns-1 sm:columns-3'>
                <p className="font-semibold p-5 text-center">6,000,000/{locale == "en" ? "year" : "năm"}<span className="underline"></span></p>
                <div className="pt-3 text-black text-center"><button className="font-semibold inline-block px-5 py-2 text-black font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200">
                  {locale == "en" ? "Buy now" : "Mua ngay"}
                </button></div>
                <div className="p-5 hover:underline text-center text-center"><LinkComponent skipLocaleHandling={false} href="/services/tam-soat-ung-thu-tong-quat" locale="">{locale == "en" ? "Learn more" : "Tìm hiểu"}</LinkComponent></div>
                </div>
              </div>
            } />
            <Accordion active={active} setActive={setActive} id={2} title={locale == "en" ? "Gold Membership" : "Thành viên vàng"} content={
              <div>
                <p className='font-medium text-center' >Gói thành viên vàng là gói chăm sóc sức khỏe nâng cao cho thành viên với các đặc quyền như: Miễn phí không giới hạn tư vấn 24/7, miễn phí khám bệnh tại phòng khám và khám bệnh từ xa 2 lần mỗi tháng, và nhận được các ưu đãi khi sử dụng dịch vụ và mua thuốc tại phòng khám. Hãy trở thành thành viên vàng với mức chi phí tiết kiệm và cố định hằng năm.</p>
                <div className='columns-1 sm:columns-3'>
                <p className="font-semibold p-5 text-center">12,000,000/năm<span className="underline"></span></p>
                <div className="pt-3 text-black text-center"><button className="font-semibold inline-block px-5 py-2 text-black font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200">{locale == "en" ? "Buy now" : "Mua ngay"}</button></div>
                <div className="p-5 hover:underline text-center text-center"><LinkComponent skipLocaleHandling={false} href="/services/tam-soat-ung-thu-tong-quat" locale="">{locale == "en" ? "Learn more" : "Tìm hiểu"}</LinkComponent></div>
                </div>
              </div>
            } />
            <Accordion active={active} setActive={setActive} id={3} title={locale == "en" ? "Platinum Membership" : "Thành viên bạch kim"} content={
              <div>
                <p className='font-medium text-center' >Gói thành viên bạch kim là gói chăm sóc sức khỏe toàn diện với các đặc quyền: Miễn phí không giới hạn tư vấn online, miễn phí không giới hạn khám tại phòng khám và khám bệnh từ xa, miễn phí kiểm tra sức khỏe tổng quát 6 tháng/lần, kèm các ưu đãi khi sử dụng dịch vụ và mua thuốc tại phòng khám. Hãy trở thành thành viên bạch kim với chi phí tiết kiệm và cố định hàng năm.

</p>
                <div className='columns-1 sm:columns-3'>
                <p className="font-semibold p-5 text-center">18,000,000/{locale == "en" ? "year" : "năm"}<span className="underline"></span></p>
                <div className="pt-3 text-black text-center"><button className="font-semibold inline-block px-5 py-2 text-black font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200">{locale == "en" ? "Buy now" : "Mua ngay"}</button></div>
                <div className="p-5 hover:underline text-center text-center"><LinkComponent skipLocaleHandling={false} href="/services/tam-soat-ung-thu-tong-quat" locale="">{locale == "en" ? "Learn more" : "Tìm hiểu"}</LinkComponent></div>
                </div>
              </div>
            } />
            <Accordion active={active} setActive={setActive} id={4} title={locale == "en" ? "Family Package Deal" : "Gói gia đình"} content={
              <div>
                <p className='font-medium text-center' >Nhận được thêm 10% ưu đãi khi đăng ký gói thành viên cho ít nhất 3 thành viên trong gia đình

</p>
                <div className='columns-1 sm:columns-3'>
                <div className="p-5 hover:underline text-center"><LinkComponent skipLocaleHandling={false} href="/services/tam-soat-ung-thu-tong-quat" locale="">{locale == "en" ? "Learn more" : "Tìm hiểu"}</LinkComponent></div>
                </div>
              </div>
            } />
            <Accordion active={active} setActive={setActive} id={5} title={locale == "en" ? "Corporate Package Deal" : "Gói doanh nghiệp"} content={
              <div>
                <p className='font-medium text-center' >Gói thành viên cho doanh nghiệp sẽ thay đổi phụ thuộc vào nhu cầu của từng doanh nghiệp. Hãy liên hệ trực tiếp với chúng tôi để được tư vấn và nhận ưu đãi phù hợp nhất dành cho doanh nghiệp của bạn.

</p>
                <div className='columns-1 sm:columns-3'>
                <div className="p-5 hover:underline text-center"><LinkComponent skipLocaleHandling={false} href="/services/tam-soat-ung-thu-tong-quat" locale="">{locale == "en" ? "Learn more" : "Tìm hiểu"}</LinkComponent></div>
                </div>
              </div>
            } />
            <Accordion active={active} setActive={setActive} id={6} title={locale == "en" ? "Non-Resident (Vietnamese abroad) Membership" : "Thành viên ngoại kiều"} content={
              <div>
                <p className='font-medium text-center' >Echo Medi cung câp gói thành viên cho các Ngoại Kiều đang sinh sống và làm việc tại nước ngoài. Khi trở thành thành viên của Echo Medi, Ngoại Kiều có thể nhận được các ưu đãi bao gồm: Miễn phí không giới hạn tư vấn với nhân viên y tế, miễn phí khám bệnh từ xa 1 tuần/lần và miễn phí không giới hạn test nhanh covid-19 khi về Việt Nam.

</p>
                <div className='columns-1 sm:columns-3'>
                <p className="font-semibold p-5 text-center">10,000,000/{locale == "en" ? "year" : "năm"}<span className="underline"></span></p>
                <div className="pt-3 text-black  text-center"><button className="font-semibold inline-block px-5 py-2 text-black font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200">{locale == "en" ? "Buy now" : "Mua ngay"}</button></div>
                <div className="p-5 hover:underline  text-center"><LinkComponent skipLocaleHandling={false} href="/services/tam-soat-ung-thu-tong-quat" locale="">{locale == "en" ? "Learn more" : "Tìm hiểu"}</LinkComponent></div>
                </div>
              </div>
            } />
          </div>
            
        </div>
        <div className="max-w-[500px] h-full col-span-2 md:col-span-1 row-span-2 pt-10 m-auto">
            <div className="flex justify-center">
              <div className="mb-3 w-full">
                <p>{locale === "en" ? "Inquiry" : "Hỏi Thêm"}</p>
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
                  placeholder="Chọn gói"
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
                  placeholder={locale === "en" ? "Email" : "Email"}
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
                  type="button" className="inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out bg-green-200 text-black rounded-full">
                    {locale === "en" ? "SEND" : "Gởi"}</button>
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