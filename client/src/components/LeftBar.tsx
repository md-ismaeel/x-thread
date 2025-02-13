import { menuList } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LeftBar() {
  return (
    <>
      <section className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
        {/* <Logo /> */}
        <div className="">
          <Link href={"/"}>
            <Image src="/icons/logo.svg" width={26} height={26} alt="logo" />
          </Link>

          {/* menu list */}
          <div className="flex flex-col">
            {menuList.map((link) => (
              <Link href={link.link}>
                <Image src={link.icon} width={26} height={26} alt="icons" />
              </Link>
            ))}
          </div>
        </div>

        {/* user */}
        <div className="">user</div>
      </section>
    </>
  );
}
