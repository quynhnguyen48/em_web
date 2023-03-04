import classNames from "classnames";
import PropTypes from "prop-types";

export function Textarea({
  label,
  value,
  placeholder,
  id,
  name,
  className = "",
  errors,
  showError = true,
  onChange,
  size = "default",
  textareaClassName,
}) {
  return (
    <div className={className}>
      {label && (
        <label className="inline-block text-16 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          className={classNames(
            "w-full resize-none bg-white h-14 outline-none px-6 py-4.5 rounded-lg text-16 placeholder:text-secondary/30",
            {
              error: !!errors,
              [size]: true,
              [textareaClassName]: true,
            }
          )}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {showError && errors && (
          <span className="text-12 text-error mt-1">{errors}</span>
        )}
      </div>
    </div>
  );
}

export default Textarea;

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errors: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["large", "default", "small"]),
  showError: PropTypes.bool,
};
