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
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-14  flex justify-end gap-5 px-5 items-center shadow-md fixed top-0 left-[210px] bg-background z-10"
        style={{ width: window.innerWidth - 210 + "px" }}
      >
        <div className="rounded-full p-2 border-[1px] shadow-sm ">
          {theme === "light" ? (
            <Sun
              className="cursor-pointer w-[18px] h-[18px]"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <Moon
              className="cursor-pointer w-[18px] h-[18px]"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
        <div className="flex gap-2 items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-1 cursor-pointer">
                <h1 className="text-muted-foreground text-[13.4px] font-semibold">
                  Pushpank Thakur
                </h1>
                <ChevronDown className="w-[15px] h-[15px] text-muted-foreground self-end" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/change-password")}
              >
                Change Password
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default TopBar;
