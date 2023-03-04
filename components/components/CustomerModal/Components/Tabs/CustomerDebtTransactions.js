import { useMemo } from "react";
import sumBy from "lodash/sumBy";

import Icon from "components/Icon";
import TransactionTable from "pages/Transactions/components/TransactionTable";
import { abbreviateNumber } from "utils/number";
import { BILLING_TYPE } from "constants/Transaction";

const CustomerDebtTransactions = ({ debtTransactions }) => {
	const debtBalance = useMemo(
		() => sumBy(debtTransactions, (transaction) => parseFloat(transaction.debtBalance)),
		[debtTransactions]
	);
	const totalDebtCollection = useMemo(
		() =>
			sumBy(debtTransactions, (transaction) => {
				if (transaction.billingType === BILLING_TYPE.DEBT_COLLECTION)
					return parseFloat(transaction.total);
				return 0;
			}),
		[debtTransactions]
	);

	return Array.isArray(debtTransactions) && debtTransactions?.length ? (
		<div>
			<div className="flex space-x-6">
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="dollar-circle" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Debt Balance</p>
						<h2 className="text-36 font-bold text-orange">{abbreviateNumber(debtBalance)}</h2>
					</div>
				</div>
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="dollar-circle" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Debt Collection</p>
						<h2 className="text-36 font-bold text-blue3">
							{abbreviateNumber(totalDebtCollection)}
						</h2>
					</div>
				</div>
			</div>
			<div>
				<TransactionTable data={debtTransactions} />
			</div>
		</div>
	) : (
		<p className="text-center">No data</p>
	);
};

export default CustomerDebtTransactions;
