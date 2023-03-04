import { useEffect, useRef } from "react"
import ReactSelect, { components } from "react-select"
import debounce from "lodash/debounce"

import Icon from "../../components/Icon"

const customStyles = {
  container: () => ({
    position: "relative",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#ffffff" : "#000000",
    backgroundColor: state.isSelected
      ? "#5CA79F"
      : state.isFocused
      ? "rgba(92, 167, 159, 0.3)"
      : "#ffffff",
    padding: "8px 24px",
    cursor: "pointer",
  }),
  control: () => ({
    alignItems: "center",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "56px",
    position: "relative",
    transition: "all 100ms ease 0s",
    padding: "0 24px",
    outline: "0px !important",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return { ...provided, opacity, transition }
  },
  // input: () => ({ display: "none" }),
  menu: () => ({
    top: "100%",
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: "8px",
    border: "none",
    boxShadow: "0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)",
    marginBottom: "8px",
    marginTop: "8px",
    position: "absolute",
    width: "100%",
    zIndex: "1",
  }),
  menuList: () => ({
    maxHeight: "300px",
    overflowY: "auto",
    paddingBottom: "0",
    paddingTop: "0",
    position: "relative",
    borderRadius: "8px",
  }),
}

const Option = (props) => {
  const ref = useRef()

  useEffect(() => {
    if (props.isSelected && ref.current.parentNode && ref?.current?.offsetTop) {
      ref.current.parentNode.scrollTop = ref?.current?.offsetTop - 80
    }
  }, [props.isSelected])

  return <components.Option {...props} innerRef={ref} />
}

const Select = ({
  isLoading = false,
  isMulti = false,
  isDisabled = false,
  isSecondary = false,
  isSearchable = true,
  name,
  label,
  options = [],
  value,
  placeholder,
  errors,
  showError = true,
  controlStyles,
  onChange,
  onInputChange,
  className,
  wrapperClassName,
  filterOption,
}) => {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {label && (
        <label className="text-16 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div
        className={`rounded-lg ${isSecondary ? "bg-primary md:bg-gray2" : "bg-white md:bg-gray2"}`}
      >
        <ReactSelect
          name={name}
          placeholder={<span className="text-secondary/30">{placeholder}</span>}
          styles={controlStyles ? { ...customStyles, ...controlStyles } : customStyles}
          value={value}
          onChange={onChange}
          options={options}
          isLoading={isLoading}
          isMulti={isMulti}
          isDisabled={isDisabled}
          isSearchable={isSearchable}
          className={className}
          filterOption={filterOption}
          onInputChange={debounce((newValue) => onInputChange?.(newValue), 300)}
          components={{
            DropdownIndicator: () => (
              <Icon
                name="arrows/down"
                className={`w-5 ${isSecondary ? "fill-white" : "fill-primary"}`}
              />
            ),
            SingleValue: ({ children, ...props }) => (
              <components.SingleValue {...props}>
                <span className={isSecondary ? "text-white" : "text-secondary"}>{children}</span>
              </components.SingleValue>
            ),
            Option,
          }}
        />
      </div>
      {showError && errors && <p className="text-12 text-error mt-1">{errors}</p>}
    </div>
  )
}

export default Select
