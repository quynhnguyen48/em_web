import type {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../../../components/Hero/Hero";
import Slider from "../../../components/Slider/Slider";
import { SliderData } from "../../../components/Slider/SliderData";
import Instagram from "../../../components/InstagramGallery/Instagram";
import Portfolio from "../../../components/Portfolio/Portfolio";
import Contact from "../../../components/Contact/Contact";
import Packages from "../../../components/Packages/Packages";
import { useRouter } from 'next/router'
import { PackagesApi } from '../../../models/package';
import Accordion from '../../../components/Accordion';
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';

import { makeStaticProps, getStaticPathsPackages, getStaticPropsPackage } from '../../../lib/getStatic';
import { useTranslation } from 'next-i18next'
import LinkComponent from '../../../components/Link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import parse from 'html-react-parser';

// const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPathsPackages as getStaticPaths, getStaticPropsPackage as getStaticProps };

const api_endpoint = "https://api.echomedi.me";

const tranlsate = (s: string, locale: string | undefined) => {
  switch (s) {
    case "buy_now":
      if (locale === "en")
        return "Buy now";
      else
        return "Mua ngay";
    case "learn_more":
      if (locale === "en")
        return "Learn more";
      else
        return "Tìm hiểu thêm";
  }
  return "";
}

type IBlogUrl = {
  slug: string;
  label: string;
  en_label: string;
  sub_packages: any;
  desc: string;
  image_url: string;
  show_additional_fee: any;
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticPropsPackage>) => {
  // let { locale } = useRouter();
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
  const [active, setActive] = useState(-1);

  const addToCart = (id: number) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      axios.post('https://api.echomedi.me/api/product/addServiceToCart', {
          "service_id": id,
          "quantity" : 1,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(function (response) {
            toast.success('Thêm vào giỏ hàng thành công');
            router.push("/cart", "/cart", { locale });
            let el = document.getElementById('num-of-item');
            if (el) {
              el.innerText = (parseInt(el.innerText) + 1).toString();;
            }
          })
          .catch(function (error) {
            toast.error("Thêm vào giỏ hàng thất bại")
          });
        } else {
          toast.success('Vui lòng đăng nhập.');
          router.push("/login", "/login", { locale });
        }
  }

  return (
    <>
      <Head>
        <title>{locale === "en" ? props.en_label : props.label}</title>
        <meta
          name="description"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon1.png" />
      </Head>
      {/* <Hero heading={locale === "en" ? props.en_label : props.label} message={locale === "en" ? props.en_desc : props.desc} image_url={api_endpoint + props.image_url} /> */}
                <img 
                  style={{
                    height: "300px",
                    width: "100%",
                    // marginTop: "100px",
                    objectFit: "cover",
                  }}
                src={"https://api.echomedi.me" + props.image_url}
                />
                <p className='text-center text-3xl mt-10 mb-5'>{locale === "en" ? props.en_label : props.label}</p>
                {props.en_desc && <div className="max-w-[1048px] mx-auto text-left px-10">
                  {parse(locale == "en" ? (props.en_desc ?? "") : (props.desc ?? ""))}
                </div>}
      <div className="max-w-[1048px] mx-auto text-left">
      {props.sub_packages?.map((sp: any, id: any) =>
        <div className="max-w-[1240px] mx-auto p-4 text-center">
          <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
              <p className='text-center text-2xl font-medium mb-4'>{locale === "en" ? sp.en_label : sp.label}</p>
              {sp.image && <img
                src={api_endpoint + sp.image?.url}
                sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw" alt='me' />}
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-12">
              {sp.services.map((sv: any) => <Accordion id={sv.id} active={active} setActive={setActive} title={locale === "en" ? sv.en_label : sv.label} content={
                <div>
                  <p className='pt-4' >{locale === "en" ? sv.en_desc : sv.desc}</p>
                  <div className='columns-1 sm:columns-3 flex justify-around items-center my-5 flex-col sm:flex-row'>
                    {sv.price && <p className='text-center m-auto font-semibold'>{numberWithCommas(sv.price)}<span className='underline'>đ</span></p>}
                    {sv.show_buy_btn && <div className='mt-2 sm:mt-0 text-black text-center'><button
                    style={{
                      backgroundColor: "#416045",
                      color: "white",
                    }}
                    onClick={() => addToCart(sv.id)}
                      className='w-auto m-auto inline-block px-5 py-2 text-black  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200'
                    >{tranlsate("buy_now", locale)}</button></div>}
                    {sv.show_learn_more && 
                    <div className="w-auto m-auto sm:mt-0 mt-5 hover:underlinetext-center bg-transparent hover:bg-emgreen text-emgreen hover:text-white py-1 px-4 border border-green-500 hover:border-transparent hover:text-white rounded bg-emgreen border-emgreen text-center mt-5">
                      <LinkComponent href={"/services/" + sv.slug} skipLocaleHandling={false} locale={""}>{tranlsate("learn_more", locale)}</LinkComponent></div>}
                  </div>
                  {sv.show_additional_fee && <p className='text-center italic text-xs	mt-5'>(Bao gồm phụ phí điều dưỡng và bác sĩ đến nhà)</p>}
                  {sv.show_additional_fee && <p className='text-center text-xs	'>1,000,000 đ</p>}
                </div>
              } />)}
            </div>
          </div>
          {id != props.sub_packages.length - 1 && <div className="w-full border-b border-green-700 mt-10"></div>}
        </div>
      )}
      </div>
      <Contact />
    </>
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Blog;
