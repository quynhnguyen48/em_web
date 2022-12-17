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

type IBlogUrl = {
  slug: string;
  label: string;
  desc: string;
  image_url: string;
  medicines: any;
  price: any;
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
//   const data = await new ProductApi().findOne(slug);
//   return {
//     props: data ? {
//       slug: data.slug,
//       label: data.label,
//       desc: data.desc,
//       image_url: data.image_url,
//       medicines: data.medicines,
//     } :
//     {
//       slug: "",
//       label: "",
//       desc: "",
//       image_url: "",
//       medicines: [],
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
  const data = await new ProductApi().findOne(slug);
  return {
    props: data ? {
      slug: data.slug,
      label: data.label,
      desc: data.desc,
      image_url: data.image_url,
      medicines: data.medicines,
      price: data.price,
    } :
    {
      slug: "",
      label: "",
      desc: "",
      image_url: "",
      medicines: [],
      price: 0,
    },
  };
}

const Product = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{props.label}</title>
        <meta
          name="description"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading={props.label} message={props.desc} image_url={"http://54.91.167.122:1337" + props.image_url} />
      <div className="max-w-[1240px] mx-auto py-16 text-left">
      <p className='text-3xl text-right'>{numberWithCommas(props.price)}đ</p>
      </div>
      {
          props.medicines?.map((m:any) => <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <img className='m-auto' width={400} src={"http://54.91.167.122:1337" + m.image.url} />
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className='font-bold text-xl mb-2'>{m.label}</p>
            <p>{m.desc}</p>
          </div>
        </div>)
        }
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