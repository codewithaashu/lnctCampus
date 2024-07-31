import React from "react";

const CommentsCard = () => {
  return (
    <div className="flex flex-col gap-2 p-3 text-[15px] hover:bg-accent border rounded-md shadow-sm">
      <div className="w-full flex flex-col gap-[1px]">
        <div className="flex items-center gap-3">
          <div className="font-semibold">Ashish Ranjan</div>
          <div className="ml-auto text-xs text-muted-foreground">
            2 minutes ago
          </div>
        </div>
        <div className="text-xs">LNCDMCA11038,MCA</div>
      </div>
      <div class="line-clamp-2 text-[13px] text-muted-foreground">
        I have a question about the budget for the upcoming project. It seems
        like there's a discrepancy in the allocation of resources. I've reviewed
        the budget report and identified a few areas where we might be able to
        optimize our spending without compromising the project's quality. I've
        attached a de
      </div>
    </div>
  );
};

export default CommentsCard;
