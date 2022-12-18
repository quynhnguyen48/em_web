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
import Link from "next/link";

const tranlsate = (term: string, locale: string) => {
  if (locale === "en") {
    switch (term) {
      case "contact_info":
        return "Contact Information";
      case "become_a_member":
        return "Become a member";
      case "gifting":
        return "Gifting";
    }
  } else {
    switch (term) {
      case "contact_info":
        return "Thông Tin Liên Hệ";
      case "become_a_member":
        return "Trở Thành Thành Viên";
      case "gifting":
        return "Quà tặng";
    }
  }
}

const Home: NextPage = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <>
      <Head>
        <title>ECHO MEDI</title>
        <meta
          name="ECHO MEDI"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon1.png" />
      </Head>

      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      <Hero heading={locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"} message={""} sub_message={[]}/>
      <div className="max-w-[1240px] mx-auto p-4 text-left">
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
            <p className="mb-4">
              {locale === "en" ? "ECHO MEDI’s healthcare system supplements to the current healthcare crisis management." : "Hệ thống y tế ECHO MEDI bổ sung cho những phương pháp chăm sóc sức khoẻ truyền thống hiện nay thông qua bốn nền tảng: chăm sóc phòng ngừa, điều trị ban đầu, quản lý bệnh mạn tính và sức khoẻ toàn diện."}</p>
            <p className="mb-4">
              {locale === "en" ? "ECHO MEDI’s four pillars of healthcare system is to utilize a pathogenic and reactive approach, focusing on causes, consequences, diagnosis and treatment of diseases and injuries. We focus proactively on prevention as well as maximizing our members vitality, adopting attitudes and lifestyles that prevent disease, improve health, and enhance their quality of life and sense of wellbeing." : "Chúng tôi đặc biệt đề cao việc phòng ngừa và tối ưu chất lượng cuộc sống cho các thành viên, góp phần thay đổi tư duy và áp dụng lối sống lành mạnh để ngăn ngừa bệnh tật, cải thiện sức khoẻ thể chất và tinh thần, hướng tới một sức khoẻ toàn diện."}</p>
            <p className="mb-4">
              {locale === "en" ? "Besides, ECHO MEDI is proud to have a team of experts, doctors, pharmacists and nurses coming from leading domestic and foreign training institutions, for example, Milwaukee-Wisconsin Medical University, Ho Chi Minh City University of Medicine and Pharmacy, Pham Ngoc Thach Medical University, Ton Duc Thang University." :
              "ECHO MEDI tự hào với đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng được đào tạo và làm việc tại các đơn vị hàng đầu trong và ngoài nước: Đại Học Y Khoa Wisconsin (Hoa Kỳ), Đại Học Y Dược TP Hồ Chí Minh, Đại Học Y Khoa Phạm Ngọc Thạch,… Bệnh Viện USC (Hoa Kỳ), Bệnh Viện Chợ Rẫy, Bệnh Viện Thống Nhất, Bệnh Viện Nhiệt Đới, Bệnh Viện 115…"}</p>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
            <div className="flex justify-center">
              <img src={"https://echomedi.com/wp-content/uploads/2022/07/ce0e70088ab449ea10a5.jpg"} />
            </div>
          </div>
        </div>
      </div>
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
    </>
  );
};

export default Home;
