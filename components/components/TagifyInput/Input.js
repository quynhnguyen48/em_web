import classNames from "classnames"
import PropTypes from "prop-types"
import { useEffect, useMemo, useState, useRef } from "react"
import Tagify from "@yaireo/tagify"

export function Input({
  label,
  hideLabel = false,
  value = "",
  placeholder,
  id,
  name,
  className = "",
  inputClassName = "",
  errors,
  required,
  suffix,
  prefix,
  showError = true,
  onChange,
  size = "default",
  disabled,
  whiteList,
  ...rest
}) {

  const ref = useRef()

  useEffect(() => {
    if (!whiteList || !ref.current) return;
    console.log('ref', whiteList, ref.current)
    const templates = {
      tag: function (tagData) {
        try {
          return `<tag title='${tagData.value
            }' contenteditable='false' spellcheck="false" class='tagify__tag ${tagData.class ? tagData.class : ""
            }' ${this.getAttributes(tagData)}>
                      <x title='remove tag' class='tagify__tag__removeBtn'></x>
                      <div>
                          <span class='tagify__tag-text'>${tagData.value}</span>
                      </div>
                  </tag>`
        } catch (err) { }
      },

      dropdownItem: function (tagData) {
        try {
          return `<div ${this.getAttributes(tagData)} class='tagify__dropdown__item ${tagData.class ? tagData.class : ""
            }' >
                          <span>${tagData.searchBy.toLowerCase()}</span> |
                          <span>${tagData.value}</span>
                      </div>`
        } catch (err) {
          console.error(err)
        }
      },
    }

    var tagify = new Tagify(ref.current, {
      // whitelist: tagifyWhitelist.reasons_to_get_hospitalized,
      whitelist: whiteList,
      dropdown: {
        // classname: "border border-green border-1",
        enabled: 0, // show the dropdown immediately on focus
        // maxItems: 5,
        position: "text", // place the dropdown near the typed text
        closeOnSelect: false, // keep the dropdown open after selecting a suggestion
        highlightFirst: true,
      },
      templates,
    })
  }, whiteList);

  return (
    <div className={`${disabled && "opacity-30"} ${className}`}>
      {label && !hideLabel && (
        <label className="inline-block text-16 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && <div className="absolute top-4 left-6">{prefix}</div>}
        <input
          ref={ref}
          className={classNames(
            "border border-1 border-green w-full bg-white md:bg-gray2 outline-none px-6 rounded-lg text-16 placeholder:text-secondary/30 disabled:cursor-not-allowed",
            {
              error: !!errors,
              [size]: true,
              [inputClassName]: true,
              "!pl-19.5": prefix,
              "!pr-19.5": suffix,
            }
          )}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        {suffix && <div className="absolute top-4 right-6">{suffix}</div>}
        {showError && errors && <p className="text-12 text-error mt-1">{errors}</p>}
      </div>
    </div>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errors: PropTypes.string,
  required: PropTypes.bool,
  suffix: PropTypes.node,
  size: PropTypes.oneOf(["large", "default", "small"]),
  showError: PropTypes.any,
  disabled: PropTypes.bool,
}
