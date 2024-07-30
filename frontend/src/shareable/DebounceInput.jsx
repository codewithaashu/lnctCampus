import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const DebouncedInput = ({
  value: initValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // *  0.5s after set value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <SearchInput
      placeholder={"Search by any field"}
      value={value}
      setValue={setValue}
    />
  );
};

export default DebouncedInput;
