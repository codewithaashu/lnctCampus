import { Label } from "@/components/ui/label";
import React from "react";
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBulletList,
  BtnLink,
  BtnNumberedList,
  BtnUnderline,
  Separator,
} from "react-simple-wysiwyg";

const RichTextEditor = ({ label, field, form, setForm }) => {
  return (
    <div className="grid w-full gap-1.5 col-span-2">
      <Label className="text-base px-1">{label}</Label>
      <EditorProvider>
        <Editor
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <BtnLink />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
