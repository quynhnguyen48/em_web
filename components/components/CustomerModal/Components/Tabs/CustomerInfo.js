import last from "lodash/last";

import Price from "components/Price";
import { formatDate } from "utils/dateTime";

const CustomerInfo = ({ customerInfo, userAnalytics }) => {
	return (
		<div className="grid grid-cols-4 gap-6 justify-between">
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Customer ID</h5>
				<p className="text-18">{customerInfo?.code}</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Full Name</h5>
				<p className="text-18">
					{customerInfo?.firstName} {customerInfo?.lastName}
				</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Phone Number</h5>
				<p className="text-18">{customerInfo?.phone}</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Address</h5>
				<p className="text-18">
					{customerInfo?.address
						? `${customerInfo?.address?.address || ""}, ${
								customerInfo?.address?.ward?.name || ""
						  }, ${customerInfo?.address?.district?.name || ""}, ${
								customerInfo?.address?.province?.name || ""
						  }`
						: "-"}
				</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Email</h5>
				<p className="text-18">{customerInfo?.email}</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Referral</h5>
				<p className="text-18 font-bold">
					{customerInfo?.referral?.firstName} {customerInfo?.referral?.lastName}
				</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">DoB</h5>
				<p className="text-18">{formatDate(customerInfo?.birthday, "DD/MM/YYYY")}</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Last Check-in</h5>
				<p className="text-18">
					{last(customerInfo?.check_ins)
						? formatDate(last(customerInfo?.check_ins)?.updatedAt, "DD MMMM, YYYY [|] HH:mm")
						: "-"}
				</p>
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Total Spent</h5>
				<Price priceClassName="text-18" price={userAnalytics?.totalSpent} />
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Total Debt</h5>
				<Price priceClassName="text-18" price={userAnalytics?.totalDebt} />
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Total Income</h5>
				<Price priceClassName="text-18" price={userAnalytics?.totalIncome} />
			</div>
			<div className="space-y-2">
				<h5 className="font-bold text-gray4">Total Expense</h5>
				<Price priceClassName="text-18" price={userAnalytics?.totalExpense} />
			</div>
		</div>
	);
};

export default CustomerInfo;
