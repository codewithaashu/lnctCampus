import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const DateComponent = ({ placeholder, label, field, form, setForm }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    setForm({ ...form, [field]: date });
  }, [date]);
  return (
    <div className="grid w-full max-w-sm md:max-w-full items-center gap-1.5">
      <Label className="text-base px-1">{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full font- flex justify-between hover:bg-transparent",
              !form[field] && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateComponent;
