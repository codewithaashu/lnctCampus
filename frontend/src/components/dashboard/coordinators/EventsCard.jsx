import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import {
  Ellipsis,
  IndianRupee,
  MapPin,
  Eye,
  AlarmClock,
  CalendarCheck,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventsCard = () => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const navigate = useNavigate();
  const deleteEvents = () => {
    setOpenDeleteAlert(false);
  };
  const handleClick = () => {
    navigate("/events/event", {
      state: {
        pageType: "update",
        form: {
          eventName: "HackVenture 2024",
          eventLocation: "Online",
          eventCategory: "Hackathons",
          eventLogo: "",
          eventDate: "",
          lastDateOfApplication: "",
          courses: [],
          eventDescription:
            "Get ready for an exhilarating intellectual marathon as we proudly present Hackventure 2024, a national-level hackathon set to ignite the sparks of innovation and creativity! Over 24 hours, this high-stakes competition will bring together some of the brightest minds from across the nation, all vying for the coveted title and a grand prize pool of Rs 50,000. ",
        },
      },
    });
  };

  return (
    <>
      <Card className="relative rounded-md max-w-[320px]">
        <div className="w-full h-28 bg-[#DCE2EC]"></div>
        <div className="absolute top-12 w-full flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1189767041/vector/hackathon-signs-round-design-template-thin-line-icon-concept-vector.jpg?s=612x612&w=0&k=20&c=DW-btIjpNjItFfk35N4KvrMkoGoqd1rEPwb_uV9IZEU="
            alt="Events"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="p-5 mt-5">
          <div className="text-lg font-semibold text-center">
            HackVenture 2024
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-row gap-2 items-center">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-self-end">
                <IndianRupee className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Free</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CalendarCheck className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">30 June' 24</p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-self-end">
                <AlarmClock className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">21 Jun' 24</p>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-3 mt-2">
              <Badge className="text-xs font-semibold bg-green-100 text-green-600 hover:bg-green-100">
                Registration Open
              </Badge>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2.5 px-4">
          <Button
            className="h-fit rounded-full py-1 px-3 font-medium text-[13px]"
            onClick={() => navigate("/events/response")}
          >
            45 Responses
          </Button>
          <DropdownMenu className="w-fit">
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                className="h-8 px-3 focus-visible:ring-0 focus-visible:ring-transparent"
              >
                <Ellipsis className="cursor-pointer w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top" className="w-fit">
              <DropdownMenuItem onClick={handleClick}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>
      <AlertDialogComponent
        open={openDeleteAlert}
        setOpen={setOpenDeleteAlert}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently delete the events.`}
        handleContinue={deleteEvents}
      />
    </>
  );
};

export default EventsCard;
