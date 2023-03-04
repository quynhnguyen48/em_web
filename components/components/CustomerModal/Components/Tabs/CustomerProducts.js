import sumBy from "lodash/sumBy";

import Icon from "components/Icon";
import { abbreviateNumber } from "utils/number";
import ProductTransactionsTable from "../ProductTransactionsTable";

const CustomerProducts = ({ productTransactions }) => {
	return Array.isArray(productTransactions) && productTransactions?.length ? (
		<div>
			<div className="flex space-x-6">
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="milk" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Bought Products</p>
						<h2 className="text-36 font-bold">
							{sumBy(productTransactions, (transaction) => transaction.products.length)}
						</h2>
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
								sumBy(productTransactions, (transaction) => parseInt(transaction.total))
							)}
						</h2>
					</div>
				</div>
			</div>
			<div>
				<ProductTransactionsTable data={productTransactions} />
			</div>
		</div>
	) : (
		<p className="text-center">No data</p>
	);
};

export default CustomerProducts;
