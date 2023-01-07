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
import LinkComponent from "../../components/Link";
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

            {/* <Slider slides={SliderData} />
      <Instagram /> */}
            {/* <SmallHero heading={locale === "en" ? "About ECHO MEDI" : "Về ECHO MEDI"} image_url="https://echomedi.com/wp-content/uploads/2022/09/ChungToiMangLaiGi-scaled.jpg" message={""} sub_message={[]}/> */}
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/6-cach-giup-phong-ngua-suy-yeu-co-tim/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://echomedi.com/wp-content/uploads/2022/11/woman-taking-online-yoga-lesso-5392-7817-1667899804.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">				6 Cách Giúp Phòng Ngừa Suy Yếu Cơ Tim			</div>
                        <p className="text-gray-700 text-base">
                            Kiểm soát huyết áp, duy trì trọng lượng cơ thể, ăn uống lành mạnh, tập thể dục để giúp ngăn ngừa suy yếu cơ tim. Bệnh cơ tim là một dạng của suy tim. Một số thay đổi lối sống như ăn uống lành mạnh, tập thể dục có thể giúp ngăn ngừa suy yếu...
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            {/* <Portfolio /> */}
            {/* <Packages /> */}
            <Contact />
        </>
    );
};

export default Home;
