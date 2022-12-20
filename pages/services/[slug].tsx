import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { ServiceApi } from '../../models/service';
import Head from "next/head";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import { SliderData } from "../../components/Slider/SliderData";
import Instagram from "../../components/InstagramGallery/Instagram";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Packages from "../../components/Packages/Packages";
import { useRouter } from 'next/router'
import { PackagesApi } from '../../models/package';
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks';

type IBlogUrl = {
  id: string;
  slug: string;
  label: string;
  desc: string;
  detail: string;
  image_url: string;
  placeholder_image_url: string;
  price: any;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  const json = await new PackagesApi().getAll();
  const blogs = json;
  return {
    paths: blogs.map((v: any) => ({
      params: { slug: v.slug, label: v ? v.label : "" },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
  locale,
}) => {
  let slug = params!.slug;
  if (locale == "en") {
    slug = slug + "-en";
  }
  const data = await new ServiceApi().findOne(slug);
  return {
    props: data ? {
      id: data.id,
      slug: data.slug,
      label: data.label,
      desc: data.desc,
      detail: data.detail,
      image_url: data.image_url,
      placeholder_image_url: data.placeholder_image_url,
      price: data.price,
    } :
    {
      id: "",
      slug: "",
      label: "",
      desc: "",
      detail: "",
      image_url: "",
      placeholder_image_url: "",
      price: "",
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  let { locale } = useRouter();
  locale = locale ?? "";
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  const addToCart = (id: number) => {
    if (logged) {
      const token = localStorage.getItem('token');
      axios.post('http://54.91.167.122:1337/api/product/addProductToCart', {
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
        <title>{props.label}</title>
        <meta
          name="description"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon1.png" />
      </Head>
      <Hero heading={props.label} message={props.desc} 
        image_url={"http://54.91.167.122:1337" + props.image_url} 
        image_placeholder_url={"http://54.91.167.122:1337" + props.placeholder_image_url} />
      <div className="max-w-[1048px] mx-auto py-16 text-left">
      <div className='flex justify-center mb-4'>
          <p className='text-3xl text-left inline'>{numberWithCommas(props.price)}đ</p>
          <button
            onClick={() => {addToCart(parseInt(props.id))}}
          ><div className='inline bg-green-200 p-4 rounded-full ml-5 text-black hover:bg-green-300'>{locale === "en" ? "Add to cart" : "Thêm vào giỏ hàng"}</div></button>
        </div>  
          <ReactMarkdown children={props.detail} remarkPlugins={[remarkGfm, remarkBreaks] } />
      </div>
      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
    </>
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Blog;
