import Icon from "components/Icon";

const DataItem = ({ title, value, icon, footer, valueClassName = "" }) => {
  return (
    <div className="flex gap-x-2">
      <div className="flex items-center justify-center w-10.5 h-10.5 rounded-full bg-primary/10">
        <Icon name={icon} className="w-6 h-6 fill-primary" />
      </div>
      <div className="flex-1 overflow-x-hidden">
        <p className="text-12 font-bold text-secondary/[0.56]">{title}</p>
        <div className={`text-16 ${valueClassName}`}>{value}</div>
        {footer}
      </div>
    </div>
  );
};
export default DataItem;
