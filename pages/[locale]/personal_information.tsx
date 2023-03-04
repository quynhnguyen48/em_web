import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Contact from '../../components/Contact/Contact';
import SmallHero from '../../components/Hero/SmallHero';
import CustomerForm from '../../components/CustomersForm';
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


const PersonalInformation = () => {
  const router = useRouter()
  const { code } = router.query;
  const [data, setData] = useState();
  const locale = router.query.locale as string || 'vi';
  const [cartLines, setCartLines] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    console.log('token', token)
    if (token) {
      axios.get('https://api.echomedi.com' + '/api/user/getMe', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(function (response) {
          console.log('response', response)
          setData(response.data)
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
  <div className="flex flex-col sm:flex-row flex-wrap my-8 max-w-[1024px] m-auto">
  <p className='text-2xl'>Thông tin cá nhân</p>
  {data && <CustomerForm data={data} fromCheckIn={undefined} onUpdateGuestUserCheckin={undefined} onCloseModal={undefined} />}
  </div>
    <Contact />
  </>
}

export default PersonalInformation

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