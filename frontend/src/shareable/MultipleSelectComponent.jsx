import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

const MultipleSelectComponent = ({
  label,
  items,
  emptyPlaceholder,
  placeholder,
  field,
  form,
  setForm,
  isDialog = false,
}) => {
  const [open, setOpen] = useState(false);
  const removeItem = (value) => {
    const updateField = form[field].filter((c) => c.value !== value);
    setForm({ ...form, [field]: updateField });
  };
  const handleClick = (item) => {
    const data = form[field];
    data.find((c) => c.value === item.value)
      ? setForm({
          ...form,
          [field]: data.filter((c) => c.value !== item.value),
        })
      : setForm({ ...form, [field]: [...data, item] });
  };
  const popoverWidth =
    window.innerWidth - 210 - (window.innerWidth - 210) / 12 - 80;
  return (
    <div className="grid w-full gap-1.5 col-span-2">
      <Label className="text-base px-1">{label}</Label>
      <Popover open={open} onOpenChange={setOpen} className="w-full">
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="flex justify-between hover:bg-transparent h-fit"
          >
            <p className="flex gap-2 w-11/12 flex-wrap text-muted-foreground">
              {placeholder}
            </p>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className=" p-0"
          style={{ width: isDialog ? "680px" : popoverWidth + "px" }}
        >
          <Command>
            <CommandInput placeholder="Search course..." />
            <CommandEmpty>{emptyPlaceholder}</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {items.map((item, index) => (
                  <CommandItem
                    key={index}
                    value={item.value}
                    onSelect={() => {
                      handleClick(item);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        form[field].find((c) => c.value === item.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex flex-row gap-3 flex-wrap">
        {form[field].length > 0 &&
          form[field].map((item, index) => (
            <div
              key={index}
              className="p-1 rounded-full px-2 flex flex-row gap-2 items-center bg-muted text-[13px] w-fit"
            >
              <p>{item.label}</p>
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => removeItem(item.value)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultipleSelectComponent;
