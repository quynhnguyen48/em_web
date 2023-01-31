import React, { useState, useMemo } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import LinkComponent from "../Link";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import dayjs from "dayjs";

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

const contact = () => {
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


  const handleBooking = () => {
    const payload = {data: {
      createNewPatient: true,
      full_name: name,
      gender,
      email,
      phone: phone_number,
      message,
      birthday: dayjs(birthday).toISOString(),
      address: {
        address
      },
      job,
      branch,
      bookingDate: timeSlot,
    }};

    axios
    .post("https://api.echomedi.me" + 
      "/api/bookings/createBookingFromWeb", payload)
      .then(function (response) {
        toast.success("Thành công");
      })
      .catch(function (error) {});
  };

  return (
    <div
      id="booking"
      style={{
        backgroundColor: "#ecf5ed"
      }}
    className="max-w-[568px] mx-auto p-4 text-left mb-4">
      <p className="text-2xl text-center mb-4 underline">
        {locale == "en" ? "Booking" : "Đặt lịch khám"}
      </p>
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
            <label>{locale === "en" ? "Location" : "Chi nhánh khám"}</label>
            <select
              className={inputClassName}
              name="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="q7">{locale == "en" ? "1026 Nguyen Van Linh, Tan Phong Ward, District 7" : "1026 Nguyễn Văn Linh, P. Tân Phong, Quận 7"}</option>
              <option value="q2">{locale == "en" ? "46 Nguyen Thi Dinh, An Phu Ward, District 2" : "46 Nguyễn Thị Định, P. An Phú, Quận 2"}</option>
              <option value="binhduong">{locale == "en" ? "Canary Plaza, 5 Binh Duong Highway, Thuan Giao, Thuan An City, Binh Duong" : "Canary Plaza, số 5 Đại lộ Bình Dương, Thuận Giao, Tp. Thuận An, Bình Dương"}</option>
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
  );
};

export default contact;
