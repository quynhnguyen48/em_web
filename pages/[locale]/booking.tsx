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
import Booking2 from "../../components/Booking/Booking"

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
      .post("https://api.echomedi.com" + 
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
      <Booking2/>
      {/* <Portfolio /> */}
      {/* <Packages /> */}
      <Contact />
      <Toaster position="bottom-center" />
    </>
  );
};

export default Booking;
