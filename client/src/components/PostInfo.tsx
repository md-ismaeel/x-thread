import React from "react";
import ImageKitComponent from "./ImageKitComponent";

export default function PostInfo() {
  return (
    <>
      <div className="cursor-pointer h-4 w-4 relative">
        <ImageKitComponent
          path="icons/infoMore.svg"
          alt="more"
          w={16}
          h={16}
        />
      </div>
    </>
  );
}
