import classNames from "classnames"
import PropTypes from "prop-types"
import Loading from "../../components/Loading"


const TYPES = {
  primary:
    "flex items-center justify-center bg-green-900 text-white font-bold hover:opacity-80",
  outline:
    "flex items-center justify-center border-1 border-primary text-primary hover:opacity-80",
  text: "",
}

const SIZES = {
  default: "text-14 font-bold h-10 rounded-lg px-4",
  medium: "text-16 font-bold h-14 rounded-lg px-6 bg-darkPrimary",
  small: "text-14 font-bold h-7 rounded-lg px-2",
  auto: "",
}

const SHAPE = {
  circle: "w-10 h-10 p-0 rounded-full",
  auto: "",
}

const Button = (
  {
    btnType = "primary",
    btnSize = "default",
    className,
    children,
    onClick,
    loading = false,
    type,
    icon,
    shape = "auto",
    ...props
  }) => {
  const LoadingComponent = () => {
    return (
      <Loading
        className={classNames({
          "!border-primary": btnType === "outline",
          "!w-4 !h-4": btnSize === "small",
        })}
      />
    )
  }

  return (
    <button
      type={type}
      onClick={loading ? () => null : onClick}
      className={classNames(
        "disabled:cursor-not-allowed disabled:opacity-70 transition whitespace-nowrap",
        TYPES[btnType],
        SIZES[btnSize],
        SHAPE[shape],
        className
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      <div
        className={classNames("flex items-center m-auto", {
          "gap-x-2": (!!icon || loading) && !!children,
        })}
      >
        {loading && !icon && <LoadingComponent/>}
        {icon && (loading && children ? <LoadingComponent/> : icon)}
        {children}
      </div>
    </button>
  )
}

export default Button

Button.propTypes = {
  btnType: PropTypes.oneOf(["primary", "outline", "text"]),
  btnSize: PropTypes.oneOf(["default", "small", "medium", "auto"]),
  shape: PropTypes.oneOf(["circle", "auto"]),
  className: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}
