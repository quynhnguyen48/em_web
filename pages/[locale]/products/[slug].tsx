import type {
  GetStaticPaths,
  // GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
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
import ReactMarkdown from "react-markdown";
import { ProductApi } from '../../../models/product';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";
import { makeStaticProps, getStaticPathsProducts, getStaticPropsProduct } from '../../../lib/getStatic';
import parse from 'html-react-parser';

export { getStaticPathsProducts as getStaticPaths, getStaticPropsProduct as getStaticProps };

type IBlogUrl = {
  id: string;
  slug: string;
  label: string;
  en_label: string;
  desc: string;
  en_desc: string;
  image_url: string;
  image_placeholder_url: string;
  medicines: any;
  price: any;
};

const Product = (props: InferGetStaticPropsType<typeof getStaticPropsProduct>) => {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
  const [logged, setLogged] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setLogged(true);
    }
  }, []);

  const addToCart = (id: number) => {
    if (logged) {
      const token = localStorage.getItem('token');
      axios.post('https://api.echomedi.com/api/product/addProductToCart', {
        "product_id": id,
        "quantity": quantity
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(function (response) {
          toast.success('Th??m v??o gi??? h??ng th??nh c??ng');
          router.push("/" + locale + "/cart", "/" + locale + "/cart", { locale });
          let el = document.getElementById('num-of-item');
          if (el) {
            el.innerText = (parseInt(el.innerText) + 1).toString();;
          }
        })
        .catch(function (error) {
          toast.error("Th??m v??o gi??? h??ng th???t b???i")
        });
    } else {
      toast.success('Vui l??ng ????ng nh???p.');
      router.push("/" + locale + "/login", "/" + locale + "/login", { locale });
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
      {/* <Hero 
        heading={locale === "en" ? props.en_label : props.label} 
        message={locale === "en" ? props.en_desc: props.desc}
        sub_message={props.medicines?.map((m: any) => locale === "en" ? m.en_label: m.label)}
        image_url={"https://api.echomedi.com" + props.image_url} 
        image_placeholder_url={"https://api.echomedi.com" + props.image_placeholder_url} 
        /> */}
      <div className="px-4 mt-10 mx-auto max-w-[1048px] text-center">
        <p className='text-3xl text-left inline'>{locale === "en" ? props.en_label : props.label}</p>
      </div>
      <div className="px-4 mx-auto max-w-[1048px] grid grid-rows-none md:grid-cols-2 mt-12 gap-4">

        <div>
          {/* <img className='pl-0 p-4' src={"https://api.echomedi.com" + props.image_url} /> */}
          <LazyLoadImage
                src={"https://api.echomedi.com" + props.image_url} // use normal <img> attributes as props
                placeholderSrc={"https://api.echomedi.com" + props.image_placeholder_url}
              // width={400} 
              />
        </div>
        <div className='mb-20 justify-center flex flex-col p-4'>
          <ul className='list-disc ml-5'>
            {
              props.medicines?.map((m: any) => <li className=''>{locale === "en" ? m.en_label : m.label}</li>)
            }
          </ul>
          <p className='mt-5 text-justify'>{parse(locale === "en" ? props.en_desc : props.desc)}</p>
          <p className='mt-10 font-semibold mb-2'>{numberWithCommas(props.price)}??</p>
          <div className='flex'>
            <label className='mr-4'>{locale == "en" ? "Quantity" : "S??? l?????ng"}</label>
            <input onChange={e => setQuantity(parseInt(e.target.value))} value={quantity} className='border border-1 w-12 text-center' type="number" id="quantity" name="quantity" />
          </div>
          <button

            className='mt-10'
            onClick={() => { addToCart(parseInt(props.id)) }}
          ><div
            style={{
              backgroundColor: "#416045",
              color: "white",
              margin: 0,
              display: "block",
              width: "200px",
            }}
            className='mt-10 inline bg-green-200 p-4 rounded mt-20 text-black hover:bg-green-300'>{locale === "en" ? "Add to cart" : "Th??m v??o gi??? h??ng"}</div></button>
        </div>
        {/* <button
            onClick={() => {addToCart(parseInt(props.id))}}
          ><div className='inline bg-green-200 p-4 rounded-full sm:ml-5 ml-0 text-black hover:bg-green-300'>{locale === "en" ? "Add to cart" : "Th??m v??o gi??? h??ng"}</div></button> */}
      </div>

      <div className="max-w-[1048px] mx-auto py-16 text-left">

        {
          props.medicines?.map((m: any) => <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 m-auto">
              <LazyLoadImage
                src={"https://api.echomedi.com" + m.image?.url} // use normal <img> attributes as props
                placeholderSrc={"https://api.echomedi.com" + m.image?.formats.thumbnail.url}
              // width={400} 
              />
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col justify-center">
              {/* <p className='font-bold text-xl mb-2'>{locale === "en" ? m.en_label : m.label}</p>
              <p className='text-justify'>{locale === "en" ? m.en_desc : m.desc}</p> */}
              {parse(locale == "en" ? (m.en_desc ?? "") : (m.desc ?? ""))}
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
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default Product;
