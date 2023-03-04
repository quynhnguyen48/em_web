import Icon from "components/Icon";
import CustomersTable from "pages/Customers/components/CustomersTable";

const CustomerReferral = ({ referral }) => {
	return Array.isArray(referral) && referral?.length ? (
		<div>
			<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
				<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
					<Icon name="user" className="fill-primary w-8 h-8" />
				</div>
				<div>
					<p className="whitespace-nowrap text-24">Total Referred</p>
					<h2 className="text-36 font-bold">{referral?.length}</h2>
				</div>
			</div>
			<div>
				<CustomersTable data={referral} isModal />
			</div>
		</div>
	) : (
		<p className="text-center">No data</p>
	);
};

export default CustomerReferral;
