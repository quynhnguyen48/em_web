import React from "react";
import { useRouter } from 'next/router';

const Instagram = () => {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  return (
    <div 
      style={{
        backgroundColor: "#9EA99A",
      }}
    className="w-full mx-auto text-center p-6">
      <div className="max-w-[1240px] mx-auto text-center">
      <p className="text-xl text-white mb-5 text-left">
        {locale === "en" ? "ECHO MEDI provides its members with a first-class, on-demand, comprehensive healthcare and wellbeing experience, anytime, anywhere.": 
        "ECHO MEDI mang đến cho các thành viên dịch vụ chăm sóc sức khoẻ đồng bộ và toàn diện mọi lúc, mọi nơi."
        }
      </p>
      <p className="text-white text-lg text-left">{
      locale === "en" ? "ECHO MEDI members have immediate access to our healthcare professionals and wellness care team, allowing us to deliver the ultimate wellbeing to members whom we know personally and to whom we hold ourselves accountable to every single member, so members can rest assure to entrust their health to us." :     
      "Các thành viên của ECHO MEDI được theo sát và thiết kế dịch vụ chăm sóc sức khoẻ tổng quát tối ưu bởi đội ngũ tư vấn sức khoẻ cùng các chuyên gia y tế. Chính vì thế, bạn có thể yên tâm uỷ thác sức khoẻ của mình cho chúng tôi"}.</p>
      </div>
    </div>
  );
};

export default Instagram;
