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
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SmallHero from "../../components/Hero/SmallHero";
import { makeStaticProps } from '../../lib/getStatic';
import Accordion from "../../components/Accordion";
import LinkComponent from "../../components/Link";
const notify = () => {
    toast.success('Thành công');
}

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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActive] = useState(-1);
    const router = useRouter()
    const locale = router.query.locale as string || 'en';

    const contact = () => {
        axios.post('https://api.echomedi.me' + '/api/packages/contact', {
            "name": name,
            "email": email,
            "phone_number": phone_number,
            "message": message
        })
            .then(function (response) {
                toast.success('Thành công');
            })
            .catch(function (error) {
            });
    }

    const addToCart = (id: number) => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            axios.post('https://api.echomedi.me/api/product/addServiceToCart', {
                "service_id": id,
                "quantity" : 1,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(function (response) {
                    toast.success('Thêm vào giỏ hàng thành công');
                    router.push("/cart", "/cart", { locale });
                    let el = document.getElementById('num-of-item');
                    if (el) {
                        el.innerText = (parseInt(el.innerText) + 1).toString();;
                    }
                })
                .catch(function (error) {
                    toast.error("Thêm vào giỏ hàng thất bại")
                });
        } else {
            toast.success('Vui lòng đăng nhập.');
            router.push("/login", "/login", { locale });
        }
    }

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

            <img
                style={{
                    height: "300px",
                    width: "100%",
                    // marginTop: "100px",
                    objectFit: "cover",
                }}
                src={"https://api.echomedi.me/uploads/Untitled_design_7_24962e0c2a.jpg?updated_at=2023-01-07T04:13:45.086Z"}
            />
            <p className="text-3xl mt-5 text-center">{locale == "en" ? "Pharmacy" : "Nhà thuốc"}</p>

            <div className="max-w-[1048px] mx-auto p-4 text-center">

                <div className="">
                    <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 text-justify">
                        <p>{locale == "en" ? "ECHO MEDI offers products and services that help support each person’s unique health journey. Through face-to-face counseling, our pharmacists help drive medication adherence, close gaps in care, and recommend more cost-effective drug therapies." : "ECHO MEDI cung cấp các sản phẩm và dịch vụ phù hợp với nhu cầu sức khỏe riêng biệt của mỗi người. Thông qua tư vấn trực tiếp, các dược sĩ của chúng tôi sẽ đảm bảo thuốc được sử dụng an toàn, hợp lý và hiệu quả, rút ngắn quá trình điều trị và đưa ra nhiều sự lựa chọn thuốc hiệu quả, hợp túi tiền."}</p>
                        <p>{locale == "en" ? "Our standalone pharmacy offer customers convenience and value across a wide assortment of health, wellness, personal care and beauty products, as well as a broader selection of wellness products." : "Nhà thuốc ECHO MEDI không chỉ mang đến cho bạn sự tiện lợi thông qua giá trị gói sản phẩm chăm sóc sức khỏe mà còn cung cấp đa dạng sản phẩm làm đẹp, thực phẩm chức năng và chăm sóc sức khoẻ toàn diện."}</p>
                    </div>
                    <p className="text-2xl mt-5">{locale == "en" ? "Monthly Packages" : "Gói Chăm Sóc Hàng Tháng"}</p>
                </div>

                <div className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 pt-12">
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-tre-em-tuoi-6-12/"}>
                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px] m-auto">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Tre_Em_scaled_1_52d1b92214.jpg?updated_at=2023-01-07T04:22:37.067Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[300px]  flex justify-end flex-col">
                                <div className="text-xl mb-2 text-white">
                                    <p>{locale == "en" ? "Child" : "Trẻ em"}</p>
                                    <p>(6 - 12)</p>
                                </div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19/"}>
                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px] m-auto">
                            <img className="h-full w-full absolute object-cover" src="https://api.echomedi.me/uploads/group_asia_young_creative_people_smart_casual_wear_smiling_arms_crossed_creative_office_workplace_scaled_db80cdeb97.jpg?updated_at=2023-01-07T04:23:04.101Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[300px]  flex justify-end flex-col">
                                <div className=" text-xl mb-2 text-white">
                                    <p>{locale == "en" ? "Teenager" : "Thanh thiếu niên"}</p>
                                    <p>(13 - 19)</p>
                                </div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-thanh-thieu-nien-tuoi-13-19/"}>
                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px] m-auto">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_2022_08_19_T101515_001_1_882275f713.jpg?updated_at=2023-01-07T04:28:36.793Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[300px]  flex justify-end flex-col">
                                <div className=" text-xl mb-2 text-white">
                                    <p>{locale == "en" ? "Adult" : "Người trưởng thành"}</p>
                                    <p>(18 - 45)</p>
                                </div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-nu-gioi-do-tuoi-trung-nien-tuoi-45/"}>

                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px] m-auto">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Nu_Trung_Nien_scaled_1_1c0c47b208.jpg?updated_at=2023-01-07T04:29:03.583Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[300px]  flex justify-end flex-col">
                                <div className=" text-xl mb-2 text-white">
                                    <p>{locale == "en" ? "Middle-aged Woman" : "Nữ trung niên"}</p>
                                    <p>(45+)</p>
                                </div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-nam-gioi-do-tuoi-trung-nien-tuoi-45/"}>

                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px] m-auto">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Nam_Trung_Nien_scaled_1_d1d0f6df8b.jpg?updated_at=2023-01-07T04:29:26.654Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[300px]  flex justify-end flex-col">
                                <div className=" text-xl mb-2 text-white">
                                    <p>{locale == "en" ? "Middle-aged Man" : "Nam trung niên"}</p>
                                    <p>(45+)</p>
                                </div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-nguoi-lon-tuoi-tuoi-60/"}>

                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px] m-auto">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_2022_08_19_T101659_998_1_dab66d8897.jpg?updated_at=2023-01-07T04:29:51.952Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[300px]  flex justify-end flex-col">
                                <div className=" text-xl mb-2 text-white">
                                    <p>{locale == "en" ? "Elderly" : "Người lớn tuổi"}</p>
                                    <p>(60+)</p>
                                </div>
                            </div>
                        </div>
                    </LinkComponent>

                </div>
                <p className="text-2xl mt-10">{locale == "en" ? "Monthly Packages" : "Dựa Trên Vấn Đề Sức Khỏe"}</p>
                <div className="grid grid-rows-none md:grid-cols-4 p-4 gap-4 pt-12">
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-ho-tro-giac-ngu/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/pexels_anna_nekrashevich_6604845_1_50a33e0e4b.jpg?updated_at=2023-01-07T04:30:11.607Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">
                                {locale == "en" ? "Sleep" : "Ngủ Ngon"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-ho-tro-cai-thuoc-la/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/pexels_victor_dompablo_5987483_1_6581fe8c56.jpg?updated_at=2023-01-07T04:30:46.194Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Smoking Cessation" : "Cai Thuốc lá"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-ho-tro-giam-can/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/pexels_andres_ayrton_6550832_1_374e48ace6.jpg?updated_at=2023-01-07T04:31:05.116Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Weight Loss" : "Giảm Cân"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Cham_Soc_Da_scaled_pvzpoq8eqktfhlxiwekhtmzaagt62r080r633b2fko_c174abcfbe.jpg?updated_at=2023-01-07T04:31:41.546Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Skin Care & Anti-aging" : "Chăm sóc da"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-cham-soc-va-phuc-hoi-toc-mong/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Cham_Soc_Toc_scaled_pvzpopakjqs55zyw1w5v957tp2xsv1whomilm13tqw_403804b315.jpg?updated_at=2023-01-07T04:31:59.982Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Hair & Nails Treatment" : "Chăm Sóc Tóc & Móng"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-cham-soc-suc-khoe-cho-phu-nu-mang-thai/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Tieu_Hoa_scaled_pvzpor68xeupt7w5qwz4e4qqvuojag3ycvtkkl11eg_952c000f7b.jpg?updated_at=2023-01-07T04:32:16.881Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Pregnancy Care" : "Mang thai"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-suc-khoe-sinh-ly-nam/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_2_1_2cdb30587f.jpg?updated_at=2023-01-07T04:32:41.436Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Men Sexual Health" : "Sinh lý nam"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-suc-khoe-sinh-ly-nu/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_3_1_c76664bbdc.jpg?updated_at=2023-01-07T04:33:02.501Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Women Sexual Health" : "Sinh lý nữ"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-ho-tro-suc-khoe-tim-mach/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_4_1_ff8bb621b2.jpg?updated_at=2023-01-07T04:33:20.962Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Heart & Blood Circulation" : "Tim mạch"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-suc-khoe-sinh-ly-nam/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Tieu_Hoa_scaled_pvzpor68xeupt7w5qwz4e4qqvuojag3ycvtkkl11eg_952c000f7b.jpg?updated_at=2023-01-07T04:32:16.881Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Digestive System" : "Tiêu hoá"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-phong-ngua-benh-xuong-khop/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_5_1_3239dc73a0.jpg?updated_at=2023-01-07T04:33:59.383Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Bone & Joint Health" : "Xương khớp"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-tang-suc-de-khoang-va-mien-dich/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Untitled_design_6_1_4dc08fd0db.jpg?updated_at=2023-01-07T04:34:15.831Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Immune System" : "Đề kháng và miễn dịch"}</div>
                            </div>
                        </div>
                    </LinkComponent>

                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-cai-thien-tri-nao/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://api.echomedi.me/uploads/Than_Kinh_Nao_scaled_pvzpoq8eqktfhlxiwekhtmzaagt62r080r633b2fko_357f43bfb5.jpg?updated_at=2023-01-07T04:34:38.081Z" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Brain Health" : "Thần Kinh - Não"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                </div>
            </div>
            {/* <Portfolio /> */}
            {/* <Packages /> */}
            <Contact />
            <Toaster
                position="bottom-center"
            />
        </>
    );
};

export default Home;
