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
    className="full-w mx-auto text-center p-6">
      <div className="max-w-[1240px] mx-auto text-center">
      <p className="text-2xl text-white mb-5 text-center">
        {locale === "en" ? "ECHO MEDI provides its members with a first-class, on-demand, comprehensive healthcare and wellbeing experience, anytime, anywhere.": 
        "ECHO MEDI - Hệ thống y tế toàn diện cho bạn và gia đình"
        }
      </p>
      <p className="text-white text-lg text-left">{
      locale === "en" ? "ECHO MEDI members have immediate access to our healthcare professionals and wellness care team, allowing us to deliver the ultimate wellbeing to members whom we know personally and to whom we hold ourselves accountable to every single member, so members can rest assure to entrust their health to us." :     
      "Đồng hành cùng một đội ngũ y tế lành nghề gồm các bác sĩ, dược sĩ, điều dưỡng và chuyên gia dinh dưỡng, khách hàng sẽ được chăm sóc sức khoẻ toàn diện với phương châm “Phòng bệnh hơn chữa bệnh”."}</p>
      </div>
    </div>
  );
};

export default Instagram;
