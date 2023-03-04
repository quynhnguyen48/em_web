import sumBy from "lodash/sumBy";

import Icon from "components/Icon";
import { abbreviateNumber } from "utils/number";
import TreatmentTransactionsTable from "../TreatmentTransactionsTable";

const CustomerTreatment = ({ treatmentTransactions }) => {
	return Array.isArray(treatmentTransactions) && treatmentTransactions?.length ? (
		<div>
			<div className="flex space-x-6">
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="grammerly" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Used Treatment</p>
						<h2 className="text-36 font-bold">{treatmentTransactions.length}</h2>
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
								sumBy(treatmentTransactions, (transaction) => parseInt(transaction.total))
							)}
						</h2>
					</div>
				</div>
			</div>
			<div>
				<TreatmentTransactionsTable data={treatmentTransactions} />
			</div>
		</div>
	) : (
		<p className="text-center">No data</p>
	);
};

export default CustomerTreatment;
