import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Contact from '../../components/Contact/Contact';
import SmallHero from '../../components/Hero/SmallHero';
import Head from "next/head";
import LinkComponent from '../../components/Link';
import { makeStaticProps } from '../../lib/getStatic';
import { getMedicalRecords } from '../../services/api/medicalRecord';

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


const Order = () => {
    const router = useRouter()
    const { code } = router.query;
    const [data, setData] = useState({ status: "" });
    const locale = router.query.locale as string || 'vi';
    const [cartLines, setCartLines] = useState([]);
    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let filter = {
            patient: 1,
          }
        setLoading(true);
        const res = await getMedicalRecords({ pageSize: 1000 }, filter);
        console.log('res,', res)
    }


    return <>
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
        <div className="container mx-auto mt-10 bg-green-100">
            <div className="flex shadow-md my-10 ">
                <div className="w-4/4 sm:w-3/4 bg-green-100 px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <p className="font-semibold text-xl">{locale === "en" ? "Order history" : "Lịch sử đặt hàng"}</p>
                        {/* <h2 className="font-semibold text-2xl">3 Items</h2> */}
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">{locale === "en" ? "Product Details" : "Chi tiết đơn hàng"}</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">{locale === "en" ? "Create Date" : "Ngày đặt"}</h3>
                        {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Quantity" : "Số lượng"}</h3> */}
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Total amount" : "Tổng cộng"}</h3>
                        {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Total" : "Tổng cộng"}</h3> */}
                    </div>
                    {orders.map((line: any) =>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="flex flex-col justify-between flex-grow">
                                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/order_detail/?code=" + line.code}>
                                        <span className="font-bold text-sm">{line.code}</span>
                                        <p className="font-bold text-sm">Số món hàng {line.num_of_prod}</p>
                                    </LinkComponent>
                                </div>
                            </div>
                            <p>{line.publishedAt.substring(0, 10)}</p>
                            {/* <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>

        <input className="mx-2 border text-center w-8" type="text" value="1"/>

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>
      </div> */}
                            {/* {lines.map((line:any) => 
      <span className="text-center w-1/5 font-semibold text-sm">{line.product.price}</span>
        )} */}
                            {/* <span className="text-center w-1/5 font-semibold text-sm">{numberWithCommas(line.product ? line.product.price : line.service.price)}đ</span> */}
                        </div>)}

                    {/* <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt=""/>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">Skincare & Anti-Aging Package</span>
          <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>

        <input className="mx-2 border text-center w-8" type="text" value="1"/>

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">354.000đ</span>
      <span className="text-center w-1/5 font-semibold text-sm">354.000đ</span>
    </div>

    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt=""/>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">Pregnancy Care Package</span>
          <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>
        <input className="mx-2 border text-center w-8" type="text" value="1"/>

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">2.354.000đ</span>
      <span className="text-center w-1/5 font-semibold text-sm">2.354.000đ</span>
    </div> */}
                </div>


            </div>

        </div>
        <Contact />
    </>
}

export default Order

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getDisplayedStatus(x: string) {
    switch (x) {
        case "draft":
            return "Chưa thanh toán";
        case "ordered":
            return "Đã thanh toán";
    }
}