import { useMemo } from "react"

import Table from "components/Table"
import Price from "components/Price"
import { formatDate } from "utils/dateTime"
import { PAYMENT_METHOD_TITLE } from "../../../constants/Transaction"

const TreatmentTransactionsTable = ({ data, loading, pageCount, fetchData }) => {
  const columns = useMemo(() => {
    return [
      {
        Header: "Transaction ID",
        accessor: (originalRow) => (
          <span className="font-bold text-primary">{originalRow?.code}</span>
        ),
        collapse: true,
        width: 150,
      },
      {
        Header: "Date",
        accessor: (originalRow) => <span>{formatDate(originalRow?.createdAt, "DD/MM/YYYY")}</span>,
        collapse: true,
        width: 110,
      },
      {
        Header: "Treatment",
        accessor: (originalRow) => <span>{originalRow?.treatment?.name}</span>,
        collapse: true,
        width: 110,
      },
      {
        Header: "Payment Method",
        accessor: (originalRow) => <span>{PAYMENT_METHOD_TITLE[originalRow?.paymentMethod]}</span>,
        collapse: true,
        width: 150,
      },
      {
        Header: "Total",
        accessor: (originalRow) => <Price price={originalRow?.total} />,
        collapse: true,
        width: 100,
      },
    ]
  }, [])

  return (
    <Table
      hidePagination
      isModal
      className="mt-6"
      columns={columns}
      data={data}
      fetchData={fetchData}
      loading={loading}
      pageCount={pageCount}
    />
  )
}

export default TreatmentTransactionsTable
