import { Separator } from "@/components/ui/separator";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import TooltipComponent from "@/shareable/TooltipComponent";
import { Archive, MessageCircle, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import EditPostDialog from "./EditPostDialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CommentsDialog from "./CommentsDialog";

const PostContentBox = () => {
  const [openDeleteAlertBox, setOpenDeleteAlertBox] = useState(false);
  const [openArchiveAlertBox, setOpenArchiveAlertBox] = useState(false);
  const [openEditDialogBox, setOpenEditDialogBox] = useState(false);
  const [value, setValue] = useState("");
  const [openCommentsDialogBox, setOpenCommentsDialogBox] = useState(false);

  const handleArchive = () => {
    setOpenArchiveAlertBox(false);
  };
  const handleDelete = () => {
    setOpenDeleteAlertBox(false);
  };
  const handleEdit = () => {
    setOpenEditDialogBox(false);
  };
  const handleAddComment = () => {};
  const text =
    "This Training will happen at college premise physically. It is compulsory to interested students to maintain 100% attendance.\n\n Eligibility: \n• Women Students pursuing B.Tech CSE, IT, ECE, EX, EE (2025 Passing Out). \n• Students with 60% and above throughout their academics. (in Class X, Class XII and in graduation up to the current semester). \n \n Interested Female students can register before 09:00 AM tomorrow (29-07-2024) \n https://forms.gle/t8V9nruTfUo9x2cF7";
  return (
    <>
      <div className="w-full">
        {/* Header */}
        <div className="flex gap-2 items-center justify-start w-full border-b px-4 py-2 h-14">
          <TooltipComponent
            Icon={MessageCircle}
            content={"Show Comments"}
            handleClick={() => setOpenCommentsDialogBox(true)}
            variant="ghost"
          />
          <TooltipComponent
            Icon={Pencil}
            content={"Edit Post"}
            handleClick={() => setOpenEditDialogBox(true)}
            variant="ghost"
          />
          <TooltipComponent
            Icon={Archive}
            content={"Archive Post"}
            handleClick={() => setOpenArchiveAlertBox(true)}
            variant="ghost"
          />
          <TooltipComponent
            Icon={Trash2}
            content={"Delete Post"}
            handleClick={() => setOpenDeleteAlertBox(true)}
            variant="ghost"
          />
        </div>
        {/* Post Content */}
        <div className="flex flex-col flex-1">
          {/* Post title and time stamp */}
          <div className="flex p-4 items-center justify-between">
            <div className="w-3/4 grid gap-1">
              <h1 className="text-base font-semibold ">
                Honeywell AI Training for Female students only
              </h1>
              <p className="text-xs line-clamp-1">
                Post for LNCT B.Tech, LNCTE CSE, LNCTU MCA
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              July 24, 2024, 3:20 PM
            </p>
          </div>
          <Separator className="py-0" />
          <div className="p-4 text-sm whitespace-pre-wrap flex-1">{text}</div>
          <div className=" w-full  absolute bottom-0">
            <Separator className="py-0" />
            <div className="grid gap-5 p-4">
              <Textarea
                placeholder="Write comments here... This will notify to all students and will pinned."
                className="focus-visible::ring-0 focus-visible:ring-transparent resize-none"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                className="w-fit justify-self-end"
                onClick={handleAddComment}
              >
                Add Comment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog open */}
      <CommentsDialog
        open={openCommentsDialogBox}
        setOpen={setOpenCommentsDialogBox}
      />
      <EditPostDialog
        editPostForm={{
          title: "",
          description: "",
          postCategory: "",
          files: [],
        }}
        handleSubmit={handleEdit}
        open={openEditDialogBox}
        setOpen={setOpenEditDialogBox}
      />
      <EditPostDialog
        editPostForm={{
          title: "",
          description: "",
          postCategory: "",
          files: [],
        }}
        handleSubmit={handleEdit}
        open={openEditDialogBox}
        setOpen={setOpenEditDialogBox}
      />
      <AlertDialogComponent
        open={openArchiveAlertBox}
        setOpen={setOpenArchiveAlertBox}
        title={"Are you absolutely sure?"}
        description={
          "This action cannot be undone. This will archive post and no one will see this post."
        }
        handleContinue={handleArchive}
      />
      <AlertDialogComponent
        open={openDeleteAlertBox}
        setOpen={setOpenDeleteAlertBox}
        title={"Are you absolutely sure?"}
        description={
          "This action cannot be undone. This will permanently delete post and remove all data related to post from our servers."
        }
        handleContinue={handleDelete}
      />
    </>
  );
};

export default PostContentBox;
