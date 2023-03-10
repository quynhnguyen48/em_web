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
            {locale === "vi" && <p className="mb-4">ECHO MEDI là hệ thống y tế toàn diện cho bạn và gia đình. Chúng tôi đi đầu tại Việt Nam trong việc nâng cấp mô hình “Bác sĩ gia đình” của các nước tiên tiến trên thế giới. ECHO MEDI tập hợp một đội ngũ các bác sĩ, dược sĩ, điều dưỡng và chuyên gia dinh dưỡng được đào tạo trong và ngoài nước để cùng chăm sóc, theo dõi và nâng cao sức khỏe của mọi khách hàng.</p>}

            {locale === "vi" && <p className="mb-4">Phương châm của chúng tôi là “Phòng bệnh hơn chữa bệnh”! ECHO MEDI mong muốn trở thành một nhân tố tích cực trong hành trình chăm sóc sức khỏe của người Việt Nam.</p>}

            {locale === "vi" && <p className="mb-4">Để thực hiện được mục tiêu trên, hệ thống y tế ECHO MEDI xây dựng các dịch vụ chăm sóc sức khỏe dựa trên bốn nền tảng: chăm sóc phòng ngừa, điều trị ban đầu, quản lý bệnh mạn tính, chăm sóc sức khỏe toàn diện.</p>}

            {locale === "vi" && <p className="mb-4">Nhà thuốc ECHO MEDI đảm bảo cung ứng đầy đủ thuốc điều trị, đa dạng sản phẩm làm đẹp, thực phẩm chức năng và chăm sóc sức khỏe toàn diện với nguồn gốc rõ ràng. Các dược sĩ của chúng tôi luôn tư vấn trực tiếp và hướng dẫn khách hàng dùng thuốc an toàn, hợp lý và hiệu quả, đúng với tình trạng sức khỏe của mỗi cá nhân.</p>}

            {locale === "vi" && <p className="mb-4">Đến ECHO MEDI ngay hôm nay để quản lý sức khỏe của bạn hiệu quả hơn. Các chuyên gia y tế của ECHO MEDI sẽ đồng hành với bạn 24/7, bất cứ đâu để chăm sóc sức khỏe của bạn.</p>}
            
          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-4">
            <div className="flex justify-center">
              <img src={"https://api.echomedi.com/uploads/ce0e70088ab449ea10a5_e95c71e5ec.jpg?updated_at=2023-01-07T04:14:56.849Z"} />
            </div>
          </div>
        </div> :
          <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-4 text-justify">
              {/* {locale === "vi" && <p className="mb-4">ECHO MEDI – Hệ thống Phòng khám + Nhà thuốc cung cấp dịch vụ Bác sĩ gia đình</p>} */}
              {<p className="mb-4">ECHO MEDI’s healthcare system supplements to the current healthcare crisis management.</p>}
              {<p className="mb-4">ECHO MEDI’s four pillars of healthcare system,  Preventive Care, Primary Care, Chronic Disease Management, and Comprehensive Wellness Care, is to utilize a pathogenic and reactive approach, focusing on causes, consequences, diagnosis and treatment of diseases and injuries. We focus proactively on prevention as well as maximizing our members vitality, adopting attitudes and lifestyles that prevent disease, improve health, and enhance their quality of life and sense of wellbeing.</p>}
              <p className="mb-4">
              Additionally, ECHO MEDI’s integrated pharmacy ensures adequate supply of not only medicines but also beauty products, functional food and nutraceuticals. Our pharmacists will provide advice and guidance to you on safe, reasonable, and effective medication use, personalized to your individual health condition.</p>
<p className="mb-4">As an integrated healthcare provider, we have evolved the traditional "Family Doctor" model by bringing together in one place, both online and offline, a team of healthcare professionals including doctors, pharmacists, nurses, and nutritionists, trained domestically and abroad to care for, monitor, and improve your health to enhance your quality of life and sense of wellbeing.</p>
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 pt-4">
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
