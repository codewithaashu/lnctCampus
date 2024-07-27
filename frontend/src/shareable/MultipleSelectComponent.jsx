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
}) => {
  const [open, setOpen] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const removeItem = (value) => {
    setSelectItem(selectItem.filter((c) => c.value !== value));
  };
  const handleClick = (item) => {
    selectItem.find((c) => c.value === item.value)
      ? setSelectItem(selectItem.filter((c) => c.value !== item.value))
      : setSelectItem([...selectItem, item]);
  };
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
            <p className="flex gap-2 w-11/12 flex-wrap">
              {selectItem.length === 0
                ? placeholder
                : selectItem.map((item, index) => (
                    <div
                      key={index}
                      className="p-1 rounded-full px-2 flex flex-row gap-3 items-center bg-muted text-[13px]"
                    >
                      <p>{item.label}</p>
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeItem(item.value)}
                      />
                    </div>
                  ))}
            </p>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-sm p-0">
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
                        selectItem.find((c) => c.value === item.value)
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
    </div>
  );
};

export default MultipleSelectComponent;
