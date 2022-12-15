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

const api_endpoint = "http://localhost:1337";

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

// export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
//   const json = await new PackagesApi().getAll();
//   const blogs = json;
//   let paths = blogs.map((v: any) => ({
//     params: { slug: v.slug }, locale: "en"
//   }));
//   paths = paths.concat(blogs.map((v: any) => ({
//     params: { slug: v.slug }, locale: "vi"
//   })));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
//   params,
//   locale
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
// };

export const getServerSideProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
  locale,
}) => {
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
}

const Blog = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <>
      <Head>
        <title>Keep moving</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading={props.label} message={props.desc} />
      {/* <div className="pb-8 relative h-96">
        <img src={api_endpoint +  props.image_url} alt="me" className='object-cover w-full h-full h-48 relative'/>
      </div> */}
      {/* <div className='grid grid-cols-1 mx-60'>
        <h1 className="capitalize text-center text-2xl font-semibold mb-4">{props.label}</h1>
        <h1 className="capitalize text-center text-xl font-semibold">{props.desc}</h1>
      </div> */}
      {props.sub_packages?.map((sp: any) =>
        // <div>
        //   <h1>{sp.label}</h1>
        //   <img src={"http://localhost:1337" + sp.image.url} />
        //   {sp.services.map((sv: any) => <h1>{sv.label}</h1>)}
        // </div>)}

<div className="max-w-[1240px] mx-auto py-16 text-center">
      <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
             <p className='text-center text-2xl font-semibold'>{sp.label}</p>
           {sp.image && <img
             className='p-10'
             src={api_endpoint + sp.image?.url}
             sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw" alt='me' />}
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
           {sp.services.map((sv: any) => <Accordion title={sv.label} content={
           <div>
           <p>{sv.desc}</p>
           <div className='columns-3'>
           {sv.price && <p className='font-bold p-5'>{numberWithCommas(sv.price)}<span className='underline'>đ</span></p>}
           {sv.show_buy_btn && <div className='p-5'><button>{tranlsate("buy_now", locale)}</button></div>}
           {sv.show_learn_more && <div className='p-5'><a href={"/services/" + sv.slug}>{tranlsate("learn_more", locale)}</a></div>}
           </div>
           </div>
           } />)}
        </div>
        
      </div>
    </div>
      // <div className="grid grid-cols-1 gap-4 md:grid-cols-2 relative text-xl mx-60">
      //   <div className='p-10 pr-0 '>
      //     <p className='text-center text-2xl font-semibold'>{sp.label}</p>
      //     {sp.image && <img
      //       className='p-10'
      //       src={api_endpoint + sp.image?.url}
      //       sizes="(max-width: 768px) 100vw,
      //         (max-width: 1200px) 50vw,
      //         33vw" alt='me' />}
      //   </div>
      //   <div className='relative p-20 pl-0'>
      //   {sp.services.map((sv: any) => <Accordion title={sv.label} content={
      //     <div>
      //     <p>{sv.desc}</p>
      //     <div className='columns-3'>
      //     {sv.price && <p className='font-bold p-5'>{numberWithCommas(sv.price)}<span className='underline'>đ</span></p>}
      //     {sv.show_buy_btn && <div className='p-5'><button>{tranlsate("buy_now", locale)}</button></div>}
      //     {sv.show_learn_more && <div className='p-5'><a href={"/services/" + sv.slug}>{tranlsate("learn_more", locale)}</a></div>}
      //     </div>
      //     </div>
      //     } />)}
      //   </div>
      // </div>
      )}
      <Portfolio />
      <Packages />
      <Contact />
    </>
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Blog;
