import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import TPOAddDialog from "./TPOAddDialog";

const TPOAddBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <UserPlus className="pr-[6px]" />
        Add TPO
      </Button>
      <TPOAddDialog
        setOpen={setOpen}
        open={open}
        editable={false}
        form={{
          image: "",
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          contactNo: "",
          whatsappNo: "",
          currentAddress: "",
          permanentAddress: "",
          department: "",
        }}
      />
    </>
  );
};

export default TPOAddBtn;
