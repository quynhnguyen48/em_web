import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import debounce from "lodash/debounce";

import Icon from "components/Icon";
import Input from "components/Input";

const SearchInput = ({ className, onSearch, ...props }) => {
  const { control, setValue } = useForm({ defaultValues: { searchKey: "" } });

  const handleSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 200),
    []
  );

  return (
    <Controller
      name="searchKey"
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <Input
          suffix={
            value ? (
              <button
                onClick={() => {
                  handleSearch("");
                  setValue("searchKey", "");
                }}
              >
                <Icon name="close-circle" className="fill-gray w-6" />
              </button>
            ) : (
              <Icon name="search" />
            )
          }
          inputClassName="!rounded-full !bg-primary/10"
          className={className}
          value={value}
          onChange={(e) => {
            onChange(e);
            handleSearch(e.target.value?.toLocaleLowerCase());
          }}
          {...props}
        />
      )}
    />
  );
};

export default SearchInput;
