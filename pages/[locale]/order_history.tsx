import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Contact from '../../components/Contact/Contact';
import SmallHero from '../../components/Hero/SmallHero';
import Head from "next/head";
import LinkComponent from '../../components/Link';
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


const Order = () => {
  const router = useRouter()
  const { code } = router.query;
  const [data, setData] = useState({status: ""});
  const locale = router.query.locale as string || 'vi';
  const [cartLines, setCartLines] = useState([]);
  const token = localStorage.getItem('token');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://api.echomedi.me' + '/api/orders/getOrderHistory',{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
            .then(function (response) {
                console.log('response', response);
                setOrders(response.data.orders?.filter((o: any) => o.code))
            })
            .catch(function (error) {
            });
  }, [token]);

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
  <div className="container mx-auto mt-10">
<div className="flex shadow-md my-10">
  <div className="w-4/4 sm:w-3/4 bg-white px-10 py-10">
    <div className="flex justify-between border-b pb-8">
      <p className="font-semibold text-xl">{locale === "en" ? "Order" : "Đơn hàng"} {code} - {getDisplayedStatus(data?.status)}</p>
      {/* <h2 className="font-semibold text-2xl">3 Items</h2> */}
    </div>
    <div className="flex mt-10 mb-5">
      <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">{locale === "en" ? "Product Details" : "Chi tiết đơn hàng"}</h3>
      <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">{locale === "en" ? "Create Date" : "Ngày đặt"}</h3>
      {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Quantity" : "Số lượng"}</h3> */}
      <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Total amount" : "Tổng cộng"}</h3>
      {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">{locale === "en" ? "Total" : "Tổng cộng"}</h3> */}
    </div>
    {orders.map((line:any) => 
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

  <div id="summary" className="w-1/4 px-8 py-10 hidden sm:block">
    <h1 className="font-semibold text-2xl border-b pb-8">{locale === "en" ? "Order Summary" : "Tóm tắt đơn hàng"}</h1>
    {/* <div className="py-10">
      <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
      <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
    </div>
    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
    <div className="border-t mt-8">
      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>{locale === "en" ? "TOTAL COST" : "TỔNG CỘNG"}</span>
        {/* <span>{numberWithCommas(totalPrice)}đ</span> */}
      </div>
    </div>
  </div>

</div>
<div id="summary" className="w-4/4 px-8 py-10 block sm:hidden">
    <h1 className="font-semibold text-2xl border-b pb-8">{locale === "en" ? "Order Summary" : "Tóm tắt đơn hàng"}</h1>
    {/* <div className="py-10">
      <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
      <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
    </div>
    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
    <div className="border-t mt-8">
      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>{locale === "en" ? "TOTAL COST" : "TỔNG CỘNG"}</span>
        {/* <span>{numberWithCommas(totalPrice)}đ</span> */}
      </div>
      <button 
        // onClick={getVNPayPaymentURL}
        className="bg-green-200 font-semibold hover:bg-green-300 py-3 text-sm text-black uppercase w-full rounded-full">{locale == "en" ? "Create Order" : "Đặt hàng"}</button>
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