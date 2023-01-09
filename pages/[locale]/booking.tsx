import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import Contact from "../../components/Contact/Contact";
import SmallHero from "../../components/Hero/SmallHero";
import { makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common", "footer"]);
const getStaticPaths = () => ({
  fallback: false,
  paths: [
    {
      params: {
        locale: "en",
        slug: "test",
        label: "test2",
      },
    },
    {
      params: {
        locale: "vi",
        slug: "test",
        label: "test2",
      },
    },
  ],
});
export { getStaticPaths, getStaticProps };

const Booking: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [bookingDate, setBookingDate] = useState(new Date().toDateString());
  const [timeSlot, setTimeSlot] = useState("");
  const [gender, setGender] = useState("male");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [branch, setBranch] = useState("q7");
  const router = useRouter();
  const locale = (router.query.locale as string) || "en";

  const inputClassName = `
  form-control
  mt-1
  mb-3
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `;

  const handleBooking = () => {
    const payload = {
      name,
      gender,
      email,
      phone_number,
      message,
      birthday,
      address,
      job,
      bookingDate,
      timeSlot,
    };

    axios
      .post("https://api.echomedi.me" + 
      "/api/bookings/createBookingFromWeb", payload)
      .then(function (response) {
        toast.success("Thành công");
      })
      .catch(function (error) {});
  };

  const bookingSlots = useMemo(() => {
    let slots = [];
    // working hours: 7h - 21h
    // sunday: 7h - 15h
    const startTime = 7;
    let endTime = 20;
    // check if booking date is sunday
    if (dayjs(bookingDate).day() === 0) {
      endTime = 14;
    }
    for (let i = startTime; i <= endTime; i++) {
      let slot = dayjs(bookingDate).set("hour", i).set("minute", 0);
      if (slot.isAfter(dayjs())) {
        slots.push(slot);
      }
      slot = dayjs(bookingDate).set("hour", i).set("minute", 30);
      if (slot.isAfter(dayjs())) {
        slots.push(slot);
      }
    }
    if (slots?.length) {
      setTimeSlot(slots[0].toISOString());
    }
    return slots;
  }, [bookingDate]);

  return (
    <>
      <Head>
        <title>ECHO MEDI</title>
        <meta name="ECHO MEDI" content="ECHO MEDI" />
        <link rel="icon" href="/favicon1.png" />
      </Head>

      {/* <Slider slides={SliderData} />
      <Instagram /> */}
      <SmallHero
        heading={
          locale === "en" ? "MAKE A DOCTOR’S APPOINTMENT" : "ĐĂNG KÝ KHÁM BỆNH"
        }
        message={""}
        sub_message={[]}
        image_url={
          "https://api.echomedi.me/uploads/pexels_antoni_shkraba_5214952_2_836c5784e8.jpg?updated_at=2023-01-07T04:15:21.739Z"
        }
      />
      <div className="max-w-[1048px] mx-auto p-4 text-left">
        <div className="mb-3 w-full flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>
            <label>{locale === "en" ? "Your name" : "Tên của bạn"}</label>
            <input
              type="text"
              name="name"
              className={inputClassName}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>{locale === "en" ? "Birthday" : "Ngày sinh"}</label>
            <input
              type="date"
              name="birthday"
              className={inputClassName}
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
            />
          </div>
          <div>
            <label>{locale === "en" ? "Gender" : "Giới tính"}</label>
            <select
              className={inputClassName}
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </select>
          </div>
          <div>
            <label>{locale === "en" ? "Job" : "Nghề nghiệp"}</label>
            <input
              type="text"
              name="job"
              className={inputClassName}
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
          </div>
          <div className="col-span-2">
            <label>{locale === "en" ? "Address" : "Địa chỉ"}</label>
            <input
              type="text"
              name="address"
              className={inputClassName}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div>
            <label>{locale === "en" ? "Phone number" : "Số điện thoại"}</label>
            <input
              type="text"
              name="phone"
              className={inputClassName}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              className={inputClassName}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-span-2">
            <label>{locale === "en" ? "Message" : "Nội dung đặt lịch"}</label>
            <textarea
              name="message"
              className={inputClassName}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="col-span-2">
            <label>{locale === "en" ? "Booking Date" : "Ngày đặt lịch"}</label>
            <div className="grid grid-cols-3 gap-x-4">
              <input
                value={bookingDate}
                type="date"
                name="bookingDate"
                className={`${inputClassName} col-span-2`}
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
              />
              <select
                value={timeSlot}
                name="timeSlot"
                className={inputClassName}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                {bookingSlots?.map((slot) => (
                  <option value={dayjs(slot).toISOString()}>
                    {dayjs(slot).format("HH:mm")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
            <label>{locale === "en" ? "Gender" : "Giới tính"}</label>
            <select
              className={inputClassName}
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </select>
          </div>
        <div className="flex space-x-2 justify-center">
          <button
            onClick={handleBooking}
            style={{
              backgroundColor: "#416045",
              color: "white",
            }}
            type="button"
            className="inline-block px-6 py-2.5 text-white text-sm leading-tight uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out bg-green-200 text-black rounded-full"
          >
            {locale === "en" ? "Send" : "Gửi"}
          </button>
        </div>
      </div>
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
      <Toaster position="bottom-center" />
    </>
  );
};

export default Booking;
