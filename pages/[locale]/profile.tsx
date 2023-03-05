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
  const [data, setData] = useState({ status: "", email: "" });
  const locale = router.query.locale as string || 'vi';
  const [cartLines, setCartLines] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios.get('https://api.echomedi.com' + '/api/user/getMe', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(function (response) {
          setData(response.data.user)
          toast.success('Thành công');
        })
        .catch(function (error) {
        });
    }
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
    <div className="flex flex-col sm:flex-row flex-wrap my-8 max-w-[1024px] m-auto bg-green-100">
      {/* <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8   hover:transform-scale-subtle transition-normal hover:show-child">
        <LinkComponent href={"/personal_information"} locale={""} skipLocaleHandling={false}>
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64  border-rhover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#F2F8FB" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 15C15 17.76 17.25 20 20 20C22.75 20 24.99 17.76 25 15C25 12.24 22.75 10 20 10C17.24 10 15 12.25 15 15ZM17 15.01C17 13.35 18.35 12.01 20 12.01C21.65 12.01 22.99 13.36 23 15.01C23 16.67 21.66 18.01 20 18.01C18.34 18.01 17 16.66 17 15.01ZM24 21C24.19 21 24.39 21.01 24.57 21.03C27.62 21.32 30 23.88 30 27C30 28.1 29.1 29 28 29H12C10.9 29 10 28.1 10 27C10 23.88 12.38 21.32 15.43 21.03C15.61 21.01 15.81 21 16 21H17.77C18.32 21.61 19.12 22 20 22C20.46 22 20.9 21.89 21.29 21.7C21.56 21.58 21.8 21.42 22.01 21.22C22.09 21.15 22.16 21.08 22.23 21H24ZM16 23C13.79 23 12 24.79 12 27H28C28 24.79 26.21 23 24 23H23C22.17 23.63 21.13 24 20 24C18.87 24 17.83 23.63 17 23H16Z" fill="#003B71" />
              </svg>
            </div>
            <h3 className="mt-4 mb-1">{locale == "en" ? "Personal Information" : "Thông tin cá nhân"}</h3>
            <p className="mt-4 text-center text-gray-700 leading-normal px-6 hidden hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
          </div>
        </LinkComponent>
      </div> */}

      <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 hover:transform-scale-subtle transition-normal hover:show-child">
        <LinkComponent href={"/personal_information"} locale={""} skipLocaleHandling={false}>
          <div className='flex flex-col items-center justify-center'>
            <div className="w-12 h-12 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#F2F8FB" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 15C15 17.76 17.25 20 20 20C22.75 20 24.99 17.76 25 15C25 12.24 22.75 10 20 10C17.24 10 15 12.25 15 15ZM17 15.01C17 13.35 18.35 12.01 20 12.01C21.65 12.01 22.99 13.36 23 15.01C23 16.67 21.66 18.01 20 18.01C18.34 18.01 17 16.66 17 15.01ZM24 21C24.19 21 24.39 21.01 24.57 21.03C27.62 21.32 30 23.88 30 27C30 28.1 29.1 29 28 29H12C10.9 29 10 28.1 10 27C10 23.88 12.38 21.32 15.43 21.03C15.61 21.01 15.81 21 16 21H17.77C18.32 21.61 19.12 22 20 22C20.46 22 20.9 21.89 21.29 21.7C21.56 21.58 21.8 21.42 22.01 21.22C22.09 21.15 22.16 21.08 22.23 21H24ZM16 23C13.79 23 12 24.79 12 27H28C28 24.79 26.21 23 24 23H23C22.17 23.63 21.13 24 20 24C18.87 24 17.83 23.63 17 23H16Z" fill="#003B71" />
              </svg>
            </div>
            <h3 className="mt-4 mb-1">{locale == "en" ? "Personal Information" : "Thông tin cá nhân"}</h3>
          </div>
        </LinkComponent>
      </div>

      {/* <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8   border-rhover:transform-scale-subtle transition-normal hover:show-child">
        <div className="w-12 h-12 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#F2F8FB" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.01 28H28.01C29.11 28 30.01 27.1 30.01 26V14C30.01 12.9 29.11 12 28.01 12H12.01C10.91 12 10.01 12.9 10.01 14V26C10.01 27.1 10.91 28 12.01 28ZM12.01 26V14H28.01V26H12.01ZM18.01 18.5C18.01 19.3284 17.3384 20 16.51 20C15.6816 20 15.01 19.3284 15.01 18.5C15.01 17.6716 15.6816 17 16.51 17C17.3384 17 18.01 17.6716 18.01 18.5ZM14.01 23V22.5C14.01 21.4 14.91 21 16.01 21H17.01C18.11 21 19.01 21.4 19.01 22.5V23H14.01ZM21.51 19H25.51C25.78 19 26.01 18.77 26.01 18.5C26.01 18.22 25.79 18 25.51 18H21.51C21.23 18 21.01 18.22 21.01 18.5C21.01 18.78 21.23 19 21.51 19ZM25.51 21H21.51C21.23 21 21.01 20.78 21.01 20.5C21.01 20.22 21.23 20 21.51 20H25.51C25.79 20 26.01 20.22 26.01 20.5C26.01 20.77 25.78 21 25.51 21ZM21.51 23H25.51C25.78 23 26.01 22.77 26.01 22.5C26.01 22.22 25.79 22 25.51 22H21.51C21.23 22 21.01 22.22 21.01 22.5C21.01 22.78 21.23 23 21.51 23Z" fill="#003B71" />
          </svg>
        </div>
        <h3 className="mt-4 mb-1">{locale == "en" ? "Test results" : "Kết quả xét nghiệm"}</h3>
        <p className="mt-4 text-center text-gray-700 leading-normal hidden hover:block">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>
      </div> */}

      <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8   hover:transform-scale-subtle transition-normal hover:show-child">
        <LinkComponent href={"/past_medical_record"} locale={""} skipLocaleHandling={false}>
          <div className='flex flex-col items-center justify-center'>
            <div className="w-12 h-12 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#F2F8FB" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.01 14V11C21.01 10.45 20.56 10 20.01 10C19.46 10 19.01 10.45 19.01 11V14H21.01ZM22.01 12H25.01C26.1 12 27.01 12.9 27.01 14V28C27.01 29.1 26.1 30 25.01 30H15.01C13.92 30 13.01 29.1 13.01 28V14C13.01 12.9 13.92 12 15.01 12H18.01V15H22.01V12ZM15.01 14V28H25.01V14H24.01V16C24.01 16.55 23.56 17 23.01 17H17.01C16.46 17 16.01 16.55 16.01 16V14H15.01ZM20.01 22C21.1146 22 22.01 21.1046 22.01 20C22.01 18.8954 21.1146 18 20.01 18C18.9054 18 18.01 18.8954 18.01 20C18.01 21.1046 18.9054 22 20.01 22ZM24.01 26V25.25C24.01 23.6 22.66 23 21.01 23H19.01C17.36 23 16.01 23.6 16.01 25.25V26H24.01Z" fill="#003B71" />
          </svg>
            </div>
            <h3 className="mt-4 mb-1">{locale == "en" ? "Past visit information" : "Lịch sử khám bệnh"}</h3>
          </div>
        </LinkComponent>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8   hover:transform-scale-subtle transition-normal hover:show-child">
        <LinkComponent href={"/order_history"} locale={""} skipLocaleHandling={false}>
          <div className='flex flex-col items-center justify-center'>
            <div className="w-12 h-12 rounded-full">
              <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 115.35 122.88" xmlSpace="preserve"><g>
                <circle cx="60" cy="60" r="60" fill="#F2F8FB"></circle>
                <path style={{ transform: "scale(0.6)", transformOrigin: "center center" }} d="M25.27,86.92c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h21.49c1.81,0,3.26,1.46,3.26,3.26s-1.46,3.26-3.26,3.26 H25.27L25.27,86.92L25.27,86.92z M61.1,77.47c-0.96,0-1.78-0.82-1.78-1.82c0-0.96,0.82-1.78,1.78-1.78h4.65c0.04,0,0.14,0,0.18,0 c1.64,0.04,3.1,0.36,4.33,1.14c1.37,0.87,2.37,2.19,2.92,4.15c0,0.04,0,0.09,0.05,0.14l0.46,1.82h39.89c1,0,1.78,0.82,1.78,1.78 c0,0.18-0.05,0.36-0.09,0.55l-4.65,18.74c-0.18,0.82-0.91,1.37-1.73,1.37l0,0l-29.18,0c0.64,2.37,1.28,3.65,2.14,4.24 c1.05,0.68,2.87,0.73,5.93,0.68h0.04l0,0h20.61c1,0,1.78,0.82,1.78,1.78c0,1-0.82,1.78-1.78,1.78H87.81l0,0 c-3.79,0.04-6.11-0.05-7.98-1.28c-1.92-1.28-2.92-3.46-3.92-7.43l0,0L69.8,80.2c0-0.05,0-0.05-0.04-0.09 c-0.27-1-0.73-1.69-1.37-2.05c-0.64-0.41-1.5-0.59-2.51-0.59c-0.05,0-0.09,0-0.14,0H61.1L61.1,77.47L61.1,77.47z M103.09,114.13 c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38s-4.38-1.96-4.38-4.38S100.67,114.13,103.09,114.13L103.09,114.13L103.09,114.13z M83.89,114.13c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38c-2.42,0-4.38-1.96-4.38-4.38S81.48,114.13,83.89,114.13 L83.89,114.13L83.89,114.13z M25.27,33.58c-1.81,0-3.26-1.47-3.26-3.26c0-1.8,1.47-3.26,3.26-3.26h50.52 c1.81,0,3.26,1.46,3.26,3.26c0,1.8-1.46,3.26-3.26,3.26H25.27L25.27,33.58L25.27,33.58z M7.57,0h85.63c2.09,0,3.99,0.85,5.35,2.21 s2.21,3.26,2.21,5.35v59.98h-6.5V7.59c0-0.29-0.12-0.56-0.31-0.76c-0.2-0.19-0.47-0.31-0.76-0.31l0,0H7.57 c-0.29,0-0.56,0.12-0.76,0.31S6.51,7.3,6.51,7.59v98.67c0,0.29,0.12,0.56,0.31,0.76s0.46,0.31,0.76,0.31h55.05 c0.61,2.39,1.3,4.48,2.23,6.47H7.57c-2.09,0-3.99-0.85-5.35-2.21C0.85,110.24,0,108.34,0,106.25V7.57c0-2.09,0.85-4,2.21-5.36 S5.48,0,7.57,0L7.57,0L7.57,0z M25.27,60.25c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h50.52c1.81,0,3.26,1.46,3.26,3.26 s-1.46,3.26-3.26,3.26H25.27L25.27,60.25L25.27,60.25z" /></g>
              </svg>
            </div>
            <h3 className="mt-4 mb-1">{locale == "en" ? "Order history" : "Lịch sử mua hàng"}</h3>
          </div>
        </LinkComponent>
      </div>
      {/* <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8   hover:transform-scale-subtle transition-normal hover:show-child">
        <div className="w-12 h-12 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#F2F8FB" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.01 12H12.01C10.91 12 10.01 12.9 10.01 14V26C10.01 27.1 10.91 28 12.01 28H28.01C29.11 28 30.01 27.1 30.01 26V14C30.01 12.9 29.11 12 28.01 12ZM12.01 14H28.01V16H12.01V14ZM28.01 26H12.01V18H28.01V26ZM13.01 21H17.01V22H13.01V21ZM21.01 21H27.01V24H21.01V21ZM13.01 23H19.01V24H13.01V23Z" fill="#003B71" />
          </svg>
        </div>
        <h3 className="mt-4 mb-1">{locale == "en" ? "Payment method" : "Hình thức thanh toán"}</h3>
        <p className="mt-4 text-center text-gray-700 leading-normal hidden hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
      </div> */}
      {/* <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-gray-300 hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 rounded-full bg-gray-300" alt=""></div>
      <h3 className="mt-4 mb-1">Design</h3>
      <p className="mt-4 text-center text-gray-700 leading-normal hidden hover:block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 border-gray-300  hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
      <div className="w-12 h-12 rounded-full bg-gray-300" alt=""></div>
      <h3 className="mt-4 mb-1">Development</h3>
      <p className="mt-4 text-center text-gray-700 leading-normal hidden hover:block">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
    </div> */}
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