import { useEffect, useState } from "react"

import Avatar from "components/Avatar"
import Button from "components/Button"
import Icon from "components/Icon"
import { BILLING_TYPE, PAYMENT_METHOD } from "constants/Transaction"
import { getBookingsByUserId } from "services/api/bookings"
import { getListCards } from "services/api/card"
import { getTransactionAnalyticsByUser, getTransactionsByUserId } from "services/api/transactions"
import { getReferralByUserId, getUserById } from "services/api/users"
import { getStrapiMedia } from "utils/media"
import { formatStrapiArr, formatStrapiObj } from "utils/strapi"
import CustomerBookings from "./Components/Tabs/CustomerBookings"
import CustomerCards from "./Components/Tabs/CustomerCards"
import CustomerDebtTransactions from "./Components/Tabs/CustomerDebtTransactions"
import CustomerInfo from "./Components/Tabs/CustomerInfo"
import CustomerOrder from "./Components/Tabs/CustomerOrder"
import CustomerProducts from "./Components/Tabs/CustomerProducts"
import CustomerReferral from "./Components/Tabs/CustomerReferral"
import CustomerTreatment from "./Components/Tabs/CustomerTreatment"

const ACTIONS = [
  {
    key: "info",
    icon: "user",
  },
  {
    key: "referral",
    icon: "chat",
  },
  {
    key: "debtTransactions",
    icon: "dollar-circle",
  },
  {
    key: "productTransactions",
    icon: "milk",
  },
  {
    key: "orderTransactions",
    icon: "box-tick",
  },
  {
    key: "treatmentTransactions",
    icon: "grammerly",
  },
  {
    key: "cardTransactions",
    icon: "money",
  },
  {
    key: "bookings",
    icon: "calendar-tick",
  },
]

