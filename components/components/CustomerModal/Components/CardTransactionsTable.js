import { useCallback, useMemo } from "react"
import sumBy from "lodash/sumBy"

import Table from "components/Table"
import Price from "components/Price"
import { PAYMENT_METHOD, PAYMENT_METHOD_TITLE } from "constants/Transaction"

const TreatmentTransactionsTable = ({ data, loading, pageCount, fetchData }) => {
  const getTotalExpense = useCallback((cardType, transactions) => {
    return sumBy(transactions, (transaction) =>
      transaction?.paymentMethod === cardType ? parseInt(transaction?.total) : 0
    )
  }, [])

  const columns = useMemo(() => {
    return [
      {
        Header: "Card ID",
        accessor: (originalRow) => (
          <span className="font-bold text-primary">{originalRow?.code}</span>
        ),
        collapse: true,
        width: 150,
      },
      {
        Header: "Type",
        accessor: (originalRow) => <span>{PAYMENT_METHOD_TITLE[originalRow?.type]}</span>,
        collapse: true,
        width: 150,
      },
      {
        Header: "Treatment",
        accessor: (originalRow) => <span>{originalRow?.service?.name || "-"}</span>,
        collapse: true,
        width: 110,
      },
      {
        Header: "Remain Value",
        accessor: (originalRow) =>
          originalRow?.type === PAYMENT_METHOD.MEMBER_CARD ? (
            <Price price={originalRow?.remainValue} />
          ) : (
            <span>
              {originalRow?.remainValue}/{originalRow?.usageLimit}
            </span>
          ),
        collapse: true,
        width: 110,
      },
      {
        Header: "Expense",
        accessor: (originalRow) => (
          <Price price={getTotalExpense(originalRow?.type, originalRow?.transactions)} />
        ),
        collapse: true,
        width: 100,
      },
    ]
  }, [getTotalExpense])

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
