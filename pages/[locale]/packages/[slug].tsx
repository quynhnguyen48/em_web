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

import { makeStaticProps, getStaticPathsPackages, getStaticPropsPackage } from '../../../lib/getStatic';
import { useTranslation } from 'next-i18next'
import LinkComponent from '../../../components/Link';

// const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPathsPackages as getStaticPaths, getStaticPropsPackage as getStaticProps };

const api_endpoint = "http://3.89.245.84:1337";

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
};


// export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
//   const json = await new PackagesApi().getAll();
//   const blogs = json;
//   return {
//     paths: blogs.map((v: any) => ({
//       params: { slug: v.slug, label: v ? v.label : "" },
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
//   const data = await new PackagesApi().findOne(slug);
//   return {
//     props: {
//       slug: data!.slug,
//       label: data!.label,
//       sub_packages: data.sub_packages,
//       desc: data.desc,
//       image_url: data.image_url,
//     },
//   };
// }

const Blog = (props: InferGetStaticPropsType<typeof getStaticPropsPackage>) => {
  // let { locale } = useRouter();
  const router = useRouter()
  const locale = router.query.locale as string || 'en';
  console.log('props', props)
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
      <Hero heading={locale === "en" ? props.en_label : props.label} message={locale === "en" ? props.en_desc : props.desc} image_url={api_endpoint + props.image_url} />
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
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
              {sp.services.map((sv: any) => <Accordion title={locale === "en" ? sv.en_label : sv.label} content={
                <div>
                  <p className='font-medium' >{locale === "en" ? sv.en_desc : sv.desc}</p>
                  <div className='columns-1 sm:columns-3'>
                    {sv.price && <p className='font-semibold p-5'>{numberWithCommas(sv.price)}<span className='underline'>đ</span></p>}
                    {sv.show_buy_btn && <div className='pt-3 text-black'><button
                      className='font-semibold inline-block px-5 py-2 text-black font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out bg-green-200'
                    >{tranlsate("buy_now", locale)}</button></div>}
                    {sv.show_learn_more && <div className='p-5 hover:underline'>
                      <LinkComponent href={"/services/" + sv.slug} skipLocaleHandling={false} locale={""}>{tranlsate("learn_more", locale)}</LinkComponent></div>}
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
