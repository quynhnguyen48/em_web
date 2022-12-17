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

type IBlogUrl = {
  slug: string;
  label: string;
  desc: string;
  detail: string;
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
      slug: data.slug,
      label: data.label,
      desc: data.desc,
      detail: data.detail,
    } :
    {
      slug: "",
      label: "",
      desc: "",
      detail: "",
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <Hero heading={props.label} message={props.desc} />
      <div className="max-w-[1240px] mx-auto py-16 text-left">
          <ReactMarkdown children={props.detail} />
      </div>
      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
    </>
  );
};

export default Blog;
