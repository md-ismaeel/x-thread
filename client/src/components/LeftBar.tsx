import { menuList } from "@/constant/constant";
import { Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import ImageKitComponent from "./ImageKitComponent";

export default function LeftBar() {
  return (
    <section className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo */}
      <div>
        <Link
          href={"/"}
          className="flex justify-start items-center p-2 hover:bg-[#1d9bf0] hover:bg-opacity-10 rounded-md"
        >
          <Twitter className="w-5 h-5" />
        </Link>

        {/* Menu List */}
        <div className="flex flex-col">
          {menuList.map(({ id, link, icon: Icon, name }) => (
            <Link
              key={id}
              href={link}
              className="flex items-center gap-2 py-2 hover:bg-[#1d9bf0] hover:bg-opacity-10 px-2 rounded-md"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden xxl:block">{name}</span>
            </Link>
          ))}
        </div>

        {/* post icon */}
        <Link
          href={"/post"}
          className="flex justify-center items-center bg-white text-black h-8 w-8 rounded-full xxl:hidden mt-2"
        >
          <ImageKitComponent path="/icons/post.svg" alt="" w={24} h={24} />
        </Link>

        {/* post button */}
        <Link
          href={"/post"}
          className="hidden mt-2 xxl:flex justify-center items-center bg-white text-black py-1.5 rounded-full "
        >
          Post
        </Link>
      </div>

      {/* Button */}

      {/* User Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative rounded-full overflow-hidden cursor-pointer">
            <ImageKitComponent path="/general/avatar.png" alt="user" w={40} h={40} tr={true}/>
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ismail</span>
            <span className="text-textGray text-sm">@_jd </span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer">...</div>
      </div>
    </section>
  );
}
