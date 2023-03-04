import classNames from "classnames";

const Badge = ({ children, isActive }) => {
  return (
    <div
      className={classNames("relative", {
        "after:content-[''] after:absolute after:-right-1 after:-top-1 after:bg-red after:w-2 after:h-2 after:rounded-full":
          isActive,
      })}
    >
      {children}
    </div>
  );
};

export default Badge;
