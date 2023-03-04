import classNames from "classnames";

import { BOOKING_STATUS, BOOKING_STATUS_TITLE } from "constants/Booking";
import Tag from "./Tag";

const BookingStatusTag = ({ className, status, isRoundedFull }) => {
  return (
    <Tag
      name={BOOKING_STATUS_TITLE[status]}
      className={classNames({
        "bg-purple": status === BOOKING_STATUS.ON_SCHEDULED,
        "bg-green": status === BOOKING_STATUS.CONFIRMED,
        "bg-red": status === BOOKING_STATUS.CANCELED,
        "!rounded-lg": !isRoundedFull,
        [className]: true,
      })}
    />
  );
};

export default BookingStatusTag;
