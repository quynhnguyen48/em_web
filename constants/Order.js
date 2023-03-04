export const ORDER_STATUS = {
  DRAFT: "draft",
  COMPLETED: "done",
  CANCELED: "canceled",
  ORDERED: "ordered",
};

export const ORDER_STATUS_TITLE = {
  [ORDER_STATUS.DRAFT]: "Chưa thanh toán",
  [ORDER_STATUS.COMPLETED]: "Hoàn thành",
  [ORDER_STATUS.CANCELED]: "Huỷ",
  [ORDER_STATUS.ORDERED]: "Đã thanh toán",
};

export const ORDER_PAYMENT_METHOD = {
  CASH_ON_DELIVERY: "cashOnDelivery",
  MOMO: "momo",
  VNPAY: "vnpay",
};

export const ORDER_PAYMENT_METHOD_TITLE = {
  [ORDER_PAYMENT_METHOD.CASH_ON_DELIVERY]: "Cash On Delivery",
  [ORDER_PAYMENT_METHOD.MOMO]: "Momo",
  [ORDER_PAYMENT_METHOD.VNPAY]: "VNPAY",
};
