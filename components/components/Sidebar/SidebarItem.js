import { useMemo } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Icon from "components/Icon";

const SidebarItem = ({ item }) => {
  let location = useLocation();

  const isActive = useMemo(
    () =>
      (item.url === "/"
        ? location?.pathname === "/"
        : location?.pathname?.startsWith(item.url)) ||
      item?.subItems?.some((subItem) => location?.pathname === subItem.url),
    [item?.subItems, item.url, location?.pathname]
  );

  return (
    <>
      <Link
        to={item.url}
        className={classNames(
          "relative flex items-center gap-x-4 pl-6 last:pb-10",
          {
            "opacity-30": !isActive,
            "before:content-[''] before:absolute before:left-0 before:bg-green2 before:w-2 before:h-6 before:rounded-r":
              isActive,
          }
        )}
      >
        <div className="w-6 h-6">
          <Icon
            name={`${item.icon}${isActive ? "-active" : ""}`}
            width={24}
            height={24}
            className={classNames({
              "fill-primary": isActive,
              "fill-secondary": !isActive && item.icon !== "sidebar/coin",
            })}
          />
        </div>
        <span
          className={classNames("text-14 font-bold", {
            "text-primary": isActive,
            "text-secondary": !isActive,
          })}
        >
          {item.name}
        </span>
      </Link>
      {isActive &&
        item?.subItems?.map((subItem) => {
          const isActiveItem = location?.pathname === subItem.url;

          return (
            <Link
              key={subItem.url}
              to={subItem.url}
              className={classNames(
                "relative flex items-center gap-x-4 pl-16 last:pb-10",
                {
                  "opacity-30": !isActiveItem,
                }
              )}
            >
              <span
                className={classNames("text-14 font-bold", {
                  "text-primary": isActiveItem,
                  "text-secondary": !isActiveItem,
                })}
              >
                {subItem.name}
              </span>
            </Link>
          );
        })}
    </>
  );
};

export default SidebarItem;
