import Post from "@/components/Post";
import { Share } from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="px-4 pt-4 flex justify-between font-bold text-textGray border-b-[1px] border-borderGray">
          <Link href={"/"} className="pb-3 flex justify-center items-center border-b-4 border-iconBlue">For you</Link>
          <Link href={"/"} className="pb-3 flex justify-center items-center border-b-4 border-iconBlue">Following</Link>
        </div>

        <Share/>
        <Post/>
      </main>
    </>
  );
}
