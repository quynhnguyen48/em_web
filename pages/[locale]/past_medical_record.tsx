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
import { getMe } from '../../services/api/users';

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
    const [data, setData] = useState([]);
    const locale = router.query.locale as string || 'vi';
    const [cartLines, setCartLines] = useState([]);
    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let user = JSON.parse(localStorage.getItem('user')!);
        let filter = {
            patient: user.patient.id,
          }
        setLoading(true);
        const res = await getMedicalRecords({ pageSize: 1000 }, filter);
        console.log('res,', res.data.data)
        setData(res.data.data);
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
                        <p className="font-semibold text-xl">{locale === "en" ? "Medical records" : "Bệnh án"}</p>
                        {/* <h2 className="font-semibold text-2xl">3 Items</h2> */}
                    </div>
                    {data.map((line: any) =>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="flex flex-col justify-between flex-grow">
                                    <LinkComponent skipLocaleHandling={undefined} locale={undefined} href={"/medical_record_detail?code=" + line.code}>
                                        <span className="font-bold text-sm">{line.attributes.createdAt}</span>
                                    </LinkComponent>
                                </div>
                            </div>
                        </div>)}
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