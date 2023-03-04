import sumBy from "lodash/sumBy";

import Icon from "components/Icon";
import { abbreviateNumber } from "utils/number";
import OrderTransactionsTable from "../OrderTransactionsTable";

const CustomerOrder = ({ orderTransactions }) => {
	return Array.isArray(orderTransactions) && orderTransactions?.length ? (
		<div>
			<div className="flex space-x-6">
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="box-tick" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Orders</p>
						<h2 className="text-36 font-bold">{orderTransactions.length}</h2>
					</div>
				</div>
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="dollar-circle" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Expense</p>
						<h2 className="text-36 font-bold text-blue3">
							{abbreviateNumber(
								sumBy(orderTransactions, (transaction) => parseInt(transaction.total))
							)}
						</h2>
					</div>
				</div>
			</div>
			<div>
				<OrderTransactionsTable data={orderTransactions} />
			</div>
		</div>
	) : (
		<p className="text-center">No data</p>
	);
};

export default CustomerOrder;
