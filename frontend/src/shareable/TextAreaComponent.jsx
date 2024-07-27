import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TextAreaComponent = ({ placeholder, label, form, setForm, field }) => {
  return (
    <div className="grid w-full gap-1.5">
      <Label className="text-base px-1">{label}</Label>
      <Textarea
        placeholder={placeholder}
        className="focus-visible:ring-0 focus-visible:ring-transparent resize-none"
        value={form[field]}
        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
      />
    </div>
  );
};

export default TextAreaComponent;
