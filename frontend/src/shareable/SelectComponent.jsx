import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComponent = ({
  label,
  items,
  placeholder,
  triggerWidth,
  field,
  form,
  setForm,
}) => {
  return (
    <Select onValueChange={(val) => setForm({ ...form, [field]: val })}>
      <SelectTrigger
        className={`${triggerWidth} focus:ring-0 focus:ring-transparent py-1 `}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((curr, index) => (
            <SelectItem value={curr.value} key={index}>
              {curr.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
