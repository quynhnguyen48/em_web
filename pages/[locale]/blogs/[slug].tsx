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

import { makeStaticProps, getStaticPathsBlogs, getStaticPropsService, getStaticPropsBlog } from '../../../lib/getStatic';
import SmallHero from '../../../components/Hero/SmallHero';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import parse from 'html-react-parser';

// const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPathsBlogs as getStaticPaths, getStaticPropsBlog as getStaticProps };


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

const Blog = (props: InferGetStaticPropsType<typeof getStaticPropsBlog>) => {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  return (
    <>
      <Head>
        {/* <title>{locale === "en" ? props.en_label : props.label}</title> */}
        <meta
          name="description"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon1.png" />
      </Head>
      <SmallHero heading={""} message={""} sub_message={[]} image_url={"https://api.echomedi.com" + props.image_url} />
      <div className="p-4 mx-auto max-w-[864px] mb-10">
        <h1 className='mb-8 text-center text-3xl'>{props.label}</h1>
        <div className='markdown-container'>
          {parse(props.article ?? "")}
        </div>
      </div>

      <Contact />
    </>
  );
};

function numberWithCommas(x: number) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Blog;
