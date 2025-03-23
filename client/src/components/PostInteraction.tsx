import React from "react";
import { MessageCircle, Repeat2, Heart, Bookmark, Share } from "lucide-react";

export default function PostInteraction() {
  return (
    <div className="flex items-center justify-between gap-1 lg:gap-10 my-2 text-textGray">
      <div className="flex flex-1 items-center justify-between">
        {/* comments */}
        <div className="flex items-center gap-[1px] cursor-pointer group">
          <MessageCircle size={20} className="group-hover:text-iconBlue" />
          <span className="group-hover:text-iconBlue text-sm">130</span>
        </div>

        {/* repeat */}
        <div className="flex items-center gap-[1px] cursor-pointer group">
          <Repeat2 size={22} className="group-hover:text-iconGreen" />
          <span className="group-hover:text-iconGreen text-sm">110</span>
        </div>

        {/* like */}
        <div className="flex items-center gap-[1px] cursor-pointer group">
          <Heart size={20} className="group-hover:text-iconPink" />
          <span className="group-hover:text-iconPink text-sm">200</span>
        </div>
      </div>
      {/* save and share */}
      <div className="flex items-center justify-between gap-[1px] lg:gap-1">
        <div className="flex items-center cursor-pointer group">
          <Bookmark size={20} className="group-hover:text-iconBlue text-sm" />
        </div>
        <div className="flex items-center cursor-pointer group">
          <Share size={20} className="group-hover:text-iconBlue text-sm" />
        </div>
      </div>
    </div>
  );
}
