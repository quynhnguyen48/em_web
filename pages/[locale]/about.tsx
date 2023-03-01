import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import { SliderData } from "../../components/Slider/SliderData";
import Instagram from "../../components/InstagramGallery/Instagram";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Packages from "../../components/Packages/Packages";
import { useRouter } from 'next/router';
import Link from "next/link";
import SmallHero from "../../components/Hero/SmallHero";
import { makeStaticProps } from '../../lib/getStatic';
const getStaticProps = makeStaticProps(['common', 'footer'])
const getStaticPaths = () => ({
  fallback: false,
  paths: [{
    params: {
      locale: 'en',
      slug: "test",
      label: "test2",
    }
  },
  {
    params: {
      locale: 'vi',
      slug: "test",
      label: "test2",
    }
  }],
})
export { getStaticPaths, getStaticProps }

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
  const router = useRouter()
  const locale = router.query.locale as string || 'en';

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

      <img
        style={{
          height: "300px",
          width: "100%",
          // marginTop: "100px",
          objectFit: "cover",
        }}
        src={"https://api.echomedi.com/uploads/riccardo_pelati_Cg7v_Tw3bs_unsplash_2_ffbfb79f45.jpg?updated_at=2023-01-07T04:14:27.305Z"}
      />
      <div className="max-w-[1240px] mx-auto p-4 text-left">
        <p className="text-3xl text-center mt-4">{locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"}</p>
        {locale === "vi" && <p className="mb-4 text-center mt-4 font-bold text-xl text-green-800">ECHO MEDI - Hệ thống y tế toàn diện cho bạn và gia đình</p>}

        {locale === "vi" ? <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-4 text-justify">
            {/* {locale === "vi" && <p className="mb-4">ECHO MEDI – Hệ thống Phòng khám + Nhà thuốc cung cấp dịch vụ Bác sĩ gia đình</p>} */}
            {locale === "vi" && <p className="mb-4">ECHO MEDI là hệ thống y tế toàn diện cho bạn và gia đình. Chúng tôi đi đầu tại Việt Nam trong việc nâng cấp mô hình “Bác sĩ gia đình” của các nước tiên tiến trên thế giới. ECHO MEDI tập hợp một đội ngũ các bác sĩ, dược sĩ, điều dưỡng và chuyên gia dinh dưỡng được đào tạo trong và ngoài nước để cùng chăm sóc, theo dõi và nâng cao sức khỏe của mọi khách hàng.</p>}
            {locale === "vi" && <p className="mb-4">Phương châm của chúng tôi là “Phòng bệnh hơn chữa bệnh”!</p>}
            <p className="mb-4">
              {locale === "en" ? "ECHO MEDI’s healthcare system supplements to the current healthcare crisis management." :
                "Chữa bệnh thay vì phòng bệnh thôi vẫn chưa đủ. Chìa khóa để đạt được một cuộc sống đủ đầy chính là xây dựng sức khỏe toàn diện, tức sức khỏe thể chất lẫn tinh thần. ECHO MEDI thấu hiểu những vấn đề đó và mong muốn trở thành một nhân tố tích cực trong hành trình chăm sóc sức khỏe của người Việt Nam."}</p>
            {locale === "vi" && <p className="mb-4">Để thực hiện được mục tiêu trên, hệ thống y tế ECHO MEDI xây dựng các dịch vụ chăm sóc sức khỏe dựa trên bốn nền tảng:</p>}
            {locale === "vi" && <p className="mb-4">1.  Chăm sóc phòng ngừa</p>}
            {locale === "vi" && <p className="mb-4">2.  Điều trị ban đầu</p>}
            {locale === "vi" && <p className="mb-4">3.  Quản lý bệnh mạn tính</p>}
            {locale === "vi" && <p className="mb-4">4.  Chăm sóc sức khỏe toàn diện</p>}
            <p className="mb-4">
              {locale === "en" ? "ECHO MEDI’s four pillars of healthcare system is to utilize a pathogenic and reactive approach, focusing on causes, consequences, diagnosis and treatment of diseases and injuries. We focus proactively on prevention as well as maximizing our members vitality, adopting attitudes and lifestyles that prevent disease, improve health, and enhance their quality of life and sense of wellbeing." :
                "Nhà thuốc ECHO MEDI đảm bảo cung ứng đầy đủ thuốc điều trị, đa dạng sản phẩm làm đẹp, thực phẩm chức năng và chăm sóc sức khỏe toàn diện với nguồn gốc rõ ràng. Các dược sĩ của chúng tôi luôn tư vấn trực tiếp và hướng dẫn khách hàng dùng thuốc an toàn, hợp lý và hiệu quả, đúng với tình trạng sức khỏe của mỗi cá nhân."}</p>
            {locale === "vi" && <p className="mb-4">Khi đến với ECHO MEDI, bạn sẽ quản lý sức khỏe hiệu quả hơn với các quyền lợi sau:</p>}
            {locale === "vi" && <p className="mb-4">●	Đội ngũ chuyên gia y tế luôn đồng hành cùng bạn và gia đình 24/7 – bất cứ đâu trong việc hỗ trợ các nhu cầu chăm sóc sức khỏe.</p>}
            {locale === "vi" && <p className="mb-4">●	Đội ngũ chuyên gia y tế sẽ luôn sẵn sàng hỗ trợ bạn trong việc kết nối với các bác sĩ chuyên khoa và bệnh viện uy tín.</p>}
            {locale === "vi" && <p className="mb-4">●	Hồ sơ sức khỏe điện tử của bạn sẽ luôn được đội ngũ chuyên gia cập nhật thường xuyên.</p>}
            {locale === "vi" && <p className="mb-4">●	Bạn sẽ dễ dàng tiếp cận dịch vụ chăm sóc sức khỏe thông qua lịch hẹn linh hoạt, giờ khám mở rộng với đội ngũ chuyên gia y tế</p>}
            <p className="mb-4">
              {locale === "en" ? "Besides, ECHO MEDI is proud to have a team of experts, doctors, pharmacists and nurses coming from leading domestic and foreign training institutions, for example, Milwaukee-Wisconsin Medical University, Ho Chi Minh City University of Medicine and Pharmacy, Pham Ngoc Thach Medical University, Ton Duc Thang University." :
                "ECHO MEDI tự hào với đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng được đào tạo và làm việc tại các đơn vị hàng đầu trong và ngoài nước: Đại Học Y Khoa Wisconsin (Hoa Kỳ), Đại Học Y Dược TP Hồ Chí Minh, Đại Học Y Khoa Phạm Ngọc Thạch… Bệnh Viện USC (Hoa Kỳ), Bệnh Viện Chợ Rẫy, Bệnh Viện Thống Nhất, Bệnh Viện Nhiệt Đới, Bệnh Viện 115…"}</p>
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
            <div className="flex justify-center">
              <img src={"https://api.echomedi.com/uploads/ce0e70088ab449ea10a5_e95c71e5ec.jpg?updated_at=2023-01-07T04:14:56.849Z"} />
            </div>
          </div>
        </div> :
          <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-4 text-justify">
              {/* {locale === "vi" && <p className="mb-4">ECHO MEDI – Hệ thống Phòng khám + Nhà thuốc cung cấp dịch vụ Bác sĩ gia đình</p>} */}
              {locale === "vi" && <p className="mb-4">ECHO MEDI’s healthcare system supplements to the current healthcare crisis management.</p>}
              {locale === "vi" && <p className="mb-4">ECHO MEDI’s four pillars of healthcare system is to utilize a pathogenic and reactive
approach, focusing on causes, consequences, diagnosis and treatment of diseases and
injuries. We focus proactively on prevention as well as maximizing our members
vitality, adopting attitudes and lifestyles that prevent disease, improve health, and
enhance their quality of life and sense of wellbeing.</p>}
              <p className="mb-4">
              Besides, ECHO MEDI is proud to have a team of experts, doctors, pharmacists and
nurses coming from leading domestic and foreign training institutions, for example,
Milwaukee-Wisconsin Medical University, Ho Chi Minh City University of Medicine
and Pharmacy, Pham Ngoc Thach Medical University, Ton Duc Thang University.</p>
<p className="mb-4 font-bold">ECHO MEDI – Integrated Family Medicine and Pharmaceutical Provider for
You and Your Loved Ones</p>
<p className="mb-4">ECHO MEDI is an integrated healthcare provider. We have evolved the traditional
&quot;Family Doctor&quot; model by bringing together in one place, both online and offline, a
team of healthcare professionals including doctors, pharmacists, nurses, and
nutritionists, trained domestically and abroad to care for, monitor, and improve your
health to enhance your quality of life and sense of wellbeing.</p>
<p className="mb-4">Our philosophy is &quot;Prevention is better than cure&quot;! ECHO MEDI will accompany you
in your healthcare journey.</p>
<p className="mb-4">ECHO MEDI utilises a pathogenic and reactive approach, focusing on causes,
consequences, diagnosis and treatment of diseases and injuries.</p>
<p className="mb-4">To achieve this, ECHO MEDI focus proactively on: preventive care, primary care,
chronic disease management, comprehensive wellness care.</p>
<p className="mb-4">ECHO MEDI’s integrated pharmacy ensures adequate supply of not only medicines
but also beauty products, functional food and nutraceuticals and comprehensive health
care products with clear origins. Our pharmacists will provide advice and guidance to
you on safe, reasonable, and effective medication use, tailored to your individual
health condition.</p>
<p className="mb-4">Visit ECHO MEDI today to manage your health more effectively. ECHO MEDI’s
healthcare professionals will accompany you 24/7, online and offline to take care of
your health and wellbeing.</p>
              
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-10">
            <div className="flex justify-center">
              <img src={"https://api.echomedi.com/uploads/ce0e70088ab449ea10a5_e95c71e5ec.jpg?updated_at=2023-01-07T04:14:56.849Z"} />
            </div>
          </div>
          </div>}
      </div>
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
    </>
  );
};

export default Home;
