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
import { ProductApi } from '../../models/blog';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";

type IBlogUrl = {
  id: string;
  slug: string;
  label: string;
  desc: string;
  image_url: string;
  image_placeholder_url: string;
  medicines: any;
  price: any;
};

export const getServerSideProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
  locale,
}) => {
  let slug = params!.slug;
  if (locale == "en") {
    slug = slug + "-en";
  }
  const data = await new ProductApi().findOne(slug);
  return {
    props: data ? {
      id: data.id,
      slug: data.slug,
      label: data.label,
      desc: data.desc,
      image_url: data.image_url,
      medicines: data.medicines,
      price: data.price,
      image_placeholder_url: data.image_placeholder_url,
    } :
    {
      id: "",
      slug: "",
      label: "",
      desc: "",
      image_url: "",
      medicines: [],
      price: 0,
      image_placeholder_url: "",
    },
  };
}

const Product = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  let { locale } = useRouter();
  locale = locale ?? "";
  const router = useRouter();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setLogged(true);
    }
  }, []);

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
      <Hero 
        heading={props.label} 
        message={props.desc}
        sub_message={props.medicines.map((m: any) => m.label)}
        image_url={"http://54.91.167.122:1337" + props.image_url} 
        image_placeholder_url={"http://54.91.167.122:1337" + props.image_placeholder_url} 
        />
        
      <div className="max-w-[1048px] mx-auto py-16 text-left">
        <div className='flex justify-center mb-4'>
          <p className='text-3xl text-left inline'>{numberWithCommas(props.price)}đ</p>
          <button
            onClick={() => {addToCart(parseInt(props.id))}}
          ><div className='inline bg-green-200 p-4 rounded-full ml-5 text-black hover:bg-green-300'>{locale === "en" ? "Add to cart" : "Thêm vào giỏ hàng"}</div></button>
        </div>  
      {
          props.medicines?.map((m:any) => <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 m-auto">
            {/* <img className='m-auto' width={400} src={"http://54.91.167.122:1337" + m.image.url} /> */}
            <LazyLoadImage
              src={"http://54.91.167.122:1337" + m.image.url} // use normal <img> attributes as props
              placeholderSrc={"http://54.91.167.122:1337" + m.image.formats.thumbnail.url}
              width={400} />
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col justify-center">
            <p className='font-bold text-xl mb-2'>{m.label}</p>
            <p>{m.desc}</p>
          </div>
        </div>)
        }
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


export default Product;
