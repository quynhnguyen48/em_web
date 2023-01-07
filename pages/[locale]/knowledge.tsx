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

            <div 
    className="grid grid-rows-none md:grid-cols-3 p-4 gap-4 p-10">
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/6-cach-giup-phong-ngua-suy-yeu-co-tim/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" 
                    src="https://api.echomedi.me/uploads/thumbnail_woman_taking_online_yoga_lesso_5392_7817_1667899804_0dd83d3c0d_a8177b490f.jpg?updated_at=2023-01-07T02:40:04.271Z" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">6 Cách Giúp Phòng Ngừa Suy Yếu Cơ Tim</div>
                        <p className="text-gray-700 text-base">
                            Kiểm soát huyết áp, duy trì trọng lượng cơ thể, ăn uống lành mạnh, tập thể dục để giúp ngăn ngừa suy yếu cơ tim. Bệnh cơ tim là một dạng của suy tim. Một số thay đổi lối sống như ăn uống lành mạnh, tập thể dục có thể giúp ngăn ngừa suy yếu...
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/dau-lung-ve-dem/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://api.echomedi.me/uploads/dau_lung1_2607_1667897495_5b37eef623.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Đau Lưng Về Đêm</div>
                        <p className="text-gray-700 text-base">
                        Đau lưng có thể do sinh hoạt không đúng tư thế nhưng đôi khi đây cũng là dấu hiệu cảnh báo những bệnh lý nguy hiểm cần được điều trị…
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/dau-lung-ve-dem/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://api.echomedi.me/uploads/medicine_2749_1667909810_1_1_25f7bf89c5.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">7 Yếu Tố Khiến Gan Tổn Thương</div>
                        <p className="text-gray-700 text-base">
                        Uống quá nhiều rượu bia, nước ngọt, lạm dụng chất bổ sung, chế độ ăn uống không lành mạnh, lười tập thể dục… có thể khiến gan bị viêm, dẫn…
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/dau-lung-ve-dem/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://api.echomedi.me/uploads/viem_tuyen_tien_liet_6111_1667898866_405223075d.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Viêm Tuyến Tiền Liệt Có Chữa Được Không?
</div>
                        <p className="text-gray-700 text-base">
                        Viêm tuyến tiền liệt cấp tính có thể điều trị dứt điểm nếu được phát hiện sớm, còn với viêm tuyến tiền liệt mạn tính, điều trị chỉ nhằm giảm triệu chứng.
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/dau-lung-ve-dem/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://api.echomedi.me/uploads/Screen_Shot_2022_11_07_at_19_4_7266_3759_1667825349_652de06fc8.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">5 Bệnh Lý Buồng Trứng Dễ Gây Vô Sinh Nữ
</div>
                        <p className="text-gray-700 text-base">
                        Tình trạng đa nang, u nang, suy – viêm buồng trứng, tắc vòi trứng là 5 bệnh lý phổ biến ở buồng trứng gây vô sinh nữ.

BS.CKII Vũ Nhật Khang, Trung tâm Hỗ trợ sinh sản BVĐK Tâm Anh TP HCM cho biết, buồng trứng là cơ quan sinh sản quan trọng của phụ nữ, có vai trò sản xuất ra estrogen và progesterone. Những hormone này giúp phát triển ngực ở tuổi dậy thì, điều hoà chu kỳ kinh nguyệt và hỗ trợ mang thai. Tuy nhiên, đây cũng là bộ phận dễ mắc các bệnh lý ảnh hưởng chức năng sinh sản.
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            <LinkComponent skipLocaleHandling={false} locale={undefined} href={"/blogs/dau-lung-ve-dem/"}>
            <div className="max-w-[1240px] mx-auto p-4 text-left">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://api.echomedi.me/uploads/mat_dep_3802_1667794310_d7449924fc.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">7 Cách Giúp Ngăn Ngừa Võng Mạc Tiểu Đường
</div>
                        <p className="text-gray-700 text-base">
                        Kiểm tra mắt thường xuyên, quản lý chặt đường huyết, huyết áp cùng với chế độ ăn uống lành mạnh… có thể ngăn ngừa bệnh võng mạc tiểu đường.

Bệnh võng mạc tiểu đường là một biến chứng phổ biến của tiểu đường, gây ra các vấn đề về thị lực, thậm chí mù lòa. Tuy nhiên, người bệnh có thể làm giảm nguy cơ phát triển bệnh này với một số cách.
                        </p>
                    </div>

                </div>
            </div>
            </LinkComponent>
            </div>
            {/* <Portfolio /> */}
            {/* <Packages /> */}
            <Contact />
        </>
    );
};

export default Home;
