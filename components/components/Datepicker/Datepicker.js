import ReactDatePicker, { registerLocale } from "react-datepicker"
import en from "date-fns/locale/en-GB"
import Icon from "../../components/Icon"
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.min.css";

registerLocale("en-GB", en)

const Datepicker = ({
  label,
  name,
  errors,
  value,
  onChange,
  minDate = null,
  maxDate = null,
  filterDate,
  dateFormat = "dd/MM/yyyy",
  className = "",
  iconClassName = "",
  showMonthYearPicker = false,
  dayClassName,
  startDate,
  endDate,
  selectsRange,
  disabled = false,
}) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-16 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        <ReactDatePicker
          dateFormat={dateFormat}
          placeholderText="DD/MM/YYYY"
          selected={!!Number(value) ? value : null}
          onChange={(date) => {
            onChange(date);
          }}
          onChangeRaw={(e) => {
            if (e.nativeEvent.inputType == "insertText" && 
              (e.target.value.length == 2 || e.target.value.length == 5)) { 
              e.target.value = e.target.value + "/"
            } else if  (e.nativeEvent.inputType == "deleteContentBackward" && 
            (e.target.value.length == 2 || e.target.value.length == 5)) { 
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
          }
          }}
          minDate={minDate}
          maxDate={maxDate}
          filterDate={filterDate}
          className={className}
          dayClassName={dayClassName}
          locale="en-GB"
          showMonthYearPicker={showMonthYearPicker}
          startDate={startDate}
          endDate={endDate}
          selectsRange={selectsRange}
          disabled={disabled}
        />
        <Icon name="calendar" className={`fill-primary absolute top-4 right-2 ${iconClassName}`} />
      </div>
      {errors && <span className="text-12 text-error mt-1">{errors}</span>}
    </div>
  )
}

export default Datepicker
