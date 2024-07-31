import { Badge } from "@/components/ui/badge";
import React from "react";

const PostCard = () => {
  return (
    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center w-full">
          <div className="flex items-center gap-2 w-3/4">
            <div className="font-semibold line-clamp-1">
              Honeywell AI Training for Female students only
            </div>
          </div>
          <div className="ml-auto text-xs text-foreground">2 days ago</div>
        </div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        This Training will happen at college premise physically. It is
        compulsory to interested students to maintain 100% attendance.
        Eligibility: • Women Students pursuing B.Tech CSE, IT, ECE, EX, EE (2025
        Passing Out). • Students with 60% and above throughout their academics.
        (in Class X, Class XII and in graduation up to the current semester).
        Interested Female students can register before 09:00 AM tomorrow
        (29-07-2024) https://forms.gle/t8V9nruTfUo9x2cF7
      </div>
      <Badge className="bg-card-foreground hover:bg-card-foreground text-accent">
        Placed student updates
      </Badge>
    </button>
  );
};

export default PostCard;
