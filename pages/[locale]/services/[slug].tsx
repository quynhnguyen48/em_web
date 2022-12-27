import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { ServiceApi } from "../../../models/service";
import Head from "next/head";
import Hero from "../../../components/Hero/Hero";
import Slider from "../../../components/Slider/Slider";
import { SliderData } from "../../../components/Slider/SliderData";
import Instagram from "../../../components/InstagramGallery/Instagram";
import Portfolio from "../../../components/Portfolio/Portfolio";
import Contact from "../../../components/Contact/Contact";
import Packages from "../../../components/Packages/Packages";
import { useRouter } from 'next/router'
import { PackagesApi } from "../../../models/package";
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks';

import { makeStaticProps, getStaticPathsServices, getStaticPropsService } from '../../../lib/getStatic';
import SmallHero from '../../../components/Hero/SmallHero';

// const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPathsServices as getStaticPaths, getStaticPropsService as getStaticProps };


type IBlogUrl = {
  id: string;
  slug: string;
  label: string;
  desc: string;
  detail: string;
  image_url: string;
  placeholder_image_url: string;
  price: any;
  show_buy_btn: any;
};

// export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
//   const json = await new ServiceApi().getAll();
//   const blogs = json;
//   return {
//     paths: blogs.map((v: any) => ({
//       params: { 
//         slug: v.slug, 
//         label: v ? v.label : "", locale: "en" },
//     })),
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
//   params,
//   locale,
// }) => {
//   let slug = params!.slug;
//   if (locale == "en") {
//     slug = slug + "-en";
//   }
//   const data = await new ServiceApi().findOne(slug);
//   return {
//     props: data ? {
//       id: data.id,
//       slug: data.slug,
//       label: data.label,
//       desc: data.desc,
//       detail: data.detail,
//       image_url: data.image_url,
//       placeholder_image_url: data.placeholder_image_url,
//       price: data.price,
//       show_buy_btn: data.show_buy_btn ?? false,
//     } :
//     {
//       id: "",
//       slug: "",
//       label: "",
//       desc: "",
//       detail: "",
//       image_url: "",
//       placeholder_image_url: "",
//       price: "",
//       show_buy_btn: false,
//     },
//   };
// };

const Blog = (props: InferGetStaticPropsType<typeof getStaticPropsService>) => {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
  const [logged, setLogged] = useState(false);

  const addToCart = (id: number) => {
    if (logged) {
      const token = localStorage.getItem('token');
      axios.post('http://3.89.245.84:1337/api/product/addProductToCart', {
          "product_id": id,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(function (response) {
            console.log('success');
            toast.success('Thêm vào giỏ hàng thành công');
            router.push("/cart", "/cart", { locale });
            let el = document.getElementById('num-of-item');
            if (el) {
              el.innerText = (parseInt(el.innerText) + 1).toString();;
            }
          })
          .catch(function (error) {
            console.log('failed');
            console.log(error);
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
      <Hero heading={locale === "en" ? props.en_label : props.label} message={locale === "en" ? props.en_desc : props.desc} 
        image_url={"http://3.89.245.84:1337" + props.image_url} 
        image_placeholder_url={"http://3.89.245.84:1337" + props.placeholder_image_url} />
      <div className="max-w-[1048px] mx-auto py-16 text-left">
      {props.show_buy_btn && <div className='flex justify-center mb-10'>
      <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <p className='text-3xl text-left inline'>{numberWithCommas(props.price)}đ</p>
          <button
            onClick={() => {addToCart(parseInt(props.id))}}
          ><div className='inline bg-green-200 p-4 rounded-full sm:ml-5 ml-0 text-black hover:bg-green-300'>{locale === "en" ? "Add to cart" : "Thêm vào giỏ hàng"}</div></button>
          </div>
        </div>  }
          <ReactMarkdown children={locale === "en" ? props.en_detail : props.detail} remarkPlugins={[remarkGfm, remarkBreaks] } />
      </div>
      <Contact />
    </>
  );
};

function numberWithCommas(x: number) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Blog;
