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

const SelectComponent = ({ label, items, placeholder, triggerWidth }) => {
  return (
    <Select>
      <SelectTrigger
        className={`${triggerWidth} focus:ring-0 focus:ring-transparent h-fit py-1`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((curr, index) => (
            <SelectItem value={curr} key={index}>
              {curr}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
