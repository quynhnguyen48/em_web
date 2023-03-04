import classNames from "classnames";
import PropTypes from "prop-types";

import Button from "components/Button";
import Icon from "components/Icon";

const Drawer = ({ children, open, onClose, contentClassName }) => {
  return (
    <div>
      {open && (
        <div
          className="fixed h-full w-full top-0 right-0 !m-0 bg-primary/50 cursor-pointer z-10"
          onClick={onClose}
        />
      )}
      <div
        className={classNames(
          "fixed right-0 top-0 max-w-[680px] w-full z-[100] h-full bg-white translate-x-full ease-out duration-300 pt-8 flex flex-col",
          {
            "translate-x-0": open,
            [contentClassName]: true,
          }
        )}
      >
        <div className="px-10 md:px-5">
          <Button
            btnSize="auto"
            btnType="text"
            icon={<Icon name="close-circle" className="fill-red" />}
            onClick={onClose}
          />
        </div>
        <div className="overflow-y-auto px-10 md:px-5 flex-1">
          <div className="py-6 flex-1 flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

Drawer.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};
