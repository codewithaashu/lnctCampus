import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import InputComponent from "@/shareable/InputComponent";
import React, { useState } from "react";

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleClick = () => {
    console.log(form);
  };
  return (
    <div className="flex justify-center w-full h-fit mt-3">
      <Card className="w-[480px]">
        {/* Heading */}
        <div className="p-2 flex gap-3 items-center rounded-t-sm bg-muted text-lg  font-semibold px-3">
          <h1>Change Password</h1>
        </div>
        <CardContent className="pt-5 flex flex-col w-full gap-5">
          <div className="flex flex-col gap-3">
            <InputComponent
              field={"currentPassword"}
              form={form}
              label={"Current Password"}
              placeholder={"Type current password here..."}
              type={"text"}
              setForm={setForm}
            />
            <InputComponent
              field={"newPassword"}
              form={form}
              label={"New Password"}
              placeholder={"Type new password here..."}
              type={"text"}
              setForm={setForm}
            />
            <InputComponent
              field={"confirmPassword"}
              form={form}
              label={"Confirm Password"}
              placeholder={"Type confirm password here..."}
              type={"text"}
              setForm={setForm}
            />
          </div>
          <Button onClick={handleClick}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChangePassword;
