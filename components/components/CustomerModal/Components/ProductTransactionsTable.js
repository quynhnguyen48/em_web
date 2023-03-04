import { useMemo } from "react"

import Table from "components/Table"
import Price from "components/Price"
import { formatDate } from "utils/dateTime"

const ProductTransactionsTable = ({ data, loading, pageCount, fetchData }) => {
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
        Header: "Products",
        accessor: (originalRow) => (
          <>
            {originalRow?.products.map((product) => (
              <span className="block">{product.title}</span>
            ))}
          </>
        ),
        collapse: true,
        width: 200,
      },
      {
        Header: "Quantity",
        accessor: (originalRow) => <span>{originalRow?.products.length}</span>,
        collapse: true,
        width: 100,
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

export default ProductTransactionsTable
