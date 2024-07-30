import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import StudentDetailsBoxHeader from "./StudentDetailsBoxHeader";
import { tpoDetails } from "@/db/tpoDetails";
const ViewTPODetails = ({ open, setOpen }) => {
  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] max-w-full">
        <div className="py-4">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex gap-5 flex-row items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/confident-male-teacher-wearing-glasses-sitting-table-with-school-tools-classroom_141793-114409.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user"
                alt="Human"
                className="w-[100px] h-[100px] rounded-full object-center aspect-square"
              />
              <div className="flex flex-col gap-[1px] items-center">
                <h1 className="text-lg font-semibold">Virendra Tiwari</h1>
                <p className="text-xs font-semibold text-muted-foreground">
                  LNCT MCA TPO
                </p>
              </div>
            </div>
            {/* Peronal Details */}
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-semibold text-sky-700">
                Personal Details
              </h1>
              <div className="flex flex-col gap-[2px] w-full">
                {tpoDetails?.map((curr, index) => {
                  return (
                    <div
                      className="grid grid-cols-2 text-card-foreground font-medium w-full"
                      key={index}
                    >
                      <h1 className="text-sm font-medium">{curr.label}</h1>
                      <p>
                        :{" "}
                        <span className="px-2 text-sm font-medium text-wrap">
                          {curr[curr.access]}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className={"sm:justify-between"}>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTPODetails;
