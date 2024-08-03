import React, { useState } from "react";
import PostCard from "./PostCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { ListFilter } from "lucide-react";
import { postCategory } from "@/db/postCategory";
import SearchInput from "@/shareable/SearchInput";
import PaginationComponent from "@/shareable/PaginationComponent";

const PostListBox = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="w-full h-full">
        {/* Header */}
        <div className="flex justify-between w-full border-b px-4 py-2 h-14 items-center">
          <h1 className="text-xl font-bold">Posts</h1>
          <Select>
            <SelectTrigger
              className={` focus:ring-0 focus:ring-transparent py-1 w-fit text-sm h-fit px-2 flex gap-1`}
            >
              <ListFilter className="w-[14px] h-[14px] text-card-foreground" />
              <p>Filter</p>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter By</SelectLabel>
                {postCategory.map((curr, index) => (
                  <SelectItem value={curr.value} key={index}>
                    {curr.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-5 p-4 h-full">
          {/* Search Input */}
          <SearchInput
            placeholder="Search post by title or description"
            value={searchInput}
            setValue={setSearchInput}
            className="w-full"
          />
          {/* Post Container */}
          <div
            className="relative overflow-hidden"
            style={{ height: window.innerHeight - 300 + "px" }}
          >
            <div
              className={`h-full w-full overflow-y-auto flex flex-col gap-3 scrollbar`}
            >
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
          {/* Pagination */}
          <PaginationComponent />
        </div>
      </div>
    </>
  );
};

export default PostListBox;