const CustomerModal = ({ customerId, visibleModal, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState(null)
  const [actionSelected, setActionSelected] = useState(ACTIONS[0].key)
  const [referral, setReferral] = useState([])
  const [debtTransactions, setDebtTransactions] = useState([])
  const [productTransactions, setProductTransactions] = useState([])
  const [orderTransactions, setOrderTransactions] = useState([])
  const [treatmentTransactions, setTreatmentTransactions] = useState([])
  const [listCards, setListCards] = useState([])
  const [bookings, setBookings] = useState([])
  const [userAnalytics, setUserAnalytics] = useState()

  const handleCloseModal = () => {
    setActionSelected(ACTIONS[0].key)
    onClose()
  }

  useEffect(() => {
    if (visibleModal) {
      ;(async () => {
        const res = await getUserById(customerId)
        if (res?.data) {
          setCustomerInfo(res.data)
        }
        const analyticsRes = await getTransactionAnalyticsByUser({ userId: customerId })
        if (analyticsRes?.data) {
          setUserAnalytics(analyticsRes.data)
        }
      })()
    } else {
      setCustomerInfo(null)
      setReferral([])
      setDebtTransactions([])
      setProductTransactions([])
      setOrderTransactions([])
      setTreatmentTransactions([])
      setListCards([])
      setBookings([])
    }
  }, [customerId, visibleModal])

  const handleClickAction = async (key) => {
    setActionSelected(key)
    switch (key) {
      case "referral":
        try {
          const res = await getReferralByUserId(customerId)
          if (res?.data) {
            setReferral(res?.data)
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      case "debtTransactions":
        try {
          const res = await getTransactionsByUserId(customerId, {
            $or: [
              {
                debtBalance: {
                  $ne: 0,
                },
              },
              {
                billingType: {
                  $eq: BILLING_TYPE.DEBT_COLLECTION,
                },
              },
            ],
          })
          if (res?.data) {
            setDebtTransactions(
              formatStrapiArr(res?.data)?.map((transaction) => ({
                ...transaction,
                user: formatStrapiObj(transaction.user),
              }))
            )
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      case "productTransactions":
        try {
          const res = await getTransactionsByUserId(customerId, {
            billingType: {
              $eq: BILLING_TYPE.PRODUCT,
            },
          })
          if (res?.data) {
            setProductTransactions(
              formatStrapiArr(res?.data).map((transaction) => ({
                ...transaction,
              }))
            )
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      case "orderTransactions":
        try {
          const res = await getTransactionsByUserId(customerId, {
            billingType: {
              $eq: BILLING_TYPE.ORDER,
            },
          })
          if (res?.data) {
            setOrderTransactions(
              formatStrapiArr(res?.data).map((transaction) => ({
                ...transaction,
                order: formatStrapiObj(transaction.order),
              }))
            )
            console.log(
              "res?.data",
              formatStrapiArr(res?.data).map((transaction) => ({
                ...transaction,
                order: formatStrapiObj(transaction.order),
              }))
            )
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      case "treatmentTransactions":
        try {
          const res = await getTransactionsByUserId(customerId, {
            billingType: {
              $eq: BILLING_TYPE.TREATMENT,
            },
          })
          if (res?.data) {
            setTreatmentTransactions(
              formatStrapiArr(res?.data).map((transaction) => ({
                ...transaction,
                treatment: formatStrapiObj(transaction.treatment),
              }))
            )
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      case "cardTransactions":
        try {
          const res = await getListCards(
            { pageSize: 1000 },
            {
              user: {
                id: {
                  $eq: customerId,
                },
              },
            }
          )
          if (res?.data) {
            setListCards(
              formatStrapiArr(res?.data).map((card) => ({
                ...card,
                user: formatStrapiObj(card.user),
                service: formatStrapiObj(card.service),
                transactions: formatStrapiArr(card.transactions),
              }))
            )
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      case "bookings":
        try {
          const res = await getBookingsByUserId(customerId)
          if (res?.data) {
            setBookings(
              formatStrapiArr(res?.data).map((booking) => ({
                ...booking,
                treatment: formatStrapiObj(booking.treatment),
              }))
            )
          }
        } catch (error) {
          console.log("error", error)
        }
        break
      default:
        break
    }
  }

  return (
    <>
      <div
        className={`justify-center items-center flex overflow-hidden fixed inset-0 z-20 outline-none focus:outline-none transition-all ${
          visibleModal ? "visible" : "invisible"
        }`}
      >
        <div className="relative p-12 pt-20 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] w-[1028px] min-h-[460px] bg-white">
          <button className="absolute top-6 right-6 z-10" onClick={handleCloseModal}>
            <Icon name="close-circle" className="fill-orange w-7 h-7" />
          </button>
          {customerInfo && (
            <div className="flex justify-between">
              <div className="flex align-center space-x-4">
                <Avatar
                  size={120}
                  src={getStrapiMedia({ url: customerInfo?.avatar })}
                  name={`${customerInfo?.firstName} ${customerInfo?.lastName}`}
                />
                <div className="self-center space-y-2">
                  <h4>
                    <b className="text-24">{`${customerInfo?.firstName} ${customerInfo?.lastName}`}</b>
                  </h4>
                  <p className="text-18">{customerInfo?.email}</p>
                  <p className="text-18">{customerInfo?.code}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {ACTIONS.map((item) => {
                  const isActive = item.key === actionSelected
                  return (
                    <Button
                      key={item.key}
                      btnSize="auto"
                      shape="circle"
                      icon={
                        <Icon
                          name={item.icon}
                          className={`${isActive ? "fill-white" : "fill-primary"} w-5 h-5`}
                        />
                      }
                      className={isActive ? "bg-primary" : "bg-primary/10"}
                      onClick={() => handleClickAction(item.key)}
                    />
                  )
                })}
              </div>
            </div>
          )}
          <div className="mt-8">
            {actionSelected === "info" && customerInfo && (
              <CustomerInfo customerInfo={customerInfo} userAnalytics={userAnalytics} />
            )}

            {actionSelected === "referral" && <CustomerReferral referral={referral} />}

            {actionSelected === "debtTransactions" && (
              <CustomerDebtTransactions debtTransactions={debtTransactions} />
            )}

            {actionSelected === "productTransactions" && (
              <CustomerProducts productTransactions={productTransactions} />
            )}

            {actionSelected === "orderTransactions" && (
              <CustomerOrder orderTransactions={orderTransactions} />
            )}

            {actionSelected === "treatmentTransactions" && (
              <CustomerTreatment treatmentTransactions={treatmentTransactions} />
            )}

            {actionSelected === "cardTransactions" && <CustomerCards cards={listCards} />}

            {actionSelected === "bookings" && <CustomerBookings bookings={bookings} />}
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-10 bg-primary/70 transition-all ${
          visibleModal ? "visible" : "invisible"
        }`}
      />
    </>
  )
}

export default CustomerModal
