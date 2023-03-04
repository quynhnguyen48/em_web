import Icon from "components/Icon";
import { BOOKING_STATUS } from "constants/Booking";
import BookingTable from "pages/Bookings/components/BookingTable";

const CustomerBookings = ({ bookings }) => {
	return Array.isArray(bookings) && bookings?.length ? (
		<div>
			<div className="flex space-x-6">
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="calendar-tick" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Booking</p>
						<h2 className="text-36 font-bold">{bookings.length}</h2>
					</div>
				</div>
				<div className="rounded-xl shadow-sm p-6 flex items-center space-x-4 w-fit">
					<div className="w-17 h-17 flex items-center justify-center rounded-full bg-primary/10">
						<Icon name="tick-circle" className="fill-primary w-8 h-8" />
					</div>
					<div>
						<p className="whitespace-nowrap">Total Confirmed</p>
						<h2 className="text-36 font-bold">
							{bookings.filter((booking) => booking.status === BOOKING_STATUS.CONFIRMED).length}
						</h2>
					</div>
				</div>
			</div>
			<div>
				<BookingTable isModal data={bookings} />
			</div>
		</div>
	) : (
		<p className="text-center">No data</p>
	);
};

export default CustomerBookings;
