import { useCallback, useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import classNames from "classnames"
import { toast } from "react-toastify"
import LinkComponent from '../components/Link';
import Button from "./components/Button"
import Input from "./components/Input"
// import Select from "./components/Select"
import Datepicker from "./components/Datepicker"
// import { CUSTOMER_TAG, GENDER } from "constants/Customer"
// import { REGION_DATA } from "constants/Regions"
import { createNewUser, getListUsers, updateUser } from "../services/api/users"
// import { randomPassword } from "utils/string"
import { getErrorMessage } from "../utils/error";

const CustomersForm = ({ data, fromCheckIn, onUpdateGuestUserCheckin, onCloseModal }) => {
  // const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [districtList, setDistrictList] = useState([])
  const [wardList, setWardList] = useState([])
  const [loadingCustomers, setLoadingCustomers] = useState(false)
  const [customersData, setCustomersData] = useState([])

  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email is not in correct format"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .trim()
      .matches(/^[0-9]*$/, "Phone number is not in correct format"),
    address: yup.object({
      province: yup.object().required("City is required").nullable(),
      district: yup.object().required("District is required").nullable(),
      ward: yup.object().required("Ward is required").nullable(),
      address: yup.string().required("Address is required"),
    }),
    birthday: yup.date().required().typeError("Date of birth is required"),
    gender: yup.string().required("Gender is required"),
    // customerTag: yup.string().required().typeError("Customer Tag is required"),
    // referral: yup.object().nullable(),
  })

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      code: data?.code || "",
      email: data?.email || "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      gender: data?.gender || "",
      phone: data?.phone || "",
      birthday: !!data?.birthday ? new Date(data?.birthday) : null,
      address: {
        province: data?.address?.province || null,
        district: data?.address?.district || null,
        ward: data?.address?.ward || null,
        address: data?.address?.address || "",
      },
      customerTag:
        data?.customerTag === "referral"
          ? CUSTOMER_TAG.REFERRAL
          : data?.customerTag === "new"
          ? CUSTOMER_TAG.NEW_CUSTOMER
          : null,
      referral: data?.referral
        ? {
            value: data?.referral?.id,
            label: `${data?.referral?.firstName} ${data?.referral?.lastName} (${data?.referral?.code})`,
          }
        : null,
    },
  })

  const provincesList = [];

  // init district list
  useEffect(() => {
    if (data?.address?.province) {
      let chosenProvince = provincesList?.find((item) => item.id === data?.address?.province?.id)
      setDistrictList(chosenProvince?.level2s)
    }
  }, [data?.address?.province, provincesList])

  // init ward list
  useEffect(() => {
    if (data?.address?.district) {
      let chosenDistrict = districtList?.find(
        (districtItem) => districtItem.id === data?.address?.district.id
      )
      setWardList(
        chosenDistrict?.level3s?.map((ward) => {
          return { value: ward.id, label: ward.name }
        })
      )
    }
  }, [data?.address?.district, districtList])

  const logout = () => {
    localStorage.removeItem('token');
    location.href = "/";
  }

  const onSubmit = async (formData) => {
    try {
      setLoading(true)
      const payload = {
        ...formData,
        // username: formData.email,
        referral: formData?.referral?.value,
      }
      console.log('asd', data);
      if (data?.id) {
        await updateUser(data?.id, payload)
        toast.success("Customer updated successfully")
      } else {
        const password = randomPassword()
        const res = await createNewUser({ ...payload, password, tmpPassword: password })
        if (res.data) {
          if (fromCheckIn) {
            onUpdateGuestUserCheckin(res.data.user)
          } else {
            // navigate(-1)
            toast.success("Customer updated successfully")
          }
        }
      }
    } catch (error) {
      toast.error(getErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6 p-4 bg-green-100">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                name="email"
                label="Email"
                placeholder={"Nhập Email"}
                errors={errors?.email?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                name="phone"
                label="Số điện thoại"
                placeholder={"Nhập số điện thoại"}
                errors={errors?.phone?.message}
              />
            )}
          />
          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                name="firstName"
                label="Họ"
                placeholder={"Nhập họ"}
                errors={errors?.firstName?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                name="lastName"
                label="Tên "
                placeholder="Nhập tên"
                errors={errors?.lastName?.message}
              />
            )}
          />
          <div className="space-y-2">
            <label className="font-16 font-bold">Giới tính</label>
            <div className="grid grid-cols-2 gap-x-6">
              <Controller
                name="gender"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    {["male", "female"]?.map((gender) => (
                      <Button
                        key={gender}
                        onChange={onchange}
                        type="button"
                        className={classNames("w-full h-14 pl-6 !justify-start capitalize", {
                          "bg-primary text-white font-bold": value === gender,
                          "bg-primary/10 text-primary font-normal": value !== gender,
                        })}
                        onClick={() => setValue("gender", gender)}
                      >
                        {gender == "male" ? "Nam" : "Nữ"}
                      </Button>
                    ))}
                    {errors?.gender?.message && (
                      <p className="text-12 text-error mt-1">{errors?.gender?.message}</p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <Controller
            name="birthday"
            control={control}
            render={({ field: { value, ref } }) => (
              <Datepicker
                label="Ngày sinh"
                value={value}
                onChange={(date) => {
                  setValue("birthday", date)
                }}
                errors={errors?.birthday?.message}
              />
            )}
          />
        </div>

        <Controller
          name="address.address"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              name="address.address"
              label="Địa chỉ"
              placeholder={"Nhập địa chỉ"}
              value={value}
              onChange={onChange}
              errors={errors?.address?.address?.message}
            />
          )}
        />
      </div>
      <div className="mt-4 underline flex px-4">
      <LinkComponent href={"/change_password"} locale={""} skipLocaleHandling={false}>
      Đổi mật khẩu
    </LinkComponent>
    <Button btnType="" className="fill text-[red]" type="button" loading={loading} onClick={logout}>
          Đăng xuất
        </Button>
    </div>
      <div className="flex gap-x-4 mt-10 p-4">
        <Button btnType="outline" className="fill" type="submit" loading={loading}>
          Lưu
        </Button>
        <Button
          btnType="outline"
          type="reset"
          onClick={() => (fromCheckIn ? onCloseModal() : navigate(-1))}
        >
          Huỷ
        </Button>
      </div>
    </form>
  )
}

export default CustomersForm
