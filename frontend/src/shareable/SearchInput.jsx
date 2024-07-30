import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = ({ placeholder, className, value, setValue }) => {
  return (
    <div className="flex justify-between">
      <div
        className={cn(
          "p-2 px-2 flex flex-row gap-2 items-center rounded-md border-[1px] w-[320px]",
          className
        )}
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          className="text-sm w-full outline-none bg-background text-muted-foreground"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
