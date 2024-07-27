import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import React from "react";

const MultipleUploadComponent = ({
  label,
  placeholder,
  field,
  form,
  setForm,
}) => {
  const removeItem = (item) => {
    const updateField = form[field].filter((curr) => curr.name !== item.name);
    setForm({ ...form, [field]: updateField });
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div
          className={`grid w-full max-w-sm md:max-w-full ${
            form[field].length > 0 ? "col-span-1" : "col-span-2"
          } items-center gap-1.5`}
        >
          <Label className="text-base px-1">{label}</Label>
          <label className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  text-muted-foreground cursor-pointer">
            {placeholder}
            <input
              type="file"
              placeholder={placeholder}
              hidden
              onChange={(e) =>
                setForm({
                  ...form,
                  [field]: [...form[field], e.target.files[0]],
                })
              }
            />
          </label>
        </div>
        <div
          className={`${
            form[field].length === 0 ? "hidden" : "flex"
          } flex-row gap-3  flex-wrap flex-1 self-center pt-5`}
        >
          {form[field]?.length >= 0 &&
            form[field]?.map((item, index) => (
              <div
                key={index}
                className="p-1 rounded-sm px-2 flex flex-row gap-2 items-center bg-muted text-[13px] w-fit h-fit"
              >
                <p>
                  {item?.name.split(".")[0].slice(0, 8) +
                    "...." +
                    item?.name.split(".")[1]}
                </p>
                <Trash2
                  className="h-3 w-3 cursor-pointer text-red-500"
                  onClick={() => removeItem(item)}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MultipleUploadComponent;
