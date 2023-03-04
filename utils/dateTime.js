import dayjs from "dayjs";

export const formatDate = (date, format = "DD MMMM, YYYY") => {
  return dayjs(date).format(format);
};
