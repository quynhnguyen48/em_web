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
import { useSwiper } from 'swiper/react';
import LinkComponent from "../../components/Link";
import SwiperCore, { Autoplay } from 'swiper';
import SliderGift from "../../components/Slider/SliderGift";

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

SwiperCore.use([Autoplay]);

const Home: NextPage = () => {
    const [name, setName] = useState("");
    const [o1, setO1] = useState(-1);
    const [o2, setO2] = useState(-1);
    const [phone_number, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [option, setOption] = useState("1");
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
            <SmallHero heading={locale === "en" ? "Gifting" : "G???i qu??"} message={""} sub_message={[]} image_url={"https://api.echomedi.com/uploads/101534_ecdac8cf7e.jpg?updated_at=2023-01-09T03:01:38.756Z"} />
            <div className="max-w-[1240px] mx-auto p-4 text-center">
                <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4 pt-12">
                    <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
                        <p className='text-center text-green-800 text-3xl font-bold mb-4'>{locale === "en" ? "Give Love" : "Trao Y??u Th????ng"}</p>
                        <p className='text-center text-green-800 text-2xl font-medium mb-4'>{locale === "en" ? "Wellness Delivered" : "T???ng S???c Kh???e"}</p>
                        <p className='text-center text-xl font-medium mb-4'>{locale === "en" ? "Members receive on-demand access to a full spectrum of concierge medical services" : "Th??nh vi??n ???????c ti???p c???n ?????y ????? c??c d???ch v??? tr??? gi??p y t??? ?????c bi???t, ph?? h???p v???i y??u c???u t???ng c?? nh??n"}</p>
                        <div className="flex space-x-2 justify-center">
                            <a
                            href="#send-gift"
                            style={{
                                backgroundColor: "#416045",
                                color: "white",
                              }}
                                // onClick={contact}
                                type="button" className="inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out bg-green-200 text-black rounded-full">
                                {locale === "en" ? "Send gift" : "G???i qu??"}</a>
                        </div>
                    </div>
                    <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
                        <img src="https://api.echomedi.com/uploads/Untitled_design_2022_08_08_T073025_967_scaled_8560afaf92.jpg?updated_at=2023-01-07T04:17:40.670Z" />

                    </div>
                </div>
                <SliderGift slides={SliderData} />
                <div className="pt-10" id="send-gift">
                    <div className="p-10 bg-green-100 max-w-[500px] m-auto">
                        <p className="text-3xl">{locale === "en" ? "Give a Gift" : "Trao m??n qu??"}</p>
                        <p className="mt-4">{locale === "en" ? "Give a Gift" : "????ng k?? g???i qu?? ????? ???????c ECHO MEDI t?? v???n c??? th???."}</p>
                        <div className="max-w-[500px] h-full col-span-2 md:col-span-1 row-span-2 pt-10 m-auto">
                            <div className="flex justify-center">
                                <div className="mb-3 w-full text-left">
                                    <p className="text-left">{locale === "en" ? "Who's the gift for?" : "Th??ng tin ng?????i nh???n m??n qu?? s???c kh???e n??y?"}</p>
                                    <input
                                        type="text"
                                        className="
                    form-control
                    mt-3
                    mb-3
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                                        id="exampleFormControlInput1"
                                        placeholder={locale === "en" ? "Your name" : "T??n c???a b???n"}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <input
                                        type="text"
                                        className="
                    form-control
                    mt-3
                    mb-3
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                                        id="exampleFormControlInput1"
                                        placeholder={locale === "en" ? "Your email" : "Email c???a b???n"}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <input
                                        type="text"
                                        className="
                    form-control
                    mt-3
                    mb-3
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                                        id="exampleFormControlInput1"
                                        placeholder={locale === "en" ? "Your phone number" : "S??? ??i???n tho???i c???a b???n"}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <input
                                        type="text"
                                        className="
                    form-control
                    mt-3
                    mb-3
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                                        id="exampleFormControlInput1"
                                        placeholder={locale === "en" ? "Your name" : "T??n ng?????i th??n c???a b???n"}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <input
                                        type="text"
                                        className="
                    form-control
                    mt-3
                    mb-3
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                                        id="exampleFormControlInput1"
                                        placeholder={locale === "en" ? "Your address" : "?????a ch??? c???a b???n"}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <p className="font-semibold mt-5">
                                        {locale == "en" ? "Choose your packages" : "Ch???n g??i kh??m ph?? h???p v???i ng?????i nh???n"}</p>
                                    <div className="form-control
                    mb-3
                    block
                    w-full
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <select 
                onChange={e => {
                    setOption(e.target.value);
                }}
                className="px-3 w-full
                    py-1.5">
                  <option value={1}>{locale == "en" ? "For Dad/ Grandpa" : "D??nh T???ng B???/ ??ng"}</option>
                  <option value={2}>{locale == "en" ? "For Mom/ Grandma" : "D??nh T???ng M???/ B??"}</option>
                  <option value={3}>{locale == "en" ? "For Siblings/ Relatives" : "D??nh T???ng Anh, Ch???, Em / H??? H??ng"}</option>
                  <option value={4}>{locale == "en" ? "For Corporate/ Employees" : "D??nh T???ng Doanh Nghi???p/ Nh??n Vi??n"}</option>
                  <option value={5}>{locale == "en" ? "For Membership" : "D??nh T???ng Th??nh Vi??n"}</option>
                </select>
              </div>
                                    <p className="font-semibold">{locale == "en" ? "Choose your Gifting packages" : "Ch???n g??i kh??m mu???n d??nh t???ng"}</p>
                                    {(option == "1" || option == "2" || option == "3" || option == "4") && <div>
                                        <input checked={o1 == 1} onClick={e => setO1(1)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>
                                            {locale == "en" ? "General Healthcare" :"G??i Kh??m S???c Kh???e T???ng Qu??t"}
                                        </span>
                                    </div>}
                                    {(option == "1" || option == "3") && <div>
                                        <input checked={o1 == 2} onClick={e => setO1(2)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>
                                            {locale == "en" ? "Men's Health Care" :"G??i Kh??m S???c Kh???e T???ng Qu??t D??nh Cho Nam Gi???i"}
                                            </span>
                                    </div>}
                                    {(option == "2" || option == "3") && <div>
                                        <input checked={o1 == 3} onClick={e => setO1(3)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>
                                            {locale == "en" ? "Women's Health Care" :" G??i Kh??m S???c Kh???e T???ng Qu??t D??nh Cho Ph??? N???"}
                                            </span>
                                    </div>}
                                    {(option == "1" || option == "2") && <div>
                                        <input checked={o1 == 4} onClick={e => setO1(4)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                            {locale == "en" ? "Hypertension Management" :"G??i Qu???n L?? Ngo???i Tr?? B???nh T??ng Huy???t ??p"}
                                            </span>
                                    </div>}
                                    {(option == "1" || option == "2") && <div>
                                        <input checked={o1 == 5} onClick={e => setO1(5)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                            {locale == "en" ? "Diabetes" :"G??i Qu???n L?? Ngo???i Tr?? B???nh ????i Th??o ???????ng"}
                                            </span>
                                    </div>}
                                    {(option == "3") && <div>
                                        <input checked={o1 == 6} onClick={e => setO1(6)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                            {locale == "en" ? "Reproductive Health Screening" :" T???m So??t S???c Kh???e Sinh S???n"}
                                            </span>
                                    </div>}
                                    {(option == "4") && <div>
                                        <input checked={o1 == 7} onClick={e => setO1(7)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                            {locale == "en" ? "Post COVID-19" :"G??i Kh??m S???c Kh???e H???u COVID-19"}
                                            </span>
                                    </div>}
                                    {(option == "4") && <div>
                                        <input checked={o1 == 8} onClick={e => setO1(8)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                            {locale == "en" ? "Musculoskeletal Screening" :"T???m So??t B???nh L?? C?? X????ng Kh???p"}
                                            </span>
                                    </div>}
                                    <p className="font-semibold mt-5">
                                        {locale == "en" ? "Add-on package" : "G??i kh??m b??? sung"}</p>
                                    {(option == "1" || option == "4") && <div>
                                        <input checked={o2 == 1} onClick={e => setO2(1)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                           {locale =="en" ? " Smoking Cessation Program" : "Ch????ng Tr??nh Cai Thu???c L??"}</span>
                                    </div>}
                                    {(option == "2" || option == "4") && <div>
                                        <input checked={o2 == 2} onClick={e => setO2(2)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                           {locale =="en" ? "Mental Wellbeing" : "S???c Kh???e Tinh Th???n"}</span>
                                    </div>}
                                    {(option == "1" || option == "2" || option == "3" || option == "4") && <div>
                                        <input checked={o2 == 3} onClick={e => setO2(3)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span> 
                                            {locale == "en" ? "Weight Management" : "Qu???n L?? C??n N???ng"}</span>
                                    </div>}
                                    {(option == "1") && <div>
                                        <input checked={o2 == 4} onClick={e => setO2(4)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>  
                                        {locale == "en" ? "Heart Health Program" : "Ch????ng Tr??nh S???c Kh???e Tim M???ch"}</span>
                                    </div>}
                                    {(option == "2") && <div>
                                        <input checked={o2 == 5} onClick={e => setO2(5)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>  
                                        {locale == "en" ? "Hormonal Health" : "S???c Kh???e N???i Ti???t T???"}</span>
                                    </div>}
                                    {(option == "3") && <div>
                                        <input checked={o2 == 6} onClick={e => setO1(6)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>  
                                        {locale == "en" ? "Metabolism And Heart Health" : "Kh??? N??ng Trao ?????i Ch???t V?? S???c Kh???e Tim M???ch"}</span>
                                    </div>}
                                    {(option == "3") && <div>
                                        <input checked={o2 == 7} onClick={e => setO1(7)} type="checkbox" className="mr-2 inline border-gray-300 rounded h-4 w-4" /><span>  
                                        {locale == "en" ? "Skincare And Anti-aging Therapy" : "Ch??m S??c Da V?? Ng??n Ng???a L??o H??a"}</span>
                                    </div>}
                                    <div className="mt-5">
                                        <p>{locale == "en" ? "What message would you like to include?" : "Th??ng ??i???p b???n mu???n nh???n nh??? ?????n ng?????i nh???n?"}</p>
                                        <textarea className="w-full h-32" />
                                    </div>
                                    <div className="mt-10 mb-4 inline-block px-6 py-2.5 text-white font-semibold text-sm leading-tight uppercase rounded shadow-md hover:bg-emgreen hover:shadow-lg focus:bg-emgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out bg-emgreen text-white rounded">
                                        <LinkComponent href={"/insight"} locale="" skipLocaleHandling={false}>
                                            {locale == "en" ? "Send gift" : "G???i qu??"}</LinkComponent>
                                    </div>
                                </div>
                            </div></div></div>
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
