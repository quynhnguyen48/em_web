import { formatPrice } from "utils/number";

const Price = ({
  price = 0,
  className = "",
  prefix = "",
  suffix = "đ",
  suffixClassName = "",
  priceClassName = "",
}) => {
  return (
    <span className={`block text-16 ${className}`}>
      <span className={`text-orange font-bold ${priceClassName}`}>
        <span>{prefix}</span>
        {formatPrice(price)}
      </span>
      <span className={suffixClassName}>{suffix}</span>
    </span>
  );
};

export default Price;
