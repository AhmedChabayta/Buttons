import React from "react";
import {
  HomeIcon,
  LibraryIcon,
  CogIcon,
  BookmarkIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";

function Nav() {
  return (
    <div className="flex space-x-10 justify-center w-screen p-5 text-black">
      <HomeIcon className="w-7" />
      <LibraryIcon className="w-7" />
      <CogIcon className="w-7" />
      <BookmarkIcon className="w-7" />
      <ChatAlt2Icon className="w-7" />
    </div>
  );
}

export default Nav;
