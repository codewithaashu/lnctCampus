import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { tpoDetails } from "@/db/tpoDetails";
const ViewTPODetails = ({ open, setOpen, data }) => {
  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] max-w-full no-scrollbar max-h-screen overflow-auto">
        <div className="py-4">
          <div className="flex flex-col gap-8 items-center">
            {/* Header with image and name with department */}
            <div className="flex gap-3 flex-row items-center justify-center">
              <img
                src={data?.imgSrc}
                alt="Human"
                className="w-[100px] h-[100px] rounded-full object-center aspect-square"
              />
              <div className="flex flex-col gap-[1px] items-center">
                <h1 className="text-lg font-semibold">{data?.name}</h1>
                <p className="text-xs font-semibold text-muted-foreground">
                  {data?.designation}
                </p>
              </div>
            </div>
            {/* Details */}
            <div className="flex flex-col gap-3 justify-between">
              {/* Peronal Details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold text-sky-700">
                  Personal Details
                </h1>
                <div className="flex flex-col gap-[2px] w-full">
                  {data?.personalDetails?.map((curr, index) => {
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
              {/* Contact Details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold text-sky-700">
                  Contact Details
                </h1>
                <div className="flex flex-col gap-[2px] w-full">
                  {data?.contactDetails?.map((curr, index) => {
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
