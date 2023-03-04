export const BILLING_TYPE = {
  MEMBER_CARD: "member-card",
  SERVICE_CARD: "service-card",
  TREATMENT: "treatment",
  ORDER: "order",
  PRODUCT: "product",
  DEBT_COLLECTION: "debt-collection",
  CARD_CANCELED: 'card-canceled'
};

export const BILLING_TYPE_TITLE = {
  [BILLING_TYPE.MEMBER_CARD]: "Member Card",
  [BILLING_TYPE.SERVICE_CARD]: "Service Card",
  [BILLING_TYPE.TREATMENT]: "Treatment",
  [BILLING_TYPE.ORDER]: "Order",
  [BILLING_TYPE.PRODUCT]: "Product",
  [BILLING_TYPE.DEBT_COLLECTION]: "Debt Collection",
  [BILLING_TYPE.CARD_CANCELED]: "Card Canceled",
};

export const TRANSACTION_TYPE = {
  INCOME: "income",
  EXPENSE: "expense",
};

export const TRANSACTION_TYPE_TITLE = {
  [TRANSACTION_TYPE.INCOME]: "Income",
  [TRANSACTION_TYPE.EXPENSE]: "Expense",
};

export const PAYMENT_METHOD = {
  CASH: "cash",
  BANK_TRANSFER: "bankTransfer",
  VISA: "visa",
  MASTERCARD: "mastercard",
  MEMBER_CARD: "member-card",
  SERVICE_CARD: "service-card",
};

export const PAYMENT_METHOD_TITLE = {
  [PAYMENT_METHOD.CASH]: "Cash",
  [PAYMENT_METHOD.BANK_TRANSFER]: "Bank Transfer",
  [PAYMENT_METHOD.VISA]: "Visa",
  [PAYMENT_METHOD.MASTERCARD]: "Mastercard",
  [PAYMENT_METHOD.MEMBER_CARD]: "Member Card",
  [PAYMENT_METHOD.SERVICE_CARD]: "Service Card",
};

export const TRANSACTION_CHECKIN_STATUS = {
  NEW: "new",
  WAITING: "waiting",
  PROGRESS: "progress",
  DONE: "done",
  PAID: "paid",
  CONFIRMED: "confirmed"
}
