import Icon from "components/Icon"
import CardTransactionsTable from "../CardTransactionsTable"

const CustomerCards = ({ cards }) => {
  return Array.isArray(cards) && cards?.length ? (
    <div>
      <div className="flex space-x-6">
        <div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
          <div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
            <Icon name="money" className="fill-primary w-8 h-8" />
          </div>
          <div>
            <p className="whitespace-nowrap">Total Cards</p>
            <h2 className="text-36 font-bold">{cards.length}</h2>
          </div>
        </div>
      </div>
      <div>
        <CardTransactionsTable data={cards} />
      </div>
    </div>
  ) : (
    <p className="text-center">No data</p>
  )
}

export default CustomerCards
