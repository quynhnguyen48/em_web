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
}) => {
  const data = await new ServiceApi().findOne(params!.slug);
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
        <title>Keep moving</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="CHO CUỘC SỐNG TRỌN VẸN" message="ECHO MEDI mang đến cho các thành viên dịch vụ chăm sóc sức khoẻ đồng bộ và toàn diện mọi lúc, mọi nơi.

Các thành viên của ECHO MEDI được theo sát và thiết kế dịch vụ chăm sóc sức khoẻ tổng quát tối ưu bởi đội ngũ tư vấn sức khoẻ cùng các chuyên gia y tế. Chính vì thế, bạn có thể yên tâm uỷ thác sức khoẻ của mình cho chúng tôi." />
      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      <Portfolio />
      <Packages />
      <Contact />
    </>
  );
};

export default Blog;
