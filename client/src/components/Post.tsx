import React from "react";
import ImageKitComponent from "./ImageKitComponent";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import { Repeat2, } from "lucide-react";

export default function Post() {
  return (
    <>
      <div className="p-4 border-y-[1px] border-borderGray">
        {/* Post Type */}
        <div className="flex items-center gap-2 text-sm mb-2 text-textGray font-boq">
          <Repeat2 size={20} /> <span>ismail reposted</span>
        </div>

        {/* Post content */}
        <div className="flex gap-2">
          {/* Avatar */}
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <ImageKitComponent path="/general/avatar.png" alt="post" w={100} h={100} tr={true} />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Top */}
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-md font-bold">Ismail</h1>
                <p className="text-textGray">@ismail_dev</p>
                <p className="text-textGray">1 day</p>
              </div>
              <PostInfo />
            </div>
            {/* Text and media */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur ipsam dolorum officiis atque obcaecati non magnam iste. Quia nemo distinctio totam itaque consectetur voluptatem atque accusamus reiciendis sint? Accusamus.</p>
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
              <ImageKitComponent path="/general/post.jpeg" alt="post" w={600} h={600} tr={true} />
            </div>
            {/* Bottom */}
            <PostInteraction/>
          </div>
        </div>
      </div>
    </>
  );
}
