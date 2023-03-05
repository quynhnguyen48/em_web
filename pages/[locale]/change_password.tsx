// import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Contact from '../../components/Contact/Contact';
import SmallHero from '../../components/Hero/SmallHero';
import CustomerForm from '../../components/CustomersForm';
import Head from "next/head";
import LinkComponent from '../../components/Link';
import { makeStaticProps } from '../../lib/getStatic';
import Input from '../../components/components/Input';
import Button from '../../components/components/Button';
import axios from "../../services/axios";

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
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassowrd, setConfirmNewPassword] = useState("");

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

    <div className="space-y-2 px-6 mt-4 max-w-[568px] m-auto py-6">
      <p className='text-2xl font-bold mb-4 text-center'>Đổi mật khẩu</p>
      <div className="bg-form space-y-2 bg-green-100 p-4 mb-10">
        <Input label="Mật khẩu hiện tại" placeholder=""
          type="password"
          value={currentPassword}
          onChange={(e: any) => setCurrentPassword(e.target.value)} id={undefined} name={undefined} errors={undefined} required={undefined} suffix={undefined} prefix={undefined} onFocus={undefined} disabled={undefined} />
        <Input label="Mật khẩu mới" placeholder=""
          value={newPassword}
          type="password"
          onChange={(e: any) => setNewPassword(e.target.value)} id={undefined} name={undefined} errors={undefined} required={undefined} suffix={undefined} prefix={undefined} onFocus={undefined} disabled={undefined} />
        <Input label="Nhập lại mật khẩu mới" placeholder=""
          value={confirmNewPassowrd}
          type="password"
          onChange={(e: any) => setConfirmNewPassword(e.target.value)} id={undefined} name={undefined} errors={undefined} required={undefined} suffix={undefined} prefix={undefined} onFocus={undefined} disabled={undefined} />
        <Button
          type="button"
          className="flex flex-col items-center bg-gray2 m-auto mt-10 rounded-xl"
          onClick={() => {
            axios.post("/auth/change-password", {
              currentPassword,
              password: newPassword,
              passwordConfirmation: confirmNewPassowrd,
            })
              .catch(e => {
                console.log('response', e);
                toast.error(e.response?.data?.error?.message);
              })
              .then(response => {
                if (response?.status == 200) {
                  toast.success('Đổi mật khẩu thành công');
                }
              })
              .finally(() => {
              });
          }} icon={undefined}>
          Xác nhận
        </Button>
      </div>
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