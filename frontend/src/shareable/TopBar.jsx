import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const TopBar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <div className="h-14 border-[1px] flex justify-end gap-5 px-5 items-center rounded-sm shadow-md">
        <div className="rounded-full p-2 border-[1px] shadow-sm ">
          {theme === "light" ? (
            <Sun
              className="cursor-pointer w-5 h-5"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <Moon
              className="cursor-pointer w-5 h-5"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Change Password</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default TopBar;
