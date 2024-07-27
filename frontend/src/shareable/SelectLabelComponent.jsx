import { Label } from "@/components/ui/label";
import React from "react";
import SelectComponent from "./SelectComponent";

const SelectLabelComponent = ({
  title,
  items,
  placeholder,
  label,
  triggerWidth,
  field,
  form,
  setForm,
}) => {
  return (
    <div className="grid w-full max-w-sm md:max-w-full items-center gap-1.5">
      <Label className="text-base px-1">{title}</Label>
      <SelectComponent
        items={items}
        triggerWidth={triggerWidth}
        placeholder={placeholder}
        label={label}
        field={field}
        form={form}
        setForm={setForm}
      />
    </div>
  );
};

export default SelectLabelComponent;
