import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import CoordinatorAddDialog from "./CoordinatorAddDialog";

const CoordinatorAddBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <UserPlus className="pr-[6px]" />
        Add Coordinator
      </Button>
      <CoordinatorAddDialog setOpen={setOpen} open={open} />
    </>
  );
};

export default CoordinatorAddBtn;
