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
        axios.post('http://3.89.245.84:1337' + '/api/packages/contact', {
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
            axios.post('http://3.89.245.84:1337/api/product/addServiceToCart', {
                "service_id": id,
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
                src={"https://echomedi.com/wp-content/uploads/2022/07/pexels-pixabay-161688-1.jpg"}
            />
            <p className="text-3xl mt-5 text-center">{locale == "en" ? "Pharmacy" : "Nhà thuốc"}</p>

            <div className="max-w-[1048px] mx-auto p-4 text-center">

                <div className="grid grid-rows-none md:grid-cols-1 p-4 gap-4">
                    <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 text-justify">
                        <p>{locale == "en" ? "ECHO MEDI offers products and services that help support each person’s unique health journey. Through face-to-face counseling, our pharmacists help drive medication adherence, close gaps in care, and recommend more cost-effective drug therapies." : "ECHO MEDI cung cấp các sản phẩm và dịch vụ phù hợp với nhu cầu sức khỏe riêng biệt của mỗi người. Thông qua tư vấn trực tiếp, các dược sĩ của chúng tôi sẽ đảm bảo thuốc được sử dụng an toàn, hợp lý và hiệu quả, rút ngắn quá trình điều trị và đưa ra nhiều sự lựa chọn thuốc hiệu quả, hợp túi tiền."}</p>
                        <p>{locale == "en" ? "Our standalone pharmacy offer customers convenience and value across a wide assortment of health, wellness, personal care and beauty products, as well as a broader selection of wellness products." : "Nhà thuốc ECHO MEDI không chỉ mang đến cho bạn sự tiện lợi thông qua giá trị gói sản phẩm chăm sóc sức khỏe mà còn cung cấp đa dạng sản phẩm làm đẹp, thực phẩm chức năng và chăm sóc sức khoẻ toàn diện."}</p>
                    </div>
                    <p className="text-2xl mt-5">{locale == "en" ? "Monthly Packages" : "Gói Chăm Sóc Hàng Tháng"}</p>
                </div>

                <div className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 pt-12">
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/products/goi-cham-soc-suc-khoe-cho-tre-em-tuoi-6-12/"}>
                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px]">
                            <img className="h-full w-full absolute object-cover" src="https://echomedi.com/wp-content/uploads/2022/07/TreEm-scaled.jpg" alt="Sunset in the mountains" />
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
                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px]">
                            <img className="h-full w-full absolute object-cover" src="https://echomedi.com/wp-content/uploads/2022/07/group-asia-young-creative-people-smart-casual-wear-smiling-arms-crossed-creative-office-workplace-scaled.jpg" alt="Sunset in the mountains" />
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
                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px]">
                            <img className="h-full w-full absolute object-cover" src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-2022-08-19T101515.001.jpg" alt="Sunset in the mountains" />
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

                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px]">
                            <img className="h-full w-full absolute object-cover" src="https://echomedi.com/wp-content/uploads/2022/07/NuTrungNien-scaled.jpg" alt="Sunset in the mountains" />
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

                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px]">
                            <img className="h-full w-full absolute object-cover" src="https://echomedi.com/wp-content/uploads/2022/07/NamTrungNien-scaled.jpg" alt="Sunset in the mountains" />
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

                        <div className="max-w-sm rounded-[50px] overflow-hidden shadow-lg relative h-[300px]">
                            <img className="h-full w-full absolute object-cover" src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-2022-08-19T101659.998.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/2022/07/pexels-anna-nekrashevich-6604845.jpg" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">
                                {locale == "en" ? "Sleep" : "Ngủ ngon"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-ho-tro-cai-thuoc-la/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://echomedi.com/wp-content/uploads/2022/07/pexels-victor-dompablo-5987483.jpg" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Smoking Cessation" : "Cai thuốc lá"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-ho-tro-giam-can/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://echomedi.com/wp-content/uploads/2022/07/pexels-andres-ayrton-6550832.jpg" alt="Sunset in the mountains" />
                            <div
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #426045 100%)",
                                }}
                                className="px-6 py-4 relative z-10 h-[230px]  flex justify-end flex-col">
                                <div className=" text-lg mb-2 text-white">{locale == "en" ? "Weight Loss" : "Giảm cân"}</div>
                            </div>
                        </div>
                    </LinkComponent>
                    <LinkComponent skipLocaleHandling={undefined} locale={undefined}
                        href={"/products/goi-cham-soc-da-va-ngan-ngua-lao-hoa/"}>
                        <div className="max-w-sm rounded-full overflow-hidden shadow-lg relative h-[230px]">
                            <img className="h-full w-full absolute object-cover" 
                            src="https://echomedi.com/wp-content/uploads/elementor/thumbs/ChamSocDa-scaled-pvzpoq8eqktfhlxiwekhtmzaagt62r080r633b2fko.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/elementor/thumbs/ChamSocToc-scaled-pvzpopakjqs55zyw1w5v957tp2xsv1whomilm13tqw.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/elementor/thumbs/TieuHoa-scaled-pvzpor68xeupt7w5qwz4e4qqvuojag3ycvtkkl11eg.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-2.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-3.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-4.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/elementor/thumbs/TieuHoa-scaled-pvzpor68xeupt7w5qwz4e4qqvuojag3ycvtkkl11eg.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-5.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/2022/07/Untitled-design-6.jpg" alt="Sunset in the mountains" />
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
                            src="https://echomedi.com/wp-content/uploads/elementor/thumbs/ThanKinh-Nao-scaled-pvzpoq8eqktfhlxiwekhtmzaagt62r080r633b2fko.jpg" alt="Sunset in the mountains" />
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