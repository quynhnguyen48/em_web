import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Packages from "../components/Packages/Packages";
import { useRouter } from 'next/router';
import Link from "next/link";

const tranlsate = (term: string, locale: string) => {
  if (locale === "en") {
    switch (term) {
      case "what_we_offer":
        return "What we offer";
      case "become_a_member":
        return "Become a member";
      case "gifting":
        return "Gifting";
    }
  } else {
    switch (term) {
      case "what_we_offer":
        return "Chúng tôi mang lại gì?";
      case "become_a_member":
        return "Trở Thành Thành Viên";
      case "gifting":
        return "Quà tặng";
    }
  }
}

const Home: NextPage = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return (
    <>
      <Head>
        <title>ECHO MEDI</title>
        <meta
          name="ECHO MEDI"
          content="ECHO MEDI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider slides={SliderData} />
      <Instagram />
      <img style={{
        // marginBottom: "-200px"
      }} src={"https://echomedi.com/wp-content/uploads/2022/09/ChungToiMangLaiGi-scaled.jpg"}
        className="w-full mb-[-50px] sm:mb-[-200px]" />
      <div>
        <div style={{
          transform: "rotate(180deg)",
          marginBottom: "-1px",
          fill: "#ECF5ED"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
          </svg>
        </div>
        <div className="w-full mx-auto text-center p-6 bg-emgreen relative" style={{ backgroundColor: "#ECF5ED" }}>
          <p className="text-2xl text-black text-3xl mb-5 font-semibold">
            {tranlsate("what_we_offer", locale)}</p>
          <p className="pb-4 text-black text-lg  mb-8">
            {locale === "en" ? "Members receive on-demand access to a full spectrum of concierge medical services, as convenient as having a team of doctors, pharmacists, and wellness care experts with you 24/7."
              : "Các thành viên của ECHO MEDI sẽ luôn được tiếp cận tất cả dịch vụ y tế và trợ giúp đặc biệt theo nhu cầu. Đồng nghĩa với việc luôn có một đội ngũ bác sĩ, dược sĩ và chuyên gia chăm sóc sức khỏe đồng hành với bạn 24/7"}
          </p>
          <div className="p-3 inline border-2 border-lime-600 rounded-2xl mr-8">
            <Link className="p-5" href="/packages/thanh-vien">{tranlsate("become_a_member", locale)}</Link>
          </div>
          <div className="p-3 inline bg-lime-600 rounded-2xl text-white">
            <Link className="p-5" href="/packages/thanh-vien">{tranlsate("gifting", locale)}</Link>
          </div>
        </div>
      </div>
      <div id="" className="max-w-[1240px] mx-auto py-16 text-center">
        <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="111" height="88" viewBox="0 0 111 88" fill="none"><path d="M2.40002 54.0035L17.4496 48.3261C26.2432 44.9899 36.0402 45.3411 44.5978 49.3796L68.6771 60.6759C71.569 62.0221 72.8083 65.4753 71.5099 68.3433C70.2706 71.0356 67.2016 72.3818 64.3688 71.4453L42.8863 64.8314" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.40002 84.2636L11.5478 78.0009C17.3315 74.0209 24.7088 73.2015 31.2007 75.7183L54.8079 84.7904C59.6473 86.6633 65.136 85.9025 69.2082 82.7419L105.976 54.7062C108.927 52.482 109.458 48.3264 107.216 45.4C105.091 42.6491 101.196 42.0053 98.3041 43.8782L70.2115 61.7883" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M72.6611 4.89057C71.6696 3.89839 70.4923 3.11133 69.1965 2.57434C67.9007 2.03735 66.5118 1.76096 65.1092 1.76096C63.7066 1.76096 62.3178 2.03735 61.022 2.57434C59.7262 3.11133 58.5489 3.89839 57.5573 4.89057L55.4995 6.94873L53.4417 4.89057C51.4388 2.88738 48.7223 1.762 45.8898 1.762C43.0573 1.762 40.3408 2.88738 38.3379 4.89057C36.335 6.89377 35.2098 9.61068 35.2098 12.4436C35.2098 15.2766 36.335 17.9935 38.3379 19.9967L40.3957 22.0548L55.4995 37.161L70.6033 22.0548L72.6611 19.9967C73.6532 19.005 74.4401 17.8275 74.977 16.5315C75.5139 15.2355 75.7903 13.8465 75.7903 12.4436C75.7903 11.0408 75.5139 9.65172 74.977 8.35575C74.4401 7.05977 73.6532 5.88229 72.6611 4.89057V4.89057Z" stroke="#426045" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <h1 className="text-3xl p-4">{locale !== "en" ? "THÀNH VIÊN LÀ TRÊN HẾT" : "MEMBER FIRST PHILOSOPHY"}</h1>
        <p className="text-lg">
          {locale === "en" ? "Expert Professionals - Intimate Environment - Tailored Treatments" : "Chuyên gia ưu tú – Môi trường thân thiện – Chăm sóc riêng biệt"}</p>
        <div className="grid grid-rows-none md:grid-cols-2 p-4 gap-4">
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <img src={"https://echomedi.com/wp-content/uploads/2022/07/pexels-karolina-grabowska-4386467-scaled.jpg"} />

          </div>
          <div className="w-full h-full col-span-2 md:col-span-1 row-span-2">
            <p className="text-lg p-5 text-left">
              {locale === "en" ? "To date the approach to healthcare has been driven by the urgent need to treat illness and injuries. The healthcare delivery has been substantially centered on institutional infrastructure. It has been based on “crisis care”. The focus must shift to wellness. Healthcare must devolve into the community and into the home. Better connected healthcare will evolve at a lower cost." : "Hiện nay, chúng ta chỉ nghĩ tới các dịch vụ chăm sóc sức khỏe khi cần điều trị bệnh hoặc phục hồi chấn thương. Phần lớn các dịch vụ này đang được cung cấp bởi những cơ sở y tế truyền thống. Nói cách khác, chúng ta đang chỉ chú tâm vào “chăm sóc khủng hoảng” – chữa bệnh thay vì phòng bệnh. Tư duy này cần phải được thay đổi. Trọng tâm nên là sức khỏe toàn diện, tức sức khỏe cả về thể chất lẫn tinh thần. Việc chăm sóc sức khỏe nên bắt đầu từ cộng đồng, với nền tảng là mỗi gia đình. Đây chính là tiền đề để xây dựng một hệ thống chăm sóc sức khỏe được kết nối chặt chẽ, bệnh viện kết nối với cộng đồng, cộng đồng kết nối với cá nhân. Qua đó, ta sẽ giảm đi gánh nặng của chi phí điều trị lâu dài."}</p>
            <p className="text-lg p-5 text-left">
              {locale === "en" ? "This reactive response must change. We must develop a thorough understanding of our health. This will allow us to monitor and maintain our wellness. It will allow us to develop preventive strategies to keep us healthy. Patients must be more thoroughly informed about their health and treatment. This will allow them to be directly involved in their own care." : "Cách tiếp cận của chúng ta đối với vấn đề chăm sóc sức khỏe đã cũ và cần phải thay đổi. Mỗi người cần trang bị kiến thức vững chắc nhằm tự theo dõi và duy trì sức khỏe của bản thân. Người bệnh phải được thông báo chi tiết hơn về tình trạng sức khỏe và kế hoạch điều trị để họ có thể theo sát quá trình điều trị của mình. Từ đó có thể xây dựng các biện pháp phòng ngừa và giữ cho cơ thể luôn khỏe mạnh."}</p>
            <p className="text-lg p-5 text-left">
              {locale === "en" ? "The quality of our living is significantly determined by the state of our health. We must be vigilant in the responsive maintenance of all facets of our health." : "Sức khỏe chính là chìa khóa quyết định chất lượng cuộc sống của mỗi người. Chúng ta nên chú trọng việc chăm sóc và duy trì một cơ thể khỏe mạnh toàn diện."}</p>
            <p className="text-lg p-5 text-left">
              {locale === "en" ? "ECHO MEDI seeks to be an active part of this crucial realignment." : "ECHO MEDI thấu hiểu và hướng tới việc trở thành một nhân tố tích cực trong hành trình định nghĩa lại cách tiếp cận vấn đề sức khỏe này."}</p>
          </div>

        </div>
      </div>
      <div className="grid grid-rows-none md:grid-cols-4 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col	items-center">
          <Link href={"/packages/cham-soc-phong-ngua/"}>
            <div className="cursor-pointer">
              <svg className="m-auto w-12" xmlns="http://www.w3.org/2000/svg" width="109" height="95" viewBox="0 0 109 95" fill="none"><path d="M98.9926 10.374C96.4313 7.82455 93.3902 5.80212 90.043 4.42228C86.6959 3.04245 83.1083 2.33224 79.4852 2.33224C75.8621 2.33224 72.2745 3.04245 68.9273 4.42228C65.5802 5.80212 62.5391 7.82455 59.9778 10.374L54.6622 15.6626L49.3465 10.374C44.1728 5.22667 37.1558 2.33491 29.8391 2.33491C22.5224 2.33491 15.5054 5.22667 10.3317 10.374C5.15804 15.5214 2.2515 22.5027 2.2515 29.7822C2.2515 37.0616 5.15804 44.043 10.3317 49.1903L15.6474 54.4789L54.6622 93.2952L93.6769 54.4789L98.9926 49.1903C101.555 46.642 103.588 43.6164 104.975 40.2863C106.362 36.9562 107.075 33.3868 107.075 29.7822C107.075 26.1775 106.362 22.6082 104.975 19.2781C103.588 15.9479 101.555 12.9223 98.9926 10.374V10.374Z" stroke="#426045" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              {/* <a href={locale === "en" ? "/en/packages/cham-soc-phong-ngua/" :"/packages/cham-soc-phong-ngua/"}> */}
              {locale === "en" ? "Preventive Care" : "Chăm Sóc Phòng Ngừa"}
            </div>
            {/* </a> */}
          </Link>
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col	items-center">
          <Link href={"/packages/dieu-tri-ban-dau/"}>
            <div className="cursor-pointer">
              <svg className="m-auto w-12" xmlns="http://www.w3.org/2000/svg" width="98" height="111" viewBox="0 0 98 111" fill="none"><path d="M81.0805 28.1515C81.0805 28.1515 55.2195 37.0712 50.1878 59.6952C50.1878 59.6952 48.7836 30.3962 16.0186 14.1518" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M67.3302 44.16C67.3302 44.16 78.8564 49.0038 85.9945 41.9744C93.1326 34.945 96.4091 22.0677 96.4091 22.0677C96.4091 22.0677 83.8296 14.6248 69.9631 18.0509C56.0965 21.4179 58.9049 43.1559 58.9049 43.1559" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.4216 47.763C39.4216 47.763 7.88534 46.877 5.77902 27.6199C3.67271 8.36292 6.77368 10.0759 1.85894 3.57816C1.85894 3.57816 29.8262 -1.85629 44.1023 11.3755C58.3199 24.6073 46.2086 44.7504 46.2086 44.7504" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.1347 108.842C62.5771 108.842 73.4744 97.8402 73.4744 84.2687C73.4744 70.6972 62.5771 59.6953 49.1347 59.6953C35.6922 59.6953 24.795 70.6972 24.795 84.2687C24.795 97.8402 35.6922 108.842 49.1347 108.842Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.134 71.5095V97.0281" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M36.4966 84.2686H61.8309" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              {/* <a href={locale === "en" ? "/en/packages/dieu-tri-ban-dau/" : "/packages/dieu-tri-ban-dau/"}> */}
              {locale === "en" ? "Primary Care" : "Điều Trị Ban Đầu"}
              {/* </a> */}
            </div>
          </Link>
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col	items-center">
          <Link href={"/packages/quan-ly-benh-man-tinh/"}>
            <div className="cursor-pointer">
              <svg className="m-auto w-12" xmlns="http://www.w3.org/2000/svg" width="87" height="111" viewBox="0 0 87 111" fill="none"><path d="M67.1884 108.842H20.0659C10.2141 108.842 2.26141 100.923 2.26141 91.1138V20.2011C2.26141 10.3915 10.2141 2.47289 20.0659 2.47289H67.1884C77.0403 2.47289 84.9929 10.3915 84.9929 20.2011V91.1138C84.9929 100.923 77.0403 108.842 67.1884 108.842Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.4489 17.4826V46.0841" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1579 60.7394H70.0965" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1579 75.395H70.0965" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1579 90.0502H45.7637" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.9861 24.6331L55.853 38.9339" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.9861 38.9339L55.853 24.6331" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <a href={locale == "en" ? "/en/packages/quan-ly-benh-man-tinh/" : "/packages/quan-ly-benh-man-tinh/"}>
                {locale === "en" ? "On-going Care" : "Quản Lý Bệnh Mãn Tính"}
              </a>
            </div>
          </Link>
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 row-span-2 flex flex-col	items-center">
          <Link href={"/packages/suc-khoe-toan-dien/"}>
            <div className="cursor-pointer">
              <svg className="m-auto w-12" xmlns="http://www.w3.org/2000/svg" width="110" height="93" viewBox="0 0 110 93" fill="none"><path d="M80.677 18.4535H97.5188C103.31 18.4535 108.037 23.1937 108.037 29.0004V80.431C108.037 86.2377 103.31 90.9779 97.5188 90.9779H12.1871C6.3959 90.9779 1.6684 86.2377 1.6684 80.431V29.0004C1.6684 23.1937 6.3959 18.4535 12.1871 18.4535H29.0289V13.2986C29.0289 7.2549 33.9927 2.33699 39.9612 2.33699H69.6855C75.7131 2.33699 80.6179 7.31415 80.6179 13.2986V18.4535H80.677Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M70.5129 18.5131H39.1931V15.7875C39.1931 13.3582 41.2023 11.3436 43.6251 11.3436H66.0217C68.4446 11.3436 70.4538 13.3582 70.4538 15.7875V18.5131H70.5129Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.1259 62.5373V68.4625C63.1259 70.7733 61.2349 72.6694 58.9303 72.6694H50.7162C48.4116 72.6694 46.5205 70.7733 46.5205 68.4625V62.5373H40.6111C38.3065 62.5373 36.4155 60.6412 36.4155 58.3304V50.1537C36.4155 47.8428 38.3065 45.9467 40.6111 45.9467H46.5205V40.0216C46.5205 37.7107 48.4116 35.8147 50.7162 35.8147H58.9303C61.2349 35.8147 63.1259 37.7107 63.1259 40.0216V45.9467H69.0353C71.34 45.9467 73.231 47.8428 73.231 50.1537V58.3304C73.231 60.6412 71.34 62.5373 69.0353 62.5373H63.1259Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <a href={locale === "en" ? "/en/packages/suc-khoe-toan-dien/" : "/packages/suc-khoe-toan-dien/"}>
                {locale === "en" ? "Wellness" : "Sức Khoẻ Toàn Diện"}
              </a>
            </div>
          </Link>
        </div>
      </div>
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
    </>
  );
};

export default Home;
