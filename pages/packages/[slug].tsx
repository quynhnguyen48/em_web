import type {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import type { NextPage } from "next";
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
import Accordion from '../../components/Accordion';
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';

const api_endpoint = "http://54.91.167.122:1337";

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
  sub_packages: any;
  desc: string;
  image_url: string;
};

export const getServerSideProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
  locale,
}) => {
  const toastId = toast.loading('Loading...');
  let slug = params!.slug;
  if (locale == "en") {
    slug = slug + "-en";
  }
  const data = await new PackagesApi().findOne(slug);
  return {
    props: {
      slug: data!.slug,
      label: data!.label,
      sub_packages: data.sub_packages,
      desc: data.desc,
      image_url: data.image_url,
    },
  };
  toast.dismiss(toastId);
}

const Blog = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  let { locale } = useRouter();
  locale = locale ?? "";
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
      <Hero heading={props.label} message={props.desc} image_url={api_endpoint + props.image_url} />
      <div className="max-w-[1048px] mx-auto text-left">
      {props.sub_packages?.map((sp: any, id: any) =>
        <div className="max-w-[1240px] mx-auto p-4 text-center">
          <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
              <p className='text-center text-2xl font-semibold mb-4'>{sp.label}</p>
              {sp.image && <img
                src={api_endpoint + sp.image?.url}
                sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw" alt='me' />}
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
              {sp.services.map((sv: any) => <Accordion title={sv.label} content={
                <div>
                  <p>{sv.desc}</p>
                  <div className='columns-3'>
                    {sv.price && <p className='font-bold p-5'>{numberWithCommas(sv.price)}<span className='underline'>đ</span></p>}
                    {sv.show_buy_btn && <div className='p-5 text-black'><button>{tranlsate("buy_now", locale)}</button></div>}
                    {sv.show_learn_more && <div className='p-5'><Link href={locale == "en" ? "/en/services/" + sv.slug.substr(0, sv.slug.length - 3) : "/services/" + sv.slug}>{tranlsate("learn_more", locale)}</Link></div>}
                  </div>
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
