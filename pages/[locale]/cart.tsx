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
import React, { useEffect, useState } from "react";
import axios from "axios";
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

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Home: NextPage = () => {
  const [lines, setCartLines] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  useEffect(() => {
    const toastId = toast.loading('Loading...');
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('https://api.echomedi.me/api/product/getCart',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
          let total = 0;
          let lines = response.data.user.cart_lines ?? [];
          lines.forEach((l:any) => {
            total += (l.product ? l.product.price :  parseInt(l.service.price)) * l.quantity;
          })
          setTotalPrice(total);
          setCartLines(lines);
        })
        .catch(function (error) {
        })
        .finally(() => {
          toast.dismiss(toastId);
        });
    }
  }, []);

  const getVNPayPaymentURL = () => {
    const toastId = toast.loading('Loading...');
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('https://api.echomedi.me/api/orders/createPaymentUrl', {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
          window?.open(response?.data?.url, '_blank')?.focus();
          location.href= "/order_detail/?code=" + response?.data?.code;
        })
        .catch(function (error) {
        })
        .finally(() => {
          toast.dismiss(toastId);
        });
    }
  }

  const createOrder = () => {
    const toastId = toast.loading('Loading...');
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('https://api.echomedi.me/api/orders/createOrder', {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
          // let total = 0;
          // let lines = response.data.user.cart_lines ?? [];
          // lines.forEach((l:any) => {
          //   total += l.product.price;
          // })
          // setTotalPrice(total);
          // setCartLines(lines);
          location.reload();
        })
        .catch(function (error) {
        })
        .finally(() => {
          toast.dismiss(toastId);
        });
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
      <SmallHero heading={locale === "en" ? "Cart" : "Giỏ hàng"} 
      image_url="https://api.echomedi.me/uploads/dat_lich_kham_5246f10577.jpg?updated_at=2023-01-07T01:43:41.793Z" message={""} sub_message={[]}/>
      <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-4/4 sm:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">{locale === "en" ? "Shopping Cart" : "Giỏ hàng"}</h1>
          {/* <h2 className="font-semibold text-2xl">3 Items</h2> */}
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-4/5">{locale === "en" ? "Product details" : "Chi tiết đơn hàng"}</h3>
          {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Quantity" : "Số lượng"}</h3> */}
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Price" : "Giá"}</h3>
          {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Total" : "Tổng cộng"}</h3> */}
        </div>
        {lines.map((line:any) => 
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-4/5">
            <div className="w-20">
              <img className="h-24 object-contain" src={"https://api.echomedi.me" + line.product?.image?.url} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{(line.product? line.product.label : line.service.label)}</span>
              <span className="font-bold text-sm">{locale =="en" ? "Quantity" : "Số lượng"} {line.quantity}</span>
              {/* <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">{locale === "en" ? "Remove" : "Xoá"}</a> */}
            </div>
          </div>
          {/* <div className="flex justify-center w-1/5">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div> */}
          {/* {lines.map((line:any) => 
          <span className="text-center w-1/5 font-semibold text-sm">{line.product.price}</span>
            )} */}
          <span className="text-center w-1/5 font-semibold text-sm">{numberWithCommas((line.product ? line.product.price : line.service.price) * line.quantity)}đ</span>
        </div>)}

        {/* <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">Skincare & Anti-Aging Package</span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">354.000đ</span>
          <span className="text-center w-1/5 font-semibold text-sm">354.000đ</span>
        </div>

        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">Pregnancy Care Package</span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">2.354.000đ</span>
          <span className="text-center w-1/5 font-semibold text-sm">2.354.000đ</span>
        </div> */}
      </div>

      <div id="summary" className="w-1/4 px-8 py-10 hidden sm:block">
        <h1 className="font-semibold text-2xl border-b pb-8">{locale === "en" ? "Order Summary" : "Tóm tắt đơn hàng"}</h1>
        {/* <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>{locale === "en" ? "TOTAL COST" : "TỔNG CỘNG"}</span>
            <span>{numberWithCommas(totalPrice)}đ</span>
          </div>
          <button 
            onClick={getVNPayPaymentURL}
            className="bg-green-200 font-semibold hover:bg-green-300 py-3 text-sm text-black uppercase w-full rounded-full">{locale == "en" ? "Create Order" : "Đặt hàng"}</button>
        </div>
      </div>

    </div>
    <div id="summary" className="w-4/4 px-8 py-10 block sm:hidden">
        <h1 className="font-semibold text-2xl border-b pb-8">{locale === "en" ? "Order Summary" : "Tóm tắt đơn hàng"}</h1>
        {/* <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>{locale === "en" ? "TOTAL COST" : "TỔNG CỘNG"}</span>
            <span>{numberWithCommas(totalPrice)}đ</span>
          </div>
          <button 
            onClick={getVNPayPaymentURL}
            className="bg-green-200 font-semibold hover:bg-green-300 py-3 text-sm text-black uppercase w-full rounded-full">{locale == "en" ? "Create Order" : "Đặt hàng"}</button>
        </div>
      </div>
  </div>
      <Contact />
    </>
  );
};

export default Home;
