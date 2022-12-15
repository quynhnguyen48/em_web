import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Packages from "../components/Packages/Packages";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <>
      <Head>
        <title>ECHO MEDI</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
      heading={locale === "en" ? "LIVE A FULL LIFE" : "CHO CUỘC SỐNG TRỌN VẸN"} 
      message={locale === "en" ? "ECHO MEDI provides its members with a first-class, on-demand, comprehensive healthcare and wellbeing experience, anytime, anywhere. ECHO MEDI members have immediate access to our healthcare professionals and wellness care team, allowing us to deliver the ultimate wellbeing to members whom we know personally and to whom we hold ourselves accountable to every single member, so members can rest assure to entrust their health to us." 
      :"ECHO MEDI mang đến cho các thành viên dịch vụ chăm sóc sức khoẻ đồng bộ và toàn diện mọi lúc, mọi nơi. Các thành viên của ECHO MEDI được theo sát và thiết kế dịch vụ chăm sóc sức khoẻ tổng quát tối ưu bởi đội ngũ tư vấn sức khoẻ cùng các chuyên gia y tế. Chính vì thế, bạn có thể yên tâm uỷ thác sức khoẻ của mình cho chúng tôi."} />
      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      <Portfolio />
      <Packages />
      <Contact />
    </>
  );
};

export default Home;
